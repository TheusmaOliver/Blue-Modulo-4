import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
const initialValue = {
  nome: "",
  imagemUrl: "",
};
export default function FormComponent({ id }) {
  const [values, setValues] = useState(initialValue);

  useEffect(() => {
    if (id) {
      const loadData = async () => {
        const response = await api.buildApiGetRequest(api.readById(id));

        const bodyResult = await response.json();

        setValues(bodyResult);
      };
      loadData();
    }
  }, [id]);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }
  return (
    <div>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          required
          value={values.nome}
          onChange={onChange}
        />
        <label htmlFor="imagemUrl">URL da imagem</label>
        <input
          type="text"
          name="nome"
          required
          value={values.imagemUrl}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
