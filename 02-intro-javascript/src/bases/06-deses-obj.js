// Desestructuración
// Asign

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

const { nombre, edad, clave } = persona

console.log(nombre, edad, clave);

const funContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latIng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// const { nombreClave, anios, latIng:{lat, lng} } = funContext( persona );
const { nombreClave, anios, latIng } = funContext( persona );
const { lat, lng } = latIng

console.log( nombreClave, anios, lat, lng );


