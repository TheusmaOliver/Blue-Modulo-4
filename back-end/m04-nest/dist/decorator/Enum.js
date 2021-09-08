"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
function Enum(typeFunction, options = {}) {
    const isEnumDecorator = (0, class_validator_1.IsEnum)(typeFunction());
    const fieldDecorator = (0, type_graphql_1.Field)(typeFunction);
    const columnDecorator = (0, typeorm_1.Column)({
        default: options.default,
        enum: typeFunction(),
        type: 'enum',
    });
    return (target, key) => {
        isEnumDecorator(target, key);
        fieldDecorator(target, key);
        columnDecorator(target, key);
    };
}
exports.Enum = Enum;
//# sourceMappingURL=Enum.js.map