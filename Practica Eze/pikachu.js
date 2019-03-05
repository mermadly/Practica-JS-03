var pikachu = {
    nombre:'Pikachu',
    vida: 2500,
    ataque: 250,
    agilidad: 30,
    atacar: function () {
        var resultado = jigglypuff.vida - pikachu.ataque
        return resultado
    }
}

var jigglypuff = {
    nombre: 'Jigglypuff',
    vida: 3000,
    ataque: 210,
    agilidad: 15,
    atacar: function () {
      var resultado = pikachu.vida - jigglypuff.ataque
       return resultado
    }
}

// tienen que tener una función atacar
// Cuando Pikachu ataca, jigglypuff tiene que perder vida

while ((pikachu.vida > 0) && (jigglypuff.vida > 0)) {
    if (pikachu.agilidad > jigglypuff.agilidad) {
        jigglypuff.vida =  pikachu.atacar()
        console.log ("Pikachu atacó primero:")
        console.log ("La vida de Jigglypuff ahora es", jigglypuff.vida)
        if (jigglypuff.vida <= 0) {
            console.log ('Jigglypuff perdió la batalla')
        } else {
        pikachu.vida = jigglypuff.atacar()
        console.log ('Jigglypuff le devolvió el ataque:')
        console.log('La vida de Pikachu ahora es', pikachu.vida) 
        } 
    } else {
       pikachu.vida = jigglypuff.atacar()
        console.log ("Jigglypuff atacó primero:")
        console.log ("La vida de Pikachu ahora es", pikachu.vida)
          if (pikachu.vida <= 0) {
                console.log ('Pikachu perdió la batalla')
          } else {
            jigglypuff.vida = pikachu.atacar()
            console.log ('Pikachu le devolvió el ataque:')
            console.log ('La vida de Jigglypuff ahora es', jigglypuff.vida)}
        }

    jigglypuff.agilidad++
    pikachu.agilidad--
}

if (pikachu.vida > jigglypuff.vida) {
    console.log ('Pikachu ganó la batalla')
} else {
    console.log ('Jigglypuff ganó la batalla')
}