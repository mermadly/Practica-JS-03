var holaMundo = {
    mostrarMensaje: function () {
        console.log ('¡Hola Mundo!')
    },
    obtenerMensaje: function () {
        return '¡Alo Mundo!'
    }
}

holaMundo.mostrarMensaje(); // ¡Hola mundo!
console.log( holaMundo.obtenerMensaje() ); // ¡Alo mundo!