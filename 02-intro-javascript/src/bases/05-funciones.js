// Funciones en JS

function saludar( nombre ) {
    return `Hola, ${nombre}`;
}

saludar = 30;

// console.log(saludar('Goku'));
console.log(saludar);

// No se recomienda las funciones de la anterior manera porque es fácil modificar la referencia a la función, la manera correcta es:

const saludar2 = function ( nombre ) {   
    return `Hola, ${nombre}`;
} 

// saludar2 = 30; //En este punto aparecería un error porque la función ya es una constante entonces no es posible modificarla.


console.log(saludar2('epa'));

//Funciones flecha

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Holaaa!`;

console.log( saludar3('Vegeta') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

//Si queremos simplificar lo anterior lo hacemos de la siguente manera

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

console.log( getUser() );
console.log( getUser2() );


function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando')
console.log( usuarioActivo );


//Tarea

//1. Transformar a una función flecha.
//2. Retornar un objeto implícito.
//3. Probar.

const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo2 = getUsuarioActivo2('Krilin')
console.log( usuarioActivo2 );