// Variables y constantes

// Los let y constant son variables de scope osea que la variable que estoy

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4; //No hace falta volver a poner let


if ( true ) {
  const nombre = 'Peter'
  let valorDado = 6;
  console.log(valorDado);
  console.log(nombre);
}

console.log(nombre);
console.log(apellido);
console.log(valorDado);