import { Personagem } from 'src/personagem/entities/personagem.entity';

export class Episodio {
  id?: number;
  nome: string;
  dataEstreia: string | Date;
  episodio: string;
  personagens?: Personagem[];
}
