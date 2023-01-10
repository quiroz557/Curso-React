import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
    })


    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    // useEffect(() => {
    //     console.log('useEffect called!');
    // }, []);

    // useEffect(() => {
    //     console.log('formState changed!');
    // }, [formState]);
    
    // useEffect(() => {
    //     console.log('email changed!');
    // }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />    

            <input 
                type="text"
                className="form-control" 
                placeholder="username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="text"
                className="form-control mt-2" 
                placeholder="pablitoepa123@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                username === 'strider2' && <Message />
            }

        </>
  )
}
