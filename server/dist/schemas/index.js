"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createTodoValidation = joi_1.default.object({
    title: joi_1.default.string().max(50).required(),
    description: joi_1.default.string().max(255).required(),
    status: joi_1.default.string().valid('completed', 'pending', 'in proccess').required()
});
exports.createTodoValidation = createTodoValidation;
//# sourceMappingURL=index.js.map