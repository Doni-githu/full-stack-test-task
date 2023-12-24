import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import TodoRoutes from "./routes/todo"
import sequelize from "./sequelize"

const app = express()

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))
app.use(express.json())
app.use("/todo", TodoRoutes)


const startApp = () => {
    sequelize.sync({ force: true })
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch((error) => console.log('Unable to connect to the database:', error))
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log('Server running on port 8000')
    })
}

startApp()