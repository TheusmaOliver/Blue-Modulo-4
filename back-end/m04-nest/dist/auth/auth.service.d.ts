import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './UsuarioToken';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(email: string, senha: string): Promise<UsuarioToken>;
    private validateUser;
}
