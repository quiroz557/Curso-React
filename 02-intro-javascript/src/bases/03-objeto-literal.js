const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5555355,
        lat: 14.332,
        lng: 34.929
    }
};

console.log( persona );

const persona2 = persona; //Lo que estamos haciendo acá no es una copia sino una referencia al objeto, osea que si se cambia algún valor de persona2 cambia también en persona
persona2.nombre = 'epa'

console.log(persona2);
console.log( persona);

// Para solucionarlo utilizamos el operador spread.

const persona3 = { ...persona }

persona3.nombre = 'nose'

console.log(persona3);
console.log(persona);