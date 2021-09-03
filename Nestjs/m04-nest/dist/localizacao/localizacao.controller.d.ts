import { LocalizacaoService } from './localizacao.service';
import { CreateLocalizacaoDto } from './dto/create-localizacao.dto';
import { UpdateLocalizacaoDto } from './dto/update-localizacao.dto';
export declare class LocalizacaoController {
    private readonly localizacaoService;
    constructor(localizacaoService: LocalizacaoService);
    create(createLocalizacaoDto: CreateLocalizacaoDto): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Localizacao[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
    update(id: string, updateLocalizacaoDto: UpdateLocalizacaoDto): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__LocalizacaoClient<import(".prisma/client").Localizacao>;
}
