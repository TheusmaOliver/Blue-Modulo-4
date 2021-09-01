import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagemService;
    constructor(personagemService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Personagem[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem>;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem>;
}
