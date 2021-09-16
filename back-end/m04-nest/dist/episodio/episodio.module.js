"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodioModule = void 0;
const common_1 = require("@nestjs/common");
const episodio_service_1 = require("./episodio.service");
const episodio_controller_1 = require("./episodio.controller");
let EpisodioModule = class EpisodioModule {
};
EpisodioModule = __decorate([
    (0, common_1.Module)({
        controllers: [episodio_controller_1.EpisodioController],
        providers: [episodio_service_1.EpisodioService],
    })
], EpisodioModule);
exports.EpisodioModule = EpisodioModule;
//# sourceMappingURL=episodio.module.js.map