import { EpisodioService } from './episodio.service';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';
export declare class EpisodioController {
    private readonly episodioService;
    constructor(episodioService: EpisodioService);
    create(createEpisodioDto: CreateEpisodioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEpisodioDto: UpdateEpisodioDto): string;
    remove(id: string): string;
}
