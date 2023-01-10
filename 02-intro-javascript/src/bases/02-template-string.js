// TEMPLATE STRINGS

const nombre = 'Fernando'
const apellido = 'Herrera'

let nombreCompleto = nombre + ' ' + apellido;

console.log( nombreCompleto );

// CON TEMPLATE STRINGS

nombreCompleto = `
    ${ nombre } 
    ${ apellido }
    ${ 1 + 1 }
`

console.log( nombreCompleto );

function getSaludo( nombre ) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`);
