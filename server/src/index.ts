import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import TodoRoutes from "./routes/todo"
import sequelize from "./sequelize"

const app = express()
const corsOptionsDelegate = function (origin, callback): void {
    const allowlist = ['http://localhost:5173', 'https://frontend-full-stack-test.vercel.app/']
    if (allowlist.indexOf(origin) !== -1) {
        callback(null, true)
    } else {
        callback(new Error('Not allowed by CORS'))
    }
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