import axios from 'axios'
import { getEnvironments } from '../helpers/getEnvironments'

const { VITE_API_URL } = getEnvironments();

const calendarApi = axios.create({
    baseURL: VITE_API_URL,
})

//TODO: configurar interceptores para agregar token de autenticación

calendarApi.interceptors.request.use((config) => {

    config.headers = {
        'x-token': localStorage.getItem('token') || '',
    }

    return config;
});

export default calendarApi;