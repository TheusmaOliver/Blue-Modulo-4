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
exports.PersonagemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PersonagemService = class PersonagemService {
    constructor(prisma) {
        this.prisma = prisma;
        this.personagens = [
            {
                id: 1,
                nome: 'Rick',
                imagemUrl: 'http://imagem.com',
            },
        ];
    }
    create(createPersonagemDto) {
        const personagem = Object.assign({ id: this.personagens.length + 1 }, createPersonagemDto);
        this.personagens.push(personagem);
        return personagem;
    }
    findAll() {
        const personagens = this.personagens;
        return personagens;
    }
    findOne(id) {
        const personagem = this.personagens.find((p) => p.id === id);
        return personagem;
    }
    update(id, updatePersonagemDto) {
        const index = this.personagens.findIndex((personagem) => personagem.id === id);
        const personagemAtual = this.personagens[index];
        const novoPersonagem = Object.assign(Object.assign({}, personagemAtual), updatePersonagemDto);
        this.personagens[index] = novoPersonagem;
        return novoPersonagem;
    }
    remove(id) {
        const index = this.personagens.findIndex((personagem) => personagem.id === id);
        delete this.personagens[index];
    }
};
PersonagemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PersonagemService);
exports.PersonagemService = PersonagemService;
//# sourceMappingURL=personagem.service.js.map