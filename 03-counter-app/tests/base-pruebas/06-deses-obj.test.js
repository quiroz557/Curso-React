import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 07-deses-arr', () => { 
    test('getUser debe de retornar un objeto', () => { 
        
        const persona = {
            clave: 'j1a9n8u0s',
            edad: 25
        }
        
        const testPersona = {
            nombreClave: 'j1a9n8u0s',
            anios: 25,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        
        expect(testPersona).toEqual(usContext( persona ))    
    })
})