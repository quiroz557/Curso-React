// Arreglos en javascript

// const arreglo = new Array(100);

// console.log( arreglo );

const arreglo = [1,2,3,4];
// CUANDO SE VAYAN A AGREGAR NUEVOS ELEMENTOS AL ARREGLO NO LO HAREMOS CON PUSH
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map((numero) => {
    return numero * 2
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);