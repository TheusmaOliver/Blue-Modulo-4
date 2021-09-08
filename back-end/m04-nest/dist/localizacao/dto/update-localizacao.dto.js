"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLocalizacaoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_localizacao_dto_1 = require("./create-localizacao.dto");
class UpdateLocalizacaoDto extends (0, mapped_types_1.PartialType)(create_localizacao_dto_1.CreateLocalizacaoDto) {
}
exports.UpdateLocalizacaoDto = UpdateLocalizacaoDto;
//# sourceMappingURL=update-localizacao.dto.js.map