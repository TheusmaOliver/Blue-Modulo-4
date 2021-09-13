import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}
  async login(email: string, senha: string) {
    const usuario: Usuario = await this.validateUser(email, senha);
  }

  private async validateUser(email: string, senha: string) {
    const usuario = await this.usuarioService.findByEmail(email);
    return usuario;
  }
}
