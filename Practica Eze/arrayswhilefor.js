var arrayDeNombres = ['Malena', 'Vicki', 'Aldi', 'Mar'];

console.log ('Todo el array', arrayDeNombres);

console.log ('Posición uno del array', arrayDeNombres[1]);

console.log ('Longitud del array', arrayDeNombres.length);

console.log (arrayDeNombres[arrayDeNombres.length -1]); // forma correcta de pedir el último elemento de un array

// longitud: 1, 2, 3
// posición (índice): 0, 1, 2, 3

// console.log (arrayDeNombres.toString());

// arrayDeNombres = arrayDeNombres.replace(',' , ' ,');

// console.log (arrayDeNombres);

console.log ('Pop:', arrayDeNombres.pop());
console.log(arrayDeNombres);

var numero = 0;

do {
    console.log ('Número' , numero);
    numero++;
} while (numero < 5);

var numero2 = 1000;

do { 
    console.log ('Número dos', numero2)
    numero++
} while (numero2 < 10);


// for (var index = 0 !Esto es el inicio; index < array.length !Este es el final; index++ !Esto es en cuánto aumenta) {
//     const element = array[index];
    
// } Le definios un principio, un final, y en cuánto aumenta. En el console log tendríamos que poner 

var arrayABC = ['A', 'B', 'C'];

for (var index = 0; index < arrayABC.length; index++) {

    console.log(arrayABC[index]);
    
}

for (var index = 0; index < arrayABC.length; index++) {

    if ( arrayABC [index] == 'B') {
        console.log(arrayABC[index])
    }
    
}