import { Personagem } from '../entities/personagem.entity';
export declare class CreatePersonagemDto implements Personagem {
    nome: string;
    imagemUrl: string;
    origemId: number;
}
