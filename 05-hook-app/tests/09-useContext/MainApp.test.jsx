import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en <MainApp />', () => { 
    test('Debe de mostrar el Home', () => {  
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage'));
    })

    test('Debe de mostrar el LoginPage', () => {  
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage'));
    })
})