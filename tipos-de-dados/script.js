var nome = 'Fabrício';
var idade = 20;
var time;

console.log(typeof nome, typeof idade, typeof time);

var nome = 'Fabrício';
var sobrenome = 'Batalha';
var nomeCompleto = nome +' '+ sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var fraseRomario1 = 'Romário fez ' + gols + ' gols';
console.log(fraseRomario1);

// Template String
var gols = 1000;
var fraseRomario2 = `Romário fez ${gols} gols.`;
console.log(fraseRomario2);

var frase1 = 'Testando as "aspas"';
var frase2 = "Testando as 'aspas'";
var frase3 = "JavaScript é \"super\" fácil";
var frase4 = `JavaScript é "super" fácil`;

console.log(frase4);

// Exercício

console.log('Exercício');

// Declare uma variável contendo uma string
var escola = 'UniNorte';
console.log(escola);

// Declare uma variável contendo um número dentro de uma string
var numeroAleatorio = '2020';
console.log(numeroAleatorio);

// Declare uma variável com a sua idade;
var idade = 20;
console.log(idade);

// Declare duas variáveis, uma com seu nome e outra com o seu sobrenome e some as mesmas
var nome2 = 'Fabrício';
var sobrenome2 = 'Batalha';
//var nomeCompleto2 = `Nome completo: ${nome2 + ' ' + sobrenome2}`;
var nomeCompleto2 = `Nome completo: ${nome2} ${sobrenome2}`;
var nomeCompleto3 = 'Nome completo: ' + nome2 + ' ' + sobrenome2;
console.log(nomeCompleto3);

// Coloque a seguinte frase em uma variável: It's time

var frase30 = `It's time`;
var frase31 = 'It\'s time';
console.log(frase31);

// Verifique o tipo da variável que contém o seu nome

var nomeAgain = 'Fulano de Tal';
console.log(typeof nomeAgain);