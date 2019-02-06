var asterisco = "***************"

while (asterisco != "") {
    console.log (asterisco);
    asterisco = asterisco.slice(0, asterisco.length-1);
}

//

var contador = 15;
var acumulado = "";
var estrellita = "***************";

while (contador > 0) {
    acumulado = estrellita.slice(0, contador);
    console.log (acumulado);
    contador--;
}

// Métodos no de JS

var numero = 14;
var numerodos = 14;
var string = "";

while (numerodos >= 0) {

    while (numero >= 0) {
        string = string + "*";
        numero--;
    }
console.log (string);
numero = numerodos - 1;
string = "";
numerodos--;
}