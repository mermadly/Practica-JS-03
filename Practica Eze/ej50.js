var numero = prompt('Ingresá un número:');

if ( numero % 2 == 0) {
    console.log('El número es par.')
} else {
 console.log ('El número es impar.')
}

if ((numero % 2 != 0) && (numero % 3 != 0) && (numero % 5 != 0) && (numero % 7 != 0)) {
    console.log('Tu número es primo')
} else {
    console.log('Tu número no es primo.')
}