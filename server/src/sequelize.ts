import { Sequelize } from "sequelize"
const sequelize = new Sequelize('postgres', 'postgres', 'doni', {
    host: "localhost",
    dialect: 'postgres'
})

export default sequelize