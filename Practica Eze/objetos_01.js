var biblioteca = [
    {
        titulo: 'Cumbres Borrascosas',
        autor: 'Emily Brontë',
        leido: true
    },
    {
        titulo: 'Orlando',
        autor: 'Virginia Woolf',
        leido: false
    },
 
    {
        titulo: 'Arbol de Diana',
        autor: 'Alejandra Pizarnik',
        leido: false
    }
  ];


var lectura

for (var i = 0; i < biblioteca.length; i++ ) {
     if (biblioteca[i].leido === true) {
         lectura = 'ya fue leído'
     } else if (biblioteca[i].leido === false) {
         lectura = 'aún no fue leído'
     }

     console.log ('El libro', biblioteca[i].titulo, 'de', biblioteca[i].autor, lectura);
}