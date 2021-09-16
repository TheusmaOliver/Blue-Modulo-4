import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../api/api";
import "../../styles/personagemCard.css";

export default function PersonagemCard({ id }) {
  const router = useHistory();
  const [personagem, setPersonagem] = useState(undefined);
  useEffect(() => {
    const loadData = async () => {
      const response = await api.buildApiGetRequest(api.readById(id), true);

      const bodyResult = await response.json();

      setPersonagem(bodyResult);
    };
    loadData();
  }, [id]);
  if (!personagem) {
    return <div>carregando...</div>;
  }
  return (
    <div className="personagem-card">
      <div className="personagem-card__btns">
        <button id="edit" onClick={() => router.push(`/edit/${id}`)}>
          Editar
        </button>
        <button id="delete">Excluir</button>
      </div>
      <h2 className="personagem-card__title">{personagem.nome}</h2>
      <div className="personagem-card__info">
        <img src={personagem.imagemUrl} alt={personagem.nome} />
        <h3>{personagem.origemId}</h3>
      </div>
    </div>
  );
}
