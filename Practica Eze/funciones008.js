
function obtenerNombre() {
    var pedirNombre = prompt ('Cuál es tu nombre?')
    return pedirNombre;
}

function obtenerSaludo () {
    var nombre = obtenerNombre() + '!';
    return '¡Hola ' + nombre
}

console.log(obtenerSaludo())