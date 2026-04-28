import { defineStore } from 'pinia';
import { computed, ComputedRef, ref } from 'vue';
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload } from '@/types/jwt-payload';

export const useTokenStore = defineStore('token-store', () => {
    const token = ref(localStorage.getItem('token') || null);

    const decodedToken: ComputedRef<CustomJwtPayload | null> = computed(() => {
        if (!token.value) {
            return null;
        }

        try {
            return jwtDecode<CustomJwtPayload>(token.value);
        } catch (error) {
            console.error(error);
            return null;
        }
    });

    const role = computed(() => decodedToken.value?.role);

    function setToken(newToken: string) {
        token.value = newToken;
        localStorage.setItem('token', newToken);
    }

    function clearToken() {
        token.value = null;
        localStorage.removeItem('token');
    }

    return {
        token,
        role,
        setToken,
        clearToken,
    };
});

