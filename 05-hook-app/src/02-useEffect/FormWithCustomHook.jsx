import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {  formState, username, password, email, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Formulario With Custom Hook</h1>
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
                type="email"
                className="form-control mt-2" 
                placeholder="pablitoepa123@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2" 
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
  )
}
