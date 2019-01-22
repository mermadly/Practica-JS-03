// var listaChicas = ['Miche', 'Male', 'Bel', 'Flor', 'Marcos'];

// var i;
// var largo = listaChicas.length;

// for ( i = 0; i<= largo; i++) {

// console.log (listaChicas[i]);

// }

// listaChicas.pop ();

// console.log (listaChicas);



var listaNotas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var listaNotasAprobadas = [ ];

var listaNotasDesaprobadas = [ ];

var largo = listaNotas.length;

for (var z = 0; z < largo; z++) {
    if (listaNotas [z] >= 1 && listaNotas [z]  <= 3) {
        listaNotasDesaprobadas.push(listaNotas [z]) ;
        console.log (listaNotas [z], 'es una muy mala nota. Recursa.') ;
    } else if (listaNotas [z] >= 4 && listaNotas [z] <= 5){ 
        listaNotasDesaprobadas.push(listaNotas [z]);
        console.log (listaNotas [z],'es una mala nota, necesita repasar.')
    } else if  (listaNotas [z] >= 6 && listaNotas [z] <=8) {
        listaNotasAprobadas.push(listaNotas [z]);
        console.log (listaNotas [z], 'es una buena nota.')
    } else {
        listaNotasAprobadas.push(listaNotas [z]);
        console.log (listaNotas[z], 'es una excelente nota')
    };
}

console.log (listaNotasAprobadas);
console.log (listaNotasDesaprobadas);

// var largoAp = listaNotasAprobadas.length;

// for (var z = 0; z < largoAp; z++) {
//     if (listaNotasAprobadas [z] >= 8) { console.log (listaNotasAprobadas [z], 'es una excelente nota')} else {console.log ( listaNotasAprobadas [z], 'es una buena nota.')};
// }

// var largoDes = listaNotasDesaprobadas.length;

// for (var z = 0; z < largoAp; z++) {
//     if (listaNotasDesaprobadas [z] >= 4) { console.log (listaNotasDesaprobadas [z], 'es una mala nota, necesita repasar.')
// } else {console.log ( listaNotasDesaprobadas [z], 'es una muy mala nota. Recursa.')};
// }