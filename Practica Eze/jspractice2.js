// var numero = 10;
// var numero2 = numero + 1;

// console.log (numero);
// console.log (numero2);

// += x le suma x al número

// numero ++ 
// console.log (numero);

// numero += 10;

// console.log (numero);

var comparacion = 1;
var otraComparacion = "1";
var terceraComparacion = 1;

// un solo "=" asigna valor, dos o tres ("==", "===") hacen una pregunta, comparan

// == chequea valor
console.log ('Las variables son iguales?' , comparacion == otraComparacion);
// === chequea valor y tipo de dato
console.log ('Las variables son iguales en tipo y valor?', comparacion === otraComparacion);

var boole = true;
var string = "true";

// == solo chequea valor si son numeros contra string, string con booleanos NO
console.log (boole == string);

var stringu = "undefined";
var undefineds = undefined;

console.log (stringu == undefineds);
console.log (stringu === undefineds);

console.log ('Las variables son diferentes en valor?', comparacion != otraComparacion);
console.log ('Las variables son diferentes en valor y tipo?', comparacion !== otraComparacion);


var comparNumer = 10
var comparNumer2 = 20

console.log ('Es menor que', comparNumer < comparNumer2 );
console.log ('Es mayor que', comparNumer > comparNumer2 )

var comparNumeros = 10;
var comparNumeros2 = 10;


console.log ('10 es menor que 10?', comparNumeros < comparNumeros2 );
console.log ('10 es mayor que 10?', comparNumeros > comparNumeros2 );


console.log ('10 es menor o igual que 10?', comparNumeros <= comparNumeros2 );
console.log ('10 es mayor o igual que 10?', comparNumeros >= comparNumeros2 );