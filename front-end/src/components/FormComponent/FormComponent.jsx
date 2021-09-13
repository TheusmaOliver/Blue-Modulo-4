import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
const initialValue = {
  nome: "",
  imagemUrl: "",
  origemId: "",
};
export default function FormComponent({ id }) {
  const [values, setValues] = useState(initialValue);
  const [personagem, setPersonagem] = useState({});
  const [localizacao, setLocalizacao] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const response = await api.buildApiGetRequest(
        api.readAllLocalizationUrl()
      );

      const bodyResult = await response.json();

      setLocalizacao(bodyResult);
    };
    loadData();
    if (id) {
      const loadData = async () => {
        const response = await api.buildApiGetRequest(api.readById(id));

        const bodyResult = await response.json();

        setValues(bodyResult);
        setPersonagem(bodyResult);
      };
      loadData();
    }
  }, [id]);
  console.log(localizacao);
  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  async function onSubmit(ev) {
    ev.preventDefault();

    const payload = {
      ...values,
      origemId: +values.origemId,
    };

    const response = await api.buildApiPostRequest(api.createUrl(), payload);

    const bodyResult = await response.json();

    console.log(bodyResult);
  }
  if (!localizacao) {
    return <div>carregando...</div>;
  }
  return (
    <div className="form">
      <h2 className="form-title">
        {id ? `Editando: ${personagem.nome}` : "Cadastre um novo personagem"}
      </h2>
      <form onSubmit={onSubmit} className="form-content">
        <div className="form-box">
          <label className="form-box__label" htmlFor="nome">
            Nome
          </label>
          <input
            className="form-box__input"
            type="text"
            name="nome"
            required
            value={values.nome}
            onChange={onChange}
          />
        </div>
        <div className="form-box">
          <label className="form-box__label" htmlFor="imagemUrl">
            URL da imagem
          </label>
          <input
            className="form-box__input"
            type="text"
            name="imagemUrl"
            required
            value={values.imagemUrl}
            onChange={onChange}
          />
        </div>
        <div className="form-box">
          <select onChange={onChange} name="origemId" id="origemId">
            <option>Selecione uma opção</option>
            {localizacao.map((item, index) => (
              <option key={index} name="origemId" value={item.id}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="adicionar" />
      </form>
    </div>
  );
}
