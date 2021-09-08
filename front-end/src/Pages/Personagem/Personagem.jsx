import React from "react";
import { useParams } from "react-router";
import PersonagemCard from "../../components/PersonagemCard/PersonagemCard";

export default function Personagem() {
  const { id } = useParams();
  return <PersonagemCard id={id} />;
}
