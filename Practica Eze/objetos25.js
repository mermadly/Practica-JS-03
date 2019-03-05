var pelicula = {
    titulo: 'The Dark Knight',
    anio: 2008,
    director: 'Christopher Nolan'
  }

pelicula.mostrarInfo = function () {
    console.log ('Película:', this.titulo, '- Año:', this.anio)
}

  pelicula.mostrarInfo();

  console.log (pelicula)


  // Tratar de hacerlo más general