import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import PersonagensCard from "../PersonagensCard/PersonagensCard";

export default function PersonagensList() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.buildApiGetRequest(api.readAllUrl());

      const bodyResult = await response.json();

      setPersonagens(bodyResult);
    };
    loadData();
  }, []);

  return (
    <div className="cards">
      {personagens.map((personagem, index) => (
        <PersonagensCard key={index} personagem={personagem} />
      ))}
    </div>
  );
}
