import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Injectable()
export class PersonagemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPersonagemDto: CreatePersonagemDto) {
    return this.prisma.personagem.create({
      data: createPersonagemDto,
      include: {
        origem: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.personagem.findMany({
      include: {
        origem: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.personagem.findUnique({
      where: { id },
      include: {
        origem: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    return this.prisma.personagem.update({
      where: { id },
      data: updatePersonagemDto,
      include: {
        origem: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.personagem.delete({
      where: { id },
      include: {
        origem: {
          select: {
            nome: true,
          },
        },
      },
    });
  }
}
