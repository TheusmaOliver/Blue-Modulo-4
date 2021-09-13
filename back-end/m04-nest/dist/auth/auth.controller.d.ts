import { AuthService } from './auth.service';
import { LoginRequestBody } from './LoginRequestBody';
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    login({ email, senha }: LoginRequestBody): Promise<any>;
}
