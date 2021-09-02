import React, { useEffect, useState } from "react";
import "./bloginfocomponent.css";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function BlogInfoComponent({ id }) {
  const router = useHistory();
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    async function loadBlog() {
      const data = await api.get("/rn-api/?api=posts").then((response) => {
        const info = response.data;

        const actualItem = info.find((item) => item.id === parseInt(id));
        if (!actualItem) {
          toast.error("Blog não existe");
          router.replace("/");
          return;
        }
        setItem(actualItem);
      });
      return data;
    }
    loadBlog();
  }, [id, router]);

  if (!item) {
    return <div>carregando</div>;
  }

  const saveBlog = () => {
    const favorites = JSON.parse(localStorage.getItem("blog")) || [];

    const hasBlog = favorites.some((favorite) => favorite.id === item.id);
    console.log(toast);
    if (hasBlog) {
      toast.info("Você já possui esse blog salvo");
      //toast.error("Você já possui esse filme salvo");
      return;
    }

    favorites.push(item);
    localStorage.setItem("blog", JSON.stringify(favorites));
    toast.success("Blog salvo com sucesso");
  };

  return (
    <div>
      <div className="card">
        <h1>{item.titulo}</h1>
        <img src={item.capa} alt={item.titulo} />
        <span>{item.subtitulo}</span>
        <button onClick={saveBlog}>Salvar</button>
      </div>
    </div>
  );
}
