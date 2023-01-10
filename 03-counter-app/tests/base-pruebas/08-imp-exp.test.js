import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un héroe por ID', () => { 
        const id = 1;

        const hero = getHeroeById( id );

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById debe de retornar undefined si no existe el ID', () => { 
        const id = 6;

        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    })


    /*
        TAREA

        1. Debe de retornar un arreglo con los héroes de DC. 
        2. Length === 3
        3. toEqual al arreglo filtrado.

        4. Debe de retornar un arreglo con los héroes de Marvel.
        5. Length === 2
    */
    
    test('getHeroeByOwner debe de retornar un 3 héroes de DC', () => { 
        const owner = 'DC';

        const heroesByOwner = getHeroesByOwner( owner );

        expect( heroesByOwner.length ).toBe(3);
        expect( heroesByOwner ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    })

    test('getHeroeByOwner debe de retornar un 2 héroes de Marvel', () => { 
        const owner = 'Marvel';

        const heroesByOwner = getHeroesByOwner( owner );

        expect( heroesByOwner.length ).toBe(2);
        expect( heroesByOwner ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    })
})
