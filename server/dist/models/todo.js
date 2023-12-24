"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize"));
class Todo extends sequelize_1.Model {
}
Todo.init({
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(50)
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            min: 10
        }
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['completed', 'pending', 'in proccess']
    }
}, {
    sequelize: sequelize_2.default,
    timestamps: true,
    indexes: [{ unique: true, fields: ['title'] }],
});
exports.default = Todo;
//# sourceMappingURL=todo.js.map