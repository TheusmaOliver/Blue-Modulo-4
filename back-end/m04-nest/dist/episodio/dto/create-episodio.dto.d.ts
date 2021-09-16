import { CreatePersonagemDto } from 'src/personagem/dto/create-personagem.dto';
import { Episodio } from '../entities/episodio.entity';
export declare class CreateEpisodioDto extends Episodio {
    nome: string;
    dataEstreia: string | Date;
    episodio: string;
    personagens?: CreatePersonagemDto[];
}
