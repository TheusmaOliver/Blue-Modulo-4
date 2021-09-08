import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocalizacaoDto } from './dto/create-localizacao.dto';
import { UpdateLocalizacaoDto } from './dto/update-localizacao.dto';
export declare class LocalizacaoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createLocalizacaoDto: CreateLocalizacaoDto): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Localizacao[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
    update(id: number, updateLocalizacaoDto: UpdateLocalizacaoDto): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
}
