import {defineStore} from "pinia";

export const useTokenStore = defineStore('token', {
    state: () => {
        return { token: localStorage.getItem('token') || undefined };
    },

    actions: {
        setToken(token: string) {
            this.token = token;
            localStorage.setItem('token', token);
        },
        getToken() {
            return this.token;
        },
        clearToken() {
            this.token = undefined;
            localStorage.removeItem('token');
        }
    }
})