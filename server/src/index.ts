import express from "express"
import sequelize from "./sequelize"
import cors, { CorsOptions } from "cors"
import dotenv from "dotenv"
dotenv.config()
import TodoRoutes from "./routes/todo"

const app = express()
const allowlist = ['http://localhost:5173', 'https://frontend-full-stack-test.vercel.app/']
const corsOptionsDelegate = function (req, callback): void {
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))
app.use(express.json())
app.use("/todo", TodoRoutes)


const startApp = () => {
    sequelize.sync({ force: true })
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch((error) => console.log('Unable to connect to the database:', error))
    app.listen(8000, () => {
        console.log('Server running on port 8000')
    })
}

startApp()