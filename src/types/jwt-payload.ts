import type { JwtPayload } from 'jsonwebtoken';
import { Role } from '@/types/role';

export interface CustomJwtPayload extends JwtPayload {
    role: Role;
}