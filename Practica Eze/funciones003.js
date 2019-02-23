
var mostrarNombre = function () {
    console.log('============');
    console.log('= Victoria =');
    console.log('============');
}

mostrarNombre();

var mostrarNombre2 = function () {
    var i = 0;
    
    while (i < 3) {
        i++
        if (i % 2 != 0) {
            console.log('============');
        } else {
            console.log('= Victoria =');
        }
    }
}

mostrarNombre2();