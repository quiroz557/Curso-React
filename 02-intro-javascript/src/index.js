const personajes = ['Goku','Vegeta','Trunks']

// const [ p1, p2, p3] = personajes

// console.log( p1 );
// console.log( p2 );

// si quiere solo el segundo elemento 

const [ , p2 ] = personajes
const [ , , p3] = personajes

console.log(p2, p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}


const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

const funState = ( valor ) => {
    return [valor, () => console.log('Hola Mundo')];
}

// const state = funState( 'goku' );
// console.log( state );

// state[1]()

// TAREA
// Desestructurar el funState
// 1. El primer valor del state se llamará nombre
// 2. se llamara setNombre

const [ state, setState ] = funState('Goku')

console.log(state);
setState();


