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
exports.EpisodioController = void 0;
const common_1 = require("@nestjs/common");
const episodio_service_1 = require("./episodio.service");
const create_episodio_dto_1 = require("./dto/create-episodio.dto");
const update_episodio_dto_1 = require("./dto/update-episodio.dto");
let EpisodioController = class EpisodioController {
    constructor(episodioService) {
        this.episodioService = episodioService;
    }
    create(createEpisodioDto) {
        return this.episodioService.create(createEpisodioDto);
    }
    findAll() {
        return this.episodioService.findAll();
    }
    findOne(id) {
        return this.episodioService.findOne(+id);
    }
    update(id, updateEpisodioDto) {
        return this.episodioService.update(+id, updateEpisodioDto);
    }
    remove(id) {
        return this.episodioService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_episodio_dto_1.CreateEpisodioDto]),
    __metadata("design:returntype", void 0)
], EpisodioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpisodioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_episodio_dto_1.UpdateEpisodioDto]),
    __metadata("design:returntype", void 0)
], EpisodioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpisodioController.prototype, "remove", null);
EpisodioController = __decorate([
    (0, common_1.Controller)('episodio'),
    __metadata("design:paramtypes", [episodio_service_1.EpisodioService])
], EpisodioController);
exports.EpisodioController = EpisodioController;
//# sourceMappingURL=episodio.controller.js.map