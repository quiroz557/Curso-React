import { useTodo } from "../hooks"
import { AddTodo } from "./AddTodo"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    //Crear customHook llamado useTodo
    // 1. todos, handleDeleteTodo, handleToggleTodo, handleNewTodo

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: ({ todosCount }), 
                <small> Pendientes: ({ pendingTodosCount })
                </small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo}
                    />
                </div>
           
                <div className="col-5">
                    <AddTodo onNewTodo={ handleNewTodo } />
                </div>

            </div>
        </>
    )
}
