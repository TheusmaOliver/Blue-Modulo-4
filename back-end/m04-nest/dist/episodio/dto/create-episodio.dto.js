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
exports.CreateEpisodioDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_personagem_dto_1 = require("../../personagem/dto/create-personagem.dto");
const episodio_entity_1 = require("../entities/episodio.entity");
class CreateEpisodioDto extends episodio_entity_1.Episodio {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEpisodioDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Object)
], CreateEpisodioDto.prototype, "dataEstreia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEpisodioDto.prototype, "episodio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_personagem_dto_1.CreatePersonagemDto),
    __metadata("design:type", Array)
], CreateEpisodioDto.prototype, "personagens", void 0);
exports.CreateEpisodioDto = CreateEpisodioDto;
//# sourceMappingURL=create-episodio.dto.js.map