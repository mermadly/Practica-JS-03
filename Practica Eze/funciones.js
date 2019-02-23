
function saludar() {
    console.log ('hola');
}

saludar();

// la puedo llamar cuantas veces quiera y la puedo asignar a una variable

var hola = function () {
    console.log ('hola');
}

// se llama igual aunque sea variable. 
//Funcion anonima

hola();

// no olvidar paréntesis

// Una función puede retornar un valor, si la llamo veré ese valor por ej en la consola

var a = 1
function sumar () {
    a = a + 2;
}

sumar();

console.log (sumar());

// cada vez que llamo la función se ejecuta

var a = 1
function sumaConReturn () {
  return  a = a + 2;
}

console.log (sumaConReturn());

// Con return sí retorna el dato
// Puedo guardar ese valor en una variable

var resultado = sumaConReturn ();
console.log (resultado);

// Si pongo un console.log adentro de la función, la función IGUAL no retorna nada
// return se usa antes de lo que quiero mostrar, yo ELIJO qué retorna la función

function usuarioLoggeado () {
    return true;
}

if (usuarioLoggeado()) {
    console.log ('Bienvenido a nuestro sitio')
}


// Yo elijo los nombres de los parámetros

function mostrarEnConsola (parametro1, parametro2, parametro3) {
    console.log (parametro1, parametro2, parametro3);
}

mostrarEnConsola ('hola', 1, true)
mostrarEnConsola ('hola', 'chicas', 'ada')
mostrarEnConsola (['hola', 'chicas', 'ada'], [1, 2, 3], ['strings'])
mostrarEnConsola ('hola', 2)

// Es muy importante el orden de los parámetros

function saludar2(nombreDelUsuario) {
    console.log ('Hola', nombreDelUsuario);
}

saludar2 ('Aldi');
saludar2 ('Cata');
saludar2 ('Mar');
saludar2 ('Grace');
saludar2 ('Vicki');

// NO PUEDO tener dos return
// NO PUEDO poner nada después del return
// return equivale al break, pero hace que la función devuelva algo