import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favorites.css";
import Topbar from "../../components/Topbar/Topbar";

export default function Favoritos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem("blog")) || [];
    setItems(myList);
  }, []);

  function handleDelete(id) {
    let filterPost = items.filter((item) => {
      return item.id !== id;
    });
    setItems(filterPost);
    localStorage.setItem("blog", JSON.stringify(filterPost));
    toast.success("Blog excluido com sucesso");
  }

  return (
    <div>
      <Topbar />
      <div id="posts">
        <h1>Meus Blogs</h1>

        {items.length === 0 && <span>Você não possui nenhum blog salvo</span>}

        <ul className="list">
          {items.map((item) => {
            return (
              <li key={item.id} className="list-item">
                <span className="list-item__span">{item.titulo}</span>

                <div className="list-item__actions">
                  <Link className="list-item__link" to={`/article/${item.id}`}>
                    Ver detalhes
                  </Link>
                  <button
                    className="list-item__btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
