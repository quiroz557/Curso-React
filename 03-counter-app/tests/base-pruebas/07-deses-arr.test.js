import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
    test('debe retornar un arreglo', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters).toBe('string');
        expect( typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String) ) 
        expect( numbers ).toEqual( expect.any(Number) ) 
    })
})