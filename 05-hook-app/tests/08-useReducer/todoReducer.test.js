import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {  

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('Debe de regresar el estado inicial', () => { 
        const newState = todoReducer( initialState, {})
        expect( newState ).toBe( initialState );
    })

    test('Debe de agregar un todo', () => { 

        const action = {
            type: 'addTodo',
            payload: {
                id: 2,
                description: 'Demo New Todo',
                done: false
            }
        }

        const newState = todoReducer( initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('Debe de eleminar un todo', () => { 

        const newTodo = [...initialState, {
            id: 2,
            description: 'Demo New Todo',
            done: false
        }]

        const action = {
            type: 'removeTodo',
            payload: 2
        }

        const newState = todoReducer( newTodo, action);

        expect(newState.length).toBe(1);
    })

    test('Debe de hacer el toggle del todo', () => { 
        
        const action = {
            type: 'toggleTodo',
            payload: 1
        }

        const newState = todoReducer( initialState, action);
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer( newState, action);
        expect(newState2[0].done).toBeFalsy();
    })
})