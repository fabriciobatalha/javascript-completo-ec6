function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(90, 1.87));

function corFavorita(cor) {
  if (cor === 'azul') {
    console.log('A sua cor favorita é azul.');
  } else if (cor === 'vermelho') {
    console.log('A sua cor favoria é vermelho.');
  } else if (cor === 'rosa') {
    console.log('A sua cor favorita é rosa.');
  } else {
    console.log('Você não gosta de cores.');
  }
}

corFavorita('rosa');

function mostrarConsole() {
  console.log('Clicando aqui...');
}

addEventListener('click', mostrarConsole);

// addEventListener('click', function() {
//   console.log('Clicando aqui...');
// });

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    console.log('Informe a sua idade');
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} país(es)`;
}

console.log(faltaVisitar(15));

console.log('Exercício');

// Crie uma função para verificar se um valor é Truthy

function possuiVeiculo(resposta) {
  if(resposta === 'sim') {
    return true;
  } else if (resposta === 'não'){
    return false;
  } else {
    console.log('Resposta não identificada');
  }
}

function isTruthy(dado) {
  return !!dado;
}

console.log(isTruthy('Teste'));

console.log(possuiVeiculo('sim'));

// Crie uma função matemática que retorne o perímetro de um

function perimetro(ladoB) {
  return ladoB * 4;
}

console.log(perimetro(2));

// Crie uma função que retorne o seu nome completo

function nomeCompleto(nome, sobrenome) {
  return `O meu nome é ${nome + ' ' +  sobrenome}`;
}

function nomeCompleto2(nome, sobrenome) {
  return `O meu nome é ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Fulano', 'de Tal'));
console.log(nomeCompleto2('Fulano', 'de Tal 2'));

// Crie uma função que verifica se o número é par

function verificaPar(numero) {
  var modulo = numero % 2;

  if (modulo === 0) {
    return `O número ${numero} é par.`;
  } else {
    return `O número ${numero} é ímpar`;
  }
}

console.log(verificaPar(3));

// Crie uma função que retorne o tipo de dado do argumento passado nela

function tipoArgumento(argumento) {
  return typeof argumento;
}

console.log(tipoArgumento(5));

// addEventListener

addEventListener('scroll', function() {
  return console.log('Beltrano da Silva');
});