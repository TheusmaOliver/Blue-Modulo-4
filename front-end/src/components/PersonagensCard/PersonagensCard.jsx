import React from "react";
import { useHistory } from "react-router";

export default function PersonagensCard(props) {
  const router = useHistory();
  const { personagem } = props;
  return (
    <div
      className="card"
      onClick={() => router.push(`/about/${personagem.id}`)}
    >
      <img
        className="card__image"
        src={personagem.imagemUrl}
        alt={personagem.nome}
      />
      <h2 className="card__title">{personagem.nome}</h2>
    </div>
  );
}
