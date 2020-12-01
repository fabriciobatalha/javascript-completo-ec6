// console.log(window);
// WINDOW É O OBJETO GLOBAL DO BROWNSER
// POSSUI DIFERENTES MÉTODOS E PROPRIEDADES
// window.innerHeight;
const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado);

console.log(document.body);

// Element
const h1Classes = h1Selecionado.classList;
console.log(h1Classes);
// arraylike
console.log(h1Classes[1]);

const titulo= document.querySelector('h1');

console.log(titulo.innerText); // retorna o texto
console.log(titulo.classList); // retorna as classes
console.log(titulo.id); // retorna o id
console.log(titulo.offsetHeight); // retorna a altura do elemento

function callbackh1() {
  alert('Clicou no h1.');
}

// titulo.addEventListener('click', callback); // ativa a função callback ao click no título
titulo.addEventListener('click', callbackh1);

console.log('Exercício');

// RETORNE A URL DA PÁGINA ATUAL UTILIZANDO O OBJETO WINDOW
console.log(window.location.href);

// Selecione o primeiro elemento da página que possua a classe ativo
var elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);