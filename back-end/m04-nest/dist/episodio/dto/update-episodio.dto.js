"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEpisodioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_episodio_dto_1 = require("./create-episodio.dto");
class UpdateEpisodioDto extends (0, mapped_types_1.PartialType)(create_episodio_dto_1.CreateEpisodioDto) {
}
exports.UpdateEpisodioDto = UpdateEpisodioDto;
//# sourceMappingURL=update-episodio.dto.js.map