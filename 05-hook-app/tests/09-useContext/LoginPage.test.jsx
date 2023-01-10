import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { UserProvider } from "../../src/09-useContext/context/UserProvider"
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage />', () => {  

    const setUserMock = jest.fn();

    test('Debe de mostrar el componente sin el usuario', () => { 
        

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText('pre').innerHTML).toBe('null');
    })

    test('Debe de llamar el setUser cuando se hace clic en el botón', () => { 
        
        const user = {
            id: 123,
            name: 'Juan',
            email: 'juan@google.com'
        }

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        
        expect( setUserMock ).toHaveBeenCalledWith(user);
    })
})