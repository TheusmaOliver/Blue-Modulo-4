import { Module } from '@nestjs/common';
import { LocalizacaoService } from './localizacao.service';
import { LocalizacaoController } from './localizacao.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LocalizacaoController],
  providers: [LocalizacaoService],
})
export class LocalizacaoModule {}
