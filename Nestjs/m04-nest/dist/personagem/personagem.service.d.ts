import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';
export declare class PersonagemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private personagens;
    create(createPersonagemDto: CreatePersonagemDto): Personagem;
    findAll(): Personagem[];
    findOne(id: number): Personagem;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): {
        nome: string;
        imagemUrl: string;
        id?: number;
    };
    remove(id: number): void;
}