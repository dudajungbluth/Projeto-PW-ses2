
function pag() {
  window.location.href = "ProjetoPW.html";
}

function user() {
  window.location.href = "usuario.html";
}

function prod() {
  window.location.href = "cadastroprodutos.html";
}
 
function abrirCarrinho() {
 
  carrinhoDiv.style.display = "block";
}
function fecharCarrinho() {
  var carrinhoDiv = document.getElementById("carrinho");
  carrinhoDiv.style.display = "none";
}

var nomeprod = document.querySelector('.nomeprod');
var error = document.querySelector('.error');
var precoprod = document.querySelector('.precoprod');
var imagemprod = document.querySelector('.imagemprod');
var produtocadastro = document.querySelector('.produtobutton');
var conteiner = document.querySelector('.container'); // Container do html das roupas 
var carrinhoDiv = document.getElementById("carrinho");

// PROJETO PW PART 2 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  let form = document.querySelector("form");

  form.addEventListener('submit',  async(e)=>{
  e.preventDefault();
  
  const data = await fetch('produtosadc.php', {
  method: 'POST',
  body: new FormData(form)
  }).then(res => res.json());
  console.log(data);
  error.innerHTML = data.message;
  });
  

  







// const adicionados = localStorage.getItem('cad');
// if (adicionados) {
//   cad = JSON.parse(adicionados);
// }

// produtocadastro.addEventListener('click', () => {
//   let produto = {
//     nome: nomeprod.value,
//     preco: precoprod.value,
//     imagem: imagemprod.value,
//   };

//   // Verifica se o produto já existe no array
//   const produtoExistente = cad.find((p) => p.nome === produto.nome);
//   if (produtoExistente) {
//     console.log('O produto já foi adicionado anteriormente.');
//     return; // Sai da função se o produto já existe
//   }

//   cad.push(produto);

//   const adicionados = JSON.stringify(cad);
//   localStorage.setItem('cad', adicionados);

//   console.log(cad);

//   const div = document.createElement('div');
//   div.classList.add('box');
//   div.innerHTML = `<img src="${produto.imagem}"><p class="nomepeca">${produto.nome}</p>
//     <div class="linha">
//       <p class="p">R$</p>
//       <p class="precos">${produto.preco}</p>
//     </div>`;

//   conteiner.appendChild(div);
// });


// var removerrr = document.querySelector(".removeitens");

// removerrr.addEventListener('click', () => {
//   localStorage.removeItem('cad');
//  cad = []
// });

// var especifico = document.querySelector('.itemescolhido')
// var botaoremover = document.querySelector('.itemesp')

// botaoremover.addEventListener('click', () => {
    
// })