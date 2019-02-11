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

   var alumnasMay;
   var nombres;

   for (var i = 0; i < alumnas.length; i++) {
    alumnasMay = (alumnas[i].charAt(0)).toUpperCase();
    nombres = alumnas[i].slice(1, alumnas[i].length);
    console.log (alumnasMay+nombres);
    // alumnasMay = alumnasMay + alumnas[i];
    // console.log (alumnasMay.substring(1,2));

   }