const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection.length);
console.log(gridSection[1]);

console.log('--- querySelector ---');

const animais2 = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');
console.log(animais2, contato, ultimoItem, linkCSS);

// Busca dentro da Ul apenas
const navItem = primeiroUl.querySelector('li');
console.log('li');

// Pegar todo link interno
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
console.log(linkInterno.href);

console.log('--- querySelectorAll ---');

const gridSection2 = document.querySelectorAll('.grid-section');
console.log(gridSection2);
console.log(gridSection2[1]);

const listas = document.querySelectorAll('ul');
console.log(listas);

const titulos = document.querySelectorAll('.titulo');
console.log(titulos);

const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais);

console.log('--- HTMLCollection x NodeList ---');

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// HTML Collection atualiza automaticamente
primeiroUl.classList.add('grid-section');

// Ao vivo
console.log(gridSectionHTML);
// Estático
console.log(gridSectionNode);

// gridSelection... .

const arrayGrid = Array.from(gridSectionHTML);

console.log(arrayGrid);

// arrayGrid com métodos de um array;
arrayGrid.pop();

console.log(arrayGrid);

arrayGrid.forEach(function(item) {
  console.log(item);
});

console.log('--- Exercício ---');

// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links externos (onde o hred começa com #)
const soVelha = document.querySelectorAll('a[href^="#"]');
console.log(soVelha);

// Selecione os primeiro h2 dentro de .animais-descricao
const animais3 = document.querySelector('.animais-descricao');
const primeiroH2 = animais3.querySelector('h2');
//const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(animais3);
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const ultimoParagrafo = paragrafos[--paragrafos.length];
// const ultimoParagrafo = paragrafos[paragrafos.length-1];
console.log(ultimoParagrafo);