var alumnas = [
    'Maria',
    'esther',
    'consuelo',
    'Barbara',
    'Luisana',
    'pancracia',
    'luzbelita',
    'Jimena'
   ];

   var iniciales;
   var nombres;

   for (var i = 0; i < alumnas.length; i++) {
    iniciales = (alumnas[i].charAt(0)).toUpperCase();
    nombres = alumnas[i].slice(1, alumnas[i].length);
    console.log (iniciales + nombres);
    // alumnasMay = alumnasMay + alumnas[i];
    // console.log (alumnasMay.substring(1,2));

   }