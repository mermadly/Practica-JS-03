// IF

var contrasena = "password123"
var nombreUsuario = 'lalala'

if (contrasena.length >= 10 && contrasena.length <= 25 ) {
    if (nombreUsuario.length >= 5 ) {
        console.log ('Tu nombre de usuario es correcto.')
    }
    console.log ('Tu password es correcto.')
} 
else if (contrasena.length >= 25){

    console.log('Tu password es muy larga.')

} else if (contrasena.length = 0){
    console.log ('No escribiste nada en el campo.')
} else {
    console.log ('Tu password no es válido')
};

// Operador ternario

var numero = 10;

numero == 10 ? console.log ('Es diez.') : console.log ('No es diez.');

// esto es igual a:

if (numero == 10) { 
    console.log ('Es diez.')
} else {
    console.log ('No es diez.')
}

// Switch

var nombre = 'Mar';
var mensaje = null;

switch (nombre){
    case 'Mar':
        mensaje = 'es Mar';
        break;
    case 'Aldi':
        mensaje = 'es Aldi';
        break;
    case 'Cata':
        mensaje = 'es Cata';
        break;
    case 'Mica':
        mensaje = 'Es Mica';
        break;
    default:
     mensaje = 'El nombre de la usuaria no coincide';
};

console.log ('El nombre', mensaje);

// Truthy y falsy
// false, null, undefined, 0, NaN, ' '
// Javascript los interpreta como falso.
// Cualquier otro valor lo interpreta como verdadero

var numero = 9;

if (numero = 10) {
    console.log ("Es diez.")
} else { 
    console.log ('No es diez.')
};


// Estructuras de repetición

//while

numero = 0;

while (numero <= 10) {
    console.log (numero);
    numero++;
};

// Nos interesa darle a while un valor que haga que se vuelva falso, es NECESARIO que suceda