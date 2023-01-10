import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/hooks/useTodo'
import { TodoApp } from '../../src/08-useReducer/TodoApp'

jest.mock('../../src/hooks/useTodo')

describe('Pruebas en <TodoApp />', () => {  


    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: false },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    test('Debe de mostar el componente correctamente', () => {  
        render(<TodoApp />);
        // screen.debug(); 

        expect( screen.getByText('Todo #1')).toBeTruthy();
        expect( screen.getByText('Todo #2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy(); 
    })
})