"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const todo_1 = __importDefault(require("./routes/todo"));
const sequelize_1 = __importDefault(require("./sequelize"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/todo", todo_1.default);
const startApp = () => {
    sequelize_1.default.sync({ force: true })
        .then(() => {
        console.log('Connection has been established successfully.');
    })
        .catch((error) => console.log('Unable to connect to the database:', error));
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log('Server running on port 8000');
    });
};
startApp();
//# sourceMappingURL=index.js.map