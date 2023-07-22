import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { onLogoutCalendar } from "../store/calendar/calendarSlice";


export const useAuthStore = () => {

    const { 
        status, 
        user, 
        errorMessage
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const startLogin = async ({email, password}) => {

        dispatch(onChecking());

        try {

            const { data }= await calendarApi.post('/auth', {
                email,
                password
            });
 
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({
                uid: data.uid,
                name: data.name,
            }));
        } catch (error) {
           dispatch(onLogout('Credenciales Incorrectass'))
           setTimeout(() => { 
                dispatch(clearErrorMessage());
           }, 10)
        }

    }


    const startRegister = async ({name, email, password}) => {

        dispatch(onChecking());

        try {

            const { data }= await calendarApi.post('/auth/register', {
                name,
                email,
                password,
            });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                uid: data.uid,
                name: data.name,
            }));

        } catch (error) {
           dispatch(onLogout(error.response.data?.msg || 'El usuario ya existe'))
           setTimeout(() => { 
                dispatch(clearErrorMessage());
           }, 10);s
        }

    }

    const checkAuthToken = async () => { 
        const token = localStorage.getItem('token');

        if (!token) { 
            return dispatch(onLogout());
        }

        try {
            const { data } = await calendarApi.get('/auth/renewToken');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                uid: data.uid,
                name: data.name,
            }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }

    }

    const startLogout = () => { 
        localStorage.clear();
        dispatch(onLogout());
        dispatch(onLogoutCalendar())
    }


    return {
        // Propiedades
        status,
        user,
        errorMessage,

        // Metodos
        checkAuthToken,
        startLogin,
        startRegister,
        startLogout
    }
}