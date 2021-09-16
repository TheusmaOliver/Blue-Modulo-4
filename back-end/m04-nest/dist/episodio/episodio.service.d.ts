import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';
export declare class EpisodioService {
    create(createEpisodioDto: CreateEpisodioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEpisodioDto: UpdateEpisodioDto): string;
    remove(id: number): string;
}
