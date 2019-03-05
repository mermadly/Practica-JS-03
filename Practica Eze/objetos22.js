var user = {
    username: 'ada_lovelace',
    password: '1234567890!',
    // email: 'hidaislkd.'
  };


var propiedades = Object.keys(user)
var mensaje = 'El usuario no tiene la propiedad email'
  
  for (i = 0; i < propiedades.length; i++) {
   if (propiedades[i] === 'email') {
     mensaje = 'El usuario tiene la propiedad mail'
   }
  }

  console.log (mensaje)