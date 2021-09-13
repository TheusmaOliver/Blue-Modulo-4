import React from "react";
import { useHistory } from "react-router";
import PersonagensList from "../../components/PersonagensList/PersonagensList";

export default function Home() {
  const router = useHistory();
  return (
    <div>
      <button onClick={() => router.push("/register")}>Adicionar</button>
      <PersonagensList />
    </div>
  );
}
