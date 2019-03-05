// Recordar que las propiedades se puden llamar con un .property o con un ['property']

function hasProperty(object, property) {


    if (object[property]) {
        return true
    } else {
        return false
    }



  }
  
  var user = {
    username: 'ada_lovelace',
    password: '1234567890!'
  };
  
  var user2 = {
    username: 'grace_hopper',
    password: '1234567890!',
    email: 'grace@hopper.com'
  };
  
  console.log( hasProperty(user, 'email') ); // false
  console.log( hasProperty(user, 'password') ); // true
  console.log( hasProperty(user, 'id') ); // false
  
  console.log( hasProperty(user2, 'email') ); // true
  console.log( hasProperty(user2, 'password') ); // true
  console.log( hasProperty(user2, 'id') ); // false

