import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPersonagemDto: CreatePersonagemDto): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
}
