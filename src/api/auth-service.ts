import { axiosInstance } from '@/api/axios-instance';

export async function register(username: string, password: string) {
    try {
        await axiosInstance.post('/auth/register', {
            'username': username,
            'password': password,
        });
    } catch (error) {
        console.error(error);
    }
}

export async function login(username: string, password: string) {
    const response = await axiosInstance.post('/auth/login', {
        'username': username,
        'password': password,
    });

    return response.data.token;
}