import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';

@Injectable()
export class PersonagemService {
  constructor(private readonly prisma: PrismaService) {}

  private personagens: Personagem[] = [
    {
      id: 1,
      nome: 'Rick',
      imagemUrl: 'http://imagem.com',
    },
  ];
  create(createPersonagemDto: CreatePersonagemDto) {
    const personagem: Personagem = {
      id: this.personagens.length + 1,
      ...createPersonagemDto,
    };

    this.personagens.push(personagem);
    return personagem;
  }

  findAll() {
    const personagens = this.personagens;

    return personagens;
  }

  findOne(id: number) {
    const personagem = this.personagens.find((p) => p.id === id);
    return personagem;
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    const index = this.personagens.findIndex(
      (personagem) => personagem.id === id,
    );
    const personagemAtual = this.personagens[index];

    const novoPersonagem = {
      ...personagemAtual,
      ...updatePersonagemDto,
    };

    this.personagens[index] = novoPersonagem;

    return novoPersonagem;
  }

  remove(id: number) {
    const index = this.personagens.findIndex(
      (personagem) => personagem.id === id,
    );
    delete this.personagens[index];
  }
}
