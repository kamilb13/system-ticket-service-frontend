import {axiosInstance} from "@/api/axios-instance";
import {useTokenStore} from "@/stores/token-store";

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
        const token = response.data.token;
        const tokenStore = useTokenStore();
        tokenStore.setToken(token);
        return token;
    } catch (error) {
        console.error(error);
    }
}