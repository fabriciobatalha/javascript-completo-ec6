// // const imgs = document.querySelectorAll('img');
// // console.log(imgs);

// // let i = 0;
// // // item, index, array
// // imgs.forEach(function(img, index, array) {
// //   // console.log(img, index, array);
// //   // console.log(array);
// //   // ===
// //   // console.log(imgs);
// // });

// // // item que parece um array
// // const titulos = document.getElementsByClassName('titulo');
// // const titulosArray = Array.from(titulos);

// // console.log(titulos);
// // console.log(titulosArray);

// // titulosArray.forEach(function(tituloArray, index, array) {
// //   // console.log(tituloArray, index, array);
// // });

// // const imgss = document.querySelectorAll('img');
// // imgss.forEach((item) => {
// //   console.log(item);
// // });

// console.log('--- ARROW FUNCTION ---');

// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(img, index, array) {
//   console.log(img, index, array)
// });

// let i = 0;
// const imgs2 = document.querySelectorAll('img');
// imgs2.forEach(img => {
//   console.log(i++);
//   // return console.log(i++)
// });

// let j = 0;
// const imgs3 = document.querySelectorAll('img');

// imgs3.forEach(img => console.log(j++));

console.log('Exercício');

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(item => console.log(item));
paragrafos.forEach(texto => console.log(texto.innerText));