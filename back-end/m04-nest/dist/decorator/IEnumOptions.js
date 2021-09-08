"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalDecimal = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
function OptionalDecimal() {
    const typeDecorator = (0, class_validator_1.IsNumber)();
    const fieldDecorator = (0, type_graphql_1.Field)((type) => type_graphql_1.Float, { nullable: true });
    const columnDecorator = (0, typeorm_1.Column)('decimal', { nullable: true });
    return (target, key) => {
        typeDecorator(target, key);
        fieldDecorator(target, key);
        columnDecorator(target, key);
    };
}
exports.OptionalDecimal = OptionalDecimal;
//# sourceMappingURL=IEnumOptions.js.map