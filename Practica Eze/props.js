// Mostrar en consola "mi nombre es *nombre* y tiene x cantidad de letras"

var miNombreEs = "Victoria";

console.log ('Mi nombre es', miNombreEs, 'y tiene', miNombreEs.length, 'letras.');


// Método sintaxis:
// nombreDeLaVariable.metodo(parametros)
// A veces no se necesitan los "parametros" o el nombre de la variable.
// sintaxis nombreDeLaVariable.metodo()

// Concat

var saludo = "Hola ";
var nombre = "Ada";

var mensaje = saludo.concat(nombre);
console.log(mensaje);

// No necesito declarar una nueva variable

console.log (saludo.concat(nombre));

var nombre1 = 'Mar';
var nombre2 = 'Aldi';
var nombre3 = 'Vicki';
var espacio = ' ';
var y = 'y'
var coma = ','
var punto = '.'

console.log (saludo.concat(nombre1, coma, espacio, nombre2, espacio, y, espacio, nombre3, punto));

var saludoMay = 'HOLA';
var aditasMin = 'aditas';
var messenger = 'hOlA aDiTaS'

console.log (saludoMay.toLowerCase());
console.log (aditasMin.toUpperCase());
console.log (messenger.toLowerCase());

// Se puede hacer sin declarar la variable

console.log ('hola vicki'.toUpperCase());

// Números

//ParseInt convierte un string en número entero "integer"

var numeroStr = "3";
console.log (parseInt(numeroStr));

var numeroPi = '3.14'
console.log (parseInt(numeroPi));

// parseFLoat toma un string y devuelve un número decimal

console.log (parseFloat(numeroPi));

// Si el string no es convertible a número devuelve NaN

var notANumber = 'Hola'

console.log (parseFloat(notANumber))

// Se puede no declarar variable y poner un string directamente 
console.log (parseFloat('12'));

// toString 
// Recibe un número y retorna un string

var numero = 4;
var numeroEnStr = numero.toString();
console.log (numeroEnStr);

// Ejercicio concat y suma

var nueve = 9;
var nueveStr = '9';
var dos = 2;
var dosStr= '2';

//Imprimir en consola:
// 11
// 92
//911

console.log (nueve + dos);
console.log (nueveStr + dosStr);
console.log (nueveStr + (nueve + dos));