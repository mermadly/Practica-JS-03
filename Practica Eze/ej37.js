var promedioAprobar;
var promedioAlumno;

promedioAprobar = 6;
promedioAlumno = 4;

console.log ('El promedio del alumno es mayor o igual al requerido', 
promedioAlumno >= promedioAprobar);

console.log ('Al alumno le faltaron' , promedioAprobar - promedioAlumno, 'puntos para aprobar.');

if (promedioAlumno >= promedioAprobar) {
    console.log ('El promedio del alumno es mayor')
} else {
    console.log ('El promedio del alumo es menor al promedio para aprobar. Al alumno le faltaron' , promedioAprobar - promedioAlumno, 'puntos para aprobar.')
};