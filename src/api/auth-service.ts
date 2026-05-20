import { axiosInstance } from '@/api/axios-instance';

export async function register(username: string, password: string) {
    try {
        await axiosInstance.post('/auth/register', {
            'username': username,
            'password': password,
        });

    } catch (error: any) {
        if (error.response.status === 400) {
            alert('Użytkownik o podanej nazwie już istnieje');
        }
        console.error(error);
        throw error;
    }
}

export async function login(username: string, password: string) {
    try {
        const response = await axiosInstance.post('/auth/login', {
            'username': username,
            'password': password,
        });

        return response.data.token;
    } catch (error: any) {
        if (error.response.status == 401) {
            alert('Nieprawidłowa nazwa użytkownika lub hasło');
        }
        console.error(error);
        throw error;
    }
}