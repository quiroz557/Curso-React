import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from '../../src/hooks/useCounter'

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {  

       
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {  

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hashError: null
        })

        render(<MultipleCustomHooks />);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', {name: 'Next Pokemon'});
        expect( nextButton.disabled ).toBeTruthy();
    })

    test('Debe de mostrar un Pokemon', () => {  
     
        useFetch.mockReturnValue({
            data: [{
               name: 'Ivazur',
               location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
            }],
            isLoading: false,
            hashError: null
        })

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', {name: 'Next Pokemon'});
        expect( nextButton.disabled ).toBeFalsy();
    })

    test('Debe de llamar la función de incrementar', () => {  

        useFetch.mockReturnValue({
            data: [{
               name: 'Ivazur',
               location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
            }],
            isLoading: false,
            hashError: null
        })

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', {name: 'Next Pokemon'});


        fireEvent.click(nextButton);
        expect( mockIncrement ).toHaveBeenCalled();
    })
})