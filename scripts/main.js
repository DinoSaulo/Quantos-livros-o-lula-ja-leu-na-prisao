var contadorDeDias = require('./contadorDeDias.js');
let dias = contadorDeDias.getDataDis();

// Lula leu 21 livros em 57 dias

let mediaDeLeituraDoLula = 21 / 57;

let text = "Lula já leu "+ Math.floor(mediaDeLeituraDoLula * dias) + " livros";

console.log(text);

//document.getElementById("content").innerHTML = text;