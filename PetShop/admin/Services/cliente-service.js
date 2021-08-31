
const listaCliente = () => {
 
  return fetch("http://localhost:3000/profile")
    .then((response) => response.json());
};


const criarCliente = (nome,email) => {
  return fetch("http://localhost:3000/profile",{
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({
      nome:nome,
      email:email,
    })
  }).then(response => response.body);
}

const removeCliente = (id)=>{
  return fetch(`http://localhost:3000/profile/${id}`,{
    method: "DELETE",

  })
}

export const ClienteService ={
  listaCliente,
  criarCliente,
  removeCliente,
};




