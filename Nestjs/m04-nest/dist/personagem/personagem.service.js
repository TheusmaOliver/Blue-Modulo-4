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
    }
    create(createPersonagemDto) {
        return this.prisma.personagem.create({
            data: createPersonagemDto,
        });
    }
    findAll() {
        return this.prisma.personagem.findMany();
    }
    findOne(id) {
        return this.prisma.personagem.findUnique({
            where: { id },
        });
    }
    update(id, updatePersonagemDto) {
        return this.prisma.personagem.update({
            where: { id },
            data: updatePersonagemDto,
        });
    }
    remove(id) {
        return this.prisma.personagem.delete({
            where: { id },
        });
    }
};
PersonagemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PersonagemService);
exports.PersonagemService = PersonagemService;
//# sourceMappingURL=personagem.service.js.map