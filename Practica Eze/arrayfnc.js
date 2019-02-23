
var arrayNumeros = [1, 2, 3, 4, 5];

// No modifica el array original, hay que asignarlo a un array nuevo

var nuevoArrayNumeros = arrayNumeros.forEach(function(param){
    //codigo de la función
    console.log (param)
});

// For each: recorre el array y utiliza la función con cada dato
// Me devuelve elementos del array

// Esa funcion no retorna nada así que la nueva variable es "undefined"

// Necesita 3 parametros pero solo uno es obligatorio
// Param 1 = Valor del elemento (obligatorio)
// Param 2 = indice (opcional)
// Param 3 = array (opcional0)

//MAP devuelve un array SIEMPRE del mismo largo que el original
// Recibe LOS MISMOS parámetros que forEach

//FILTER también devuelve un array
// Su función TIENE que devolver un verdadero o falso
// Si es verdadero, lo agrega al nuevo array
// El array NO NECESARIAMENTE es del mismo largo que el original

//Reduce devuelve UN VALOR
// Dos parámetros
// 1: acumulador, junta los valores
// 2: indice

var calorias = [800, 200, 300, 100, 500];
var sumaDeTodo = calorias.reduce (function(total, item){
    return total + item;
});

console.log (sumaDeTodo);