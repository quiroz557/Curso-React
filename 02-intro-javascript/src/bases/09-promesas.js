/*
    PROMESAS

    La promesa tiene varias consignas:

    then = significa que la promesa se ejecuto correctamente
    catch = la promesa saco errores
    finally = se va ejecutar después del then y el catch, es lo último que se ejecuta

    resolve = Es un callback que se va ejecutar si la promesa es exitosa. o dicho de otra manera, ejecuta el then
    reject = Se va ejecutar si la promesa tiene errores, ejecuta el catch.
*/

import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);  
//         resolve( heroe );
//         // reject('No se pudo encontrar el héroe')
//     }, 2000);
// });


// promesa.then( ( heroe ) => {
//     console.log('Heroe', heroe);
// }).catch( (error) => {
//     console.warn(error);
// })

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);  

            heroe === undefined 
                ? reject('No se pudo encontrar el héroe')
                : resolve( heroe );

        }, 2000);
    });
}

getHeroeByIdAsync(5)
    .then( console.log )
    .catch( console.warn ); /// Si tenemos un callback donde estamos referenciando al mismo argumento lo podemos simplicar
