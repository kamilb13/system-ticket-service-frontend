import {axiosInstance} from "@/api/axios-instance";
import {useTokenStore} from "@/stores/token";

export async function register(username: string, password: string) {
    try {
        const response = await axiosInstance.post('/auth/register', {
            "username": username,
            "password": password,
        });
    } catch (error) {
        console.error(error);
    }
}

export async function login(username: string, password: string) {
    try {
        const response = await axiosInstance.post('/auth/login', {
            "username": username,
            "password": password,
        });

        const tokenStore = useTokenStore();
        tokenStore.setToken(response.data.token);
    } catch (error) {
        console.error(error);
    }
}