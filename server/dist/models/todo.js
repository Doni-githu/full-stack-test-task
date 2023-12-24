"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../");
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
    sequelize: __1.sequelize,
    timestamps: true,
    indexes: [{ unique: true, fields: ['title'] }],
});
exports.default = Todo;
//# sourceMappingURL=todo.js.map