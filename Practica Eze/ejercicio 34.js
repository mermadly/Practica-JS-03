var ingresos;
var ganancias;
var impuestos;

ingresos = 1000;
impuestos = 500;
ganancias = 600;


// ingresos

if ( ingresos >= 800) {
    console.log ('Se alcanzaron los objetivos de ingreso esperados.')
} else { console.log ('No se alcanzaron los objetivos de ingreso esperados.')};


// impuestos 

if (impuestos < 400) {
    console.log ('Se gastaron menos de 400 pesos de impuestos.')
} else { console.log ('Se gastó más de lo esperado en impuestos.')};


// ganancias

if (ganancias == 600) {
    console.log ('Se paga un bono por cumplir con las ganancias esperadas.')
} else { console.log ('No se cumplieron las ganancias, no se paga el bono.')};