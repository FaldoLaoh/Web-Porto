// // Function
// function seorangPersona(nama, umur, pekerjaan) {
//   const persona = {
//     nama: nama,
//     umur: umur,
//     pekerjaan: pekerjaan,
//   };
//   return persona;
// }

// const persona = seorangPersona("faldo", 30, "Mahasigma");
// console.log(persona);

// // Function Parameter

// // Parameter
// const myText = "halo nama saya faldo";
// const newString = myText.replace("faldo", "yanjul");

// console.log(myText);
// console.log(newString);

// // Default values

// function hello(name = "faldo") {
//   console.log(`hello ${name}`);
// }

// hello("dopal");
// hello();

// Paremeter example
// function displayMyScore(name, score = 0) {
//   if (score > 80 && score < 100) {
//     console.log(`${name} score is ${score} and i PASS the test`);
//   } else if (score > 50 && score < 80) {
//     console.log(`${name} score is ${score} and i almost Failed the test`);
//   } else console.log(`${name} score is ${score} and i FAILED the test`);
// }
// displayMyScore("yanjul", 99);

// return function
function math(x, y) {
  return (x + y) * x;
}
const hasil = math(3, 2);
console.log(hasil);
