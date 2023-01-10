import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Pruebas en hook useFetchGifs', () => { 
    test('Debe de mostrar el estado inicial', () => { 
        const { result } = renderHook(() => useFetchGifs());
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
     })

     test('Debe de retornar un arreglo de imágenes y isLoading en false', async () => { 
        const { result } = renderHook(() => useFetchGifs());

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
     })
})