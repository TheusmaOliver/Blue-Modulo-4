import { Prisma } from '.prisma/client';
export declare class Usuario implements Prisma.UsuarioUncheckedCreateInput {
    id?: number;
    email: string;
    senha: string;
    nome: string;
}
