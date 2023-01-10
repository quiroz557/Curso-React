// import { heroes, owners } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.table( heroes );
// console.table( owners );

export const getHeroeById = (id) => heroes.find((item) => item.id === id)

// console.log( getHeroeById(4) );

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log( getHeroesByOwner('Marvel') );