var persona = {
    nombre: 'Ada',
    edad: 27,
};

// Acceder a las props del objeto
// nombre de la variable '.' nombre de la propiedad

console.log(persona.nombre)
console.log(persona.edad)

// Asignar un valor a una propiedad

persona.nombre = 'Vicki';
persona.edad = 26;

console.log(persona)

// Puedo asignarle un valor a una propiedad que no existía previamente en el objeto

persona.dni = 156358465;

console.log (persona);

// Métodos
//propiedad de un objeto cuyo valor es una función

var saludemos = {
    saludar: function() {
        console.log('Hola');
    }
}

console.log(saludemos.saludar); // no ejecuta la función
saludemos.saludar();

var saludemos2 = {
    saludar: function(personaASaludar) {
        console.log('Hola ' + personaASaludar + '!');
    }
}

saludemos2.saludar ('Grace');
saludemos2.saludar ('Ada');
saludemos2.saludar (20);
saludemos2.saludar (true);


// this es una palabra reservada
// this.propiedad llama a la propiedad dentro del objeto
// this es todo el objeto si no lo ponemos con una propiedad
 
var persona1 = {
    nombre: 'Vicki',
    edad: 26,
    darPlata: function() {
        persona2.billetera++
    }
}

var persona2 = {
    nombre: 'Aldi',
    billetera: 0
}

console.log(persona2.nombre,'tiene $', persona2.billetera);
persona1.darPlata();
console.log(persona2.nombre,'tiene $', persona2.billetera);

var persona3 = {
    nombre: 'Mar',
    billetera: 0
}

var persona4 = {
    nombre: 'Mica',
    edad: 24,
    darPlata: function(destinatario) {
    destinatario.billetera++}
}

persona4.darPlata(persona2);

persona4.darPlata(persona3);

console.log(persona2.billetera);
console.log(persona3.billetera);


// Propiedades dinámicas
// persona.nombre === persona['nombre']
// var propNombre = 'nombre'
// persona.nombre === persona['nombre'] === persona[propNombre]


// Métodos
// object keys me devuelve un array con las propiedades del objeto (no los valores)

var personas = {
    nombre: 'Ada',
    edad: 27
}

console.log(Object.keys(personas));

var propiedades = Object.keys(personas);

for (var i = 0; i < propiedades.length; i++) {

    if (personas[propiedades[i]] === 'Ada') {
        console.log ('Hola ' + personas[propiedades[i]])
    }

}


for (var i = 0; i < propiedades.length; i++) {
    if (propiedades[i] == 'nombre') {
        console.log ('La propiedad', propiedades[i], 'es', personas[propiedades[i]])
    }

}
