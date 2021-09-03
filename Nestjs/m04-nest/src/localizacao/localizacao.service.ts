import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateLocalizacaoDto } from './dto/create-localizacao.dto';
import { UpdateLocalizacaoDto } from './dto/update-localizacao.dto';

@Injectable()
export class LocalizacaoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLocalizacaoDto: CreateLocalizacaoDto) {
    return this.prisma.localizacao.create({
      data: createLocalizacaoDto,
    });
  }

  findAll() {
    return this.prisma.localizacao.findMany();
  }

  findOne(id: number) {
    return this.prisma.localizacao.findUnique({
      where: { id },
    });
  }

  update(id: number, updateLocalizacaoDto: UpdateLocalizacaoDto) {
    return this.prisma.localizacao.update({
      where: { id },
      data: updateLocalizacaoDto,
    });
  }

  remove(id: number) {
    return this.prisma.localizacao.delete({
      where: { id },
    });
  }
}
