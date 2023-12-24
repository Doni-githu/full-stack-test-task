"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize('postgresql://postgres:doni@localhost:5432/postgres')
const sequelize = new sequelize_1.Sequelize(process.env.POSTGRESQL_URI);
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map