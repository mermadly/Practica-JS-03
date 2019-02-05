var a = 0;
var b = 1;
var c;
var contador = 0;

while (contador <= 10) {
    console.log (a);
    c = a + b;
    a = b;
    b = c;

    contador++;
};