import { useState } from "react";
import { useForm } from '../hooks/useForm'

export const AddTodo = ({ onNewTodo }) => {

    const { onInputChange, onResetForm, formState } = useForm({ description: '' })

    const { description } = formState;

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( description.length <= 1 ) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo( newTodo );
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={ onInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
