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
    return this.prisma.personagem.create({
      data: createPersonagemDto,
    });
  }

  findAll() {
    return this.prisma.personagem.findMany();
  }

  findOne(id: number) {
    return this.prisma.personagem.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    return this.prisma.personagem.update({
      where: { id },
      data: updatePersonagemDto,
    });
  }

  remove(id: number) {
    return this.prisma.personagem.delete({
      where: { id },
    });
  }
}
