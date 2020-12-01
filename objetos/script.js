var pessoa = {
  nome: 'Fabrício',
  idade: 20
}

console.log(typeof pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
  // ou
  perimetro2(lado2) {
    return this.lados * lado2;
  },
}

console.log(quadrado.area(2));
console.log(quadrado.perimetro(2));
console.log(quadrado.perimetro(3));

console.log(Math.random());
console.log(Math.PI)

var height = 120;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  },
}

var bg = menu.backgroundColor = '#000';

console.log(menu.metadeHeight());

console.log(menu.backgroundColor);
console.log(bg);

var testeTeste = menu.teste = 'Testando';

console.log(menu.teste);
console.log(testeTeste);

console.log(testeTeste.length);

console.log('Exercício');

// CRIE UM OBJETO COM OS SEUS DADOS PESSOAIS

var meusDados = {
  nome: 'Fabrício',
  sobrenome: 'Batalha',
  idade: 20,
  endereco: 'Rua Yumaguaris, 66, Quadra 145 - Novo Aleixo',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
}

console.log(meusDados.nome);
console.log(meusDados.sobrenome);
console.log(meusDados.idade);
console.log(meusDados.endereco);
console.log(meusDados.nomeCompleto());

// CRIE UM MÉTODO NO OBJETO ANTERIOR, QUE MOSTRE O SEU NOME COMPLETO

// MODIFIQUE O VALOR DA PROPRIEDADE PRECO PARA 3000

var carro = {
  preco: '1000',
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco);

carro.preco = 3000;

console.log(carro.preco);

// CRIE UM OBJETO DE UM CACHORRO QUE REPRESENTE UM LABRADOR
// PRETO COM 10 ANOS, QUE LATE AO VER UM HOMEM

var cachorro = {
  raca: 'Labrador',
  idade: 10,
  cor: 'Preto',
  latir(pessoa) {
    if(pessoa === 'Homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  },
}

console.log(cachorro.latir('Homem'));

console.log('Fim exercício');

var nomeAgain = 'Fabrício';

console.log(nomeAgain.length);
console.log(nomeAgain.charAt(1));
var newName = nomeAgain.replace('c', 't');
console.log(nomeAgain);
console.log(newName);