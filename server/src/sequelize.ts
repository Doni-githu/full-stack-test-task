import { Sequelize } from "sequelize"
import { DefaultDeserializer } from "v8"

// const sequelize = new Sequelize('postgresql://postgres:doni@localhost:5432/postgres')

const sequelize = new Sequelize(process.env.POSTGRESQL_URI)

export default sequelize