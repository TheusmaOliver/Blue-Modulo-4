import React from "react";
import { api } from "../../api/api";

export default function AdicionarPersonagem(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const payload = {
      email,
      senha,
    };

    const response = await api.buildApiPostRequest(api.loginUrl(), payload);

    const bodyResult = await response.json();

    localStorage.setItem("JWT", bodyResult.acessToken);
    props.history.push("/");
  };

  return (
    <div className="adicionar">
      <form className="adicionar__form form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form__label">
          email:
        </label>
        <br />

        <input type="text" id="email" name="email" className="form__input" />

        <br />

        <label htmlFor="senha" className="form__label">
          senha:
        </label>
        <br />

        <input
          type="password"
          id="senha"
          name="senha"
          className="form__input"
        />

        <br />

        <input
          type="submit"
          value="Login"
          className="form__submit button button--success"
        />
      </form>
    </div>
  );
}
