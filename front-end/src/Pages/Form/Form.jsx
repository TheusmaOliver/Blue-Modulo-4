import React from "react";
import { useParams } from "react-router";
import FormComponent from "../../components/FormComponent/FormComponent";

export default function Form() {
  const { id } = useParams();
  return <FormComponent id={id} />;
}
