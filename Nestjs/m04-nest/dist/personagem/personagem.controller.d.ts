import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagemService;
    constructor(personagemService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): import("./entities/personagem.entity").Personagem;
    findAll(): import("./entities/personagem.entity").Personagem[];
    findOne(id: number): import("./entities/personagem.entity").Personagem;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): {
        nome: string;
        imagemUrl: string;
        id?: number;
    };
    remove(id: number): void;
}
