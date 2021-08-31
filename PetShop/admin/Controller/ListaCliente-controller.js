import {ClienteService} from '../Services/cliente-service.js';

const criaNovaLinha = (nome, email,id) => {
    const linhaNovoCliente = document.createElement("tr"); //Para criar várias linhas de conteúdo
  
    const conteudo = `
  
  <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> `;
    linhaNovoCliente.innerHTML = conteudo; //vai acessar o interior do elemento e vai colocar o conteúdo la dentro
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente;
  };
  

const tabela = document.querySelector("[data-tabela]"); // Pegando o data atribute do DOM (Document Object Model) da página lista cliente

tabela.addEventListener("click",(event)=>{
  let btnDeletar = event.target.className === "botao-simples botao-simples--excluir"

  if(btnDeletar){
    const linhaCliente = event.target.closest("[data-id]");

    let id = linhaCliente.dataset.id;
    ClienteService.removeCliente(id).then(()=> linhaCliente.remove())
  }
})


ClienteService
    .listaCliente()
    .then((data)=>{
        data.forEach((elemento) => {
          tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
        });
    
    });