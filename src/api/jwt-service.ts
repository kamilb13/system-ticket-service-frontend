import { jwtDecode } from 'jwt-decode';

export function getRoleFromToken(token: string): string {
    try {
        const decoded = jwtDecode(token);
        return decoded.role;
    } catch (error) {
        console.log(error);
    }
}