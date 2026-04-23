import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {jwtDecode} from "jwt-decode";

export const useTokenStore = defineStore('token-store', () => {
    const token = ref(localStorage.getItem("token") || null);

    const decodedToken = computed(() => {
        if (!token.value) {
            return null;
        }
        try {
            return jwtDecode(token.value);
        } catch (error) {
            console.error(error);
        }
    });

    const role = computed(() => decodedToken.value?.role);

    function setToken(token: string) {
        this.token = token;
        localStorage.setItem("token", token);
    }

    function clearToken() {
        this.token = null;
        this.role = null;
        localStorage.removeItem("token");
    }

    return {
        token,
        role,
        setToken,
        clearToken,
    }
});

