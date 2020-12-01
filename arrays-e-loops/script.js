var videoGames = ['Xbox', 'Switch', 'PS4'];

console.log(videoGames[0]);

// O RECOMENDADO É USAR O LET
for (let numero = 0; numero < 5; numero++) {
  console.log(videoGames[numero]);
}

// MÉTODOS E PROPRIEDADES DE UM ARRAY

var ultimoItem = videoGames.pop(); // Remove o último item e retorna ele
console.log(ultimoItem);

for (let numero = 0; numero < 5; numero++) {
  console.log(videoGames[numero]);
}

videoGames.push('3DS'); // Adiciona ao final da array

for (let numero = 0; numero < 5; numero++) {
  console.log(videoGames[numero]);
}

console.log(videoGames.length); // Informa a quantidade de elementos contidos no array

// 

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i = i + 5;
}

// ARRAYS E LOOPS

console.log('Arrays e Loops');

var videoGames2 = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var item = 0; item < 4; item++) {
  console.log(videoGames2[item]);
}

// QUANDO NÃO SE SABE QUANTOS ITENS TEM NO ARRAY

console.log('/');

var videoGames3 = ['3DS', 'DS', 'PlayStation 5', 'PSVITA', 'Master System'];
for (var vGame = 0; vGame < videoGames3.length; vGame++) {
  console.log(videoGames3[vGame]);
}

console.log('/');

var objetos = ['Caneta', 'Copo', 'Lápis', 'Mouse', 'Mochila'];

for (var obj = 0; obj < objetos.length; obj++) {
  console.log(objetos[obj]);

  if (objetos[obj] === 'Lápis') {
    break;
  }
}

console.log('/');

var casa = ['Sala', 'Cozinha', 'Quarto', 'Varanda'];

casa.forEach(function(itemTeste) {
  console.log(itemTeste);
});

// INDEX DO ARRAY

console.log('/');

var pessoas = ['Fabrício', 'Adrilene', 'Flávio', 'Vitória'];

pessoas.forEach(function(pessoa, index, array) {
  // array.pop(); 
  // array não precisa estar declarado na function 
  // e mesmo assim pode ser utilizado no escopo
  //console.log(pessoa, index, array);
  console.log(pessoa, index);
});

// NÃO RECOMENDADO

var numero = 0;
var maximo = 50;
for (;numero < maximo;) {
  numero++;
}

// EXERCÍCIO

console.log('Exercício');

// CRIE UMA ARRAY COM OS ANOS QUE O BRASIL GANHOU A COPA
// NO CONSOLE EXIBA UMA MENSAGEM
var anosBrasilCampeao = [1959, 1962, 1970, 2002];
anosBrasilCampeao.forEach(function(anoCampeao) {
  console.log(`O Brasil ganhou a copa de ${anoCampeao}`);
});

// INTERAJA COM UM LOOP NAS FRUTAS ABAIXO E PARE AO CHEGAR EM PERA
// COLOQUE A ÚLTIMA FRUTA DA ARRY EM UMA VARIÁVEL
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

// frutas.forEach(fruta => {
//   console.log(fruta);

//   if (fruta === 'Pera') {
//     break;
//   }
// });

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if (frutas[i] === 'Pera') {
    //var guardarFruta = frutas[i];
    //console.log(guardarFruta); 
    break;
  }
};

//console.log(guardarFruta);
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);