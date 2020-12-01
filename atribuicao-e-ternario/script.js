'use strict'

// OPERADORES DE ATRIBUIÇÃO
// PODEM FUNCIONAR COMO FORMAS ABREVIADAS

var x = 5,
    y = 10;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);

var numero = 20;

// numero = numero + 20;
numero += 10;
console.log(numero);

// OPERADOR TERNÁRIO

var idade = 18,
    podeBeber,
    naoPossuiDiabates = true;

podeBeber = (idade >= 18 && naoPossuiDiabates);
// podeBeber = (idade >= 18 && naoPossuiDiabates) ? true : false;

console.log(podeBeber);

// IF ABREVIADO

var possuiAutomovel = true;

if (possuiAutomovel)
  console.log('Sim, possui.');
else
  console.log('Não possui.');