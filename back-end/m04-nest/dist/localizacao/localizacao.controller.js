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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizacaoController = void 0;
const common_1 = require("@nestjs/common");
const localizacao_service_1 = require("./localizacao.service");
const create_localizacao_dto_1 = require("./dto/create-localizacao.dto");
const update_localizacao_dto_1 = require("./dto/update-localizacao.dto");
let LocalizacaoController = class LocalizacaoController {
    constructor(localizacaoService) {
        this.localizacaoService = localizacaoService;
    }
    create(createLocalizacaoDto) {
        return this.localizacaoService.create(createLocalizacaoDto);
    }
    findAll() {
        return this.localizacaoService.findAll();
    }
    findOne(id) {
        return this.localizacaoService.findOne(+id);
    }
    update(id, updateLocalizacaoDto) {
        return this.localizacaoService.update(+id, updateLocalizacaoDto);
    }
    remove(id) {
        return this.localizacaoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_localizacao_dto_1.CreateLocalizacaoDto]),
    __metadata("design:returntype", void 0)
], LocalizacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalizacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalizacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_localizacao_dto_1.UpdateLocalizacaoDto]),
    __metadata("design:returntype", void 0)
], LocalizacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocalizacaoController.prototype, "remove", null);
LocalizacaoController = __decorate([
    (0, common_1.Controller)('localizacao'),
    __metadata("design:paramtypes", [localizacao_service_1.LocalizacaoService])
], LocalizacaoController);
exports.LocalizacaoController = LocalizacaoController;
//# sourceMappingURL=localizacao.controller.js.map