import { Usuario } from '../entities/usuario.entity';
export declare class CreateUsuarioDto extends Usuario {
    email: string;
    senha: string;
    nome: string;
}
