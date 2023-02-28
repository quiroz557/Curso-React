import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    const { data: todo = [], isLoading } = useGetTodoByIdQuery( todoId );
    
    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        setTodoId( todoId - 1 );
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{ JSON.stringify(todo) }</pre>

            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{ todo.completed ? 'Done' : 'Pending' } </strong>
                            { todo.title }
                        </li>
                    ))
                }
            </ul> */}

            <button onClick={ prevTodo }>
                Prev Todo
            </button>

            <button onClick={ nextTodo }>
                Next Todo
            </button>
        </>
    )
}
