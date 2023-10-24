function pag() {
  window.location.href = "ProjetoPW.html";
}
function user() {
  window.location.href = "usuario.html";
}
function roupas() {
  window.location.href = "roupas.html";
}
function abrirCarrinho() {
 
  carrinhoDiv.style.display = "block";
}
function fecharCarrinho() {
  var carrinhoDiv = document.getElementById("carrinho");
  carrinhoDiv.style.display = "none";
}


let produtosCarrinho = [];

var conteiner = document.querySelector('.conteiner');
var carrinhoDiv = document.getElementById("carrinho");
  



function exibirProdutos() {

  conteiner.innerHTML = '';

  var produtosLocalStorage = localStorage.getItem('cad');           /// CAD
  var produtos = JSON.parse(produtosLocalStorage);

  for (let i in produtos) {
    let produto = produtos[i];

    const div = document.createElement('div');
    div.classList.add('boxfem');
    div.innerHTML = `<img class="imagem" src="${produto.imagem}">
      <p class="nomepeca">${produto.nome}</p>
      <div class="linha">
        <p class="p">R$</p>
        <p class="precos">${produto.preco}</p><br>
        <button class="adicionar">Adicionar ao carrinho</button>
      </div>`;

    conteiner.appendChild(div);

    const botaoAdicionar = div.querySelector('.adicionar');
    
    botaoAdicionar.addEventListener('click', () => {
    
      const existingProduct = produtosCarrinho.find((prod) => prod.nome === produto.nome);
    
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        produto.quantity = 1;
        produtosCarrinho.push(produto);
      }
    
      console.log(produtosCarrinho); 
      const jsccarro = JSON.stringify(produtosCarrinho);
      localStorage.setItem('produto', jsccarro);
    });

  }
}

atualizarCarrinho()


// Evento disparado quando a página é carregada
window.addEventListener('DOMContentLoaded', () => {
  exibirProdutos();
  carregarCarrinhoLocalStorage();

  var add = document.querySelectorAll('.adicionar');
  add.forEach((botao) => {
    botao.addEventListener('click', adicionarAoCarrinho);

  });
});

window.addEventListener('DOMContentLoaded', () => {
  carregarCarrinhoLocalStorage();
  atualizarCarrinho()
});


function adicionarAoCarrinho() {
  salvarCarrinhoLocalStorage();
  atualizarCarrinho();
}


function salvarCarrinhoLocalStorage() {
  localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
}


// Função para carregar o carrinho a partir do armazenamento local
function carregarCarrinhoLocalStorage() {
  var carrinhoArmazenado = localStorage.getItem('carrinho');
  console.log(carrinhoArmazenado)
  if (carrinhoArmazenado) {
    produtosCarrinho = JSON.parse(carrinhoArmazenado);
    atualizarCarrinho();
  }
}


function atualizarCarrinho() {
  carrinhoDiv.innerHTML = '';
  let total = 0
  for (let i in produtosCarrinho) {
    let produto = produtosCarrinho[i];
    var colocam = document.createElement('div');
    colocam.innerHTML = `
      <img class="imgcarrinho" src="${produto.imagem}">
      <p class="nomecarrinho">${produto.nome}</p>
      <p class="precocarrinho">R$ ${produto.preco * produto.quantity}</p>
      <div>
      <button class="remove-button">-</button>
      <span class="quantity">${produto.quantity}</span>
      <button class="add-button">+</button>
    `;
    carrinhoDiv.appendChild(colocam);

    total += produto.preco * produto.quantity;

    const addButton = colocam.querySelector('.add-button');
    const removeButton = colocam.querySelector('.remove-button');

    addButton.addEventListener('click', () => {
      produto.quantity += 1;
      salvarCarrinhoLocalStorage();
      atualizarCarrinho();
    });

    removeButton.addEventListener('click', () => {
      if (produto.quantity > 0) {
        produto.quantity -= 1;
        if (produto.quantity <= 0) {
          produtosCarrinho = produtosCarrinho.filter((item) => item !== produto);
        }
        salvarCarrinhoLocalStorage();
        atualizarCarrinho();
      }
    });
  }
  
  carrinhoDiv.insertAdjacentHTML('beforeend', `<hr class="hr"><p class = 'total' >Subtotal:  R$${total}</p><button class="botaofechar" onclick="fecharCarrinho()">FECHAR</button>`);

}
