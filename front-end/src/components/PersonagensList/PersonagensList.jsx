import React, { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function PersonagensList() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.buildApiRequest(api.readAllUrl());

      const bodyResult = await response.json();

      setPersonagens(bodyResult);
    };
    loadData();
  }, []);

  return (
    <div>
      {personagens.map((personagem, index) => (
        <div key={index}>{personagem.nome}</div>
      ))}
    </div>
  );
}
