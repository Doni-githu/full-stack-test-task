"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const todo_1 = __importDefault(require("./routes/todo"));
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize('postgresql://postgres:doni@localhost:5432/postgres')
const sequelize = new sequelize_1.Sequelize(process.env.POSTGRESQL_URI);
exports.sequelize = sequelize;
const app = (0, express_1.default)();
const allowlist = ['http://localhost:5173', 'https://frontend-full-stack-test.vercel.app/'];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use((0, cors_1.default)(corsOptionsDelegate));
app.use(express_1.default.json());
app.use("/todo", todo_1.default);
const startApp = () => {
    sequelize.sync({ force: true })
        .then(() => {
        console.log('Connection has been established successfully.');
    })
        .catch((error) => console.log('Unable to connect to the database:', error));
    app.listen(8000, () => {
        console.log('Server running on port 8000');
    });
};
startApp();
//# sourceMappingURL=index.js.map