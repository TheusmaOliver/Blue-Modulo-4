"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const usuario_service_1 = require("../usuario/usuario.service");
const bcrypt = require("bcrypt");
const unautorized_error_1 = require("../errors/unautorized.error");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usuarioService, jwtService) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
    }
    async login(email, senha) {
        const usuario = await this.validateUser(email, senha);
        const payload = {
            username: usuario.email,
            sub: usuario.id,
        };
        return {
            acessToken: this.jwtService.sign(payload),
        };
    }
    async validateUser(email, senha) {
        const usuario = await this.usuarioService.findByEmail(email);
        if (usuario) {
            const isPasswordValid = bcrypt.compare(senha, usuario.senha);
            if (isPasswordValid) {
                return Object.assign(Object.assign({}, usuario), { senha: undefined });
            }
        }
        throw new unautorized_error_1.UnauthorizedError('E-mail e/ou senha fornecidos são incorretos');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map