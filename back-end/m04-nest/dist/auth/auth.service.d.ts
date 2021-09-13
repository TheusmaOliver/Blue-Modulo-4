import { UsuarioService } from 'src/usuario/usuario.service';
export declare class AuthService {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    login(email: string, senha: string): Promise<void>;
    private validateUser;
}
