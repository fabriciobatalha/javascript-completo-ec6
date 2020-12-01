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

primeiroUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);