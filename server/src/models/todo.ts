import { DataTypes, Model } from "sequelize"
import { sequelize } from "../"



class Todo extends Model { }

Todo.init({
    title: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            min: 10
        }
    },
    status: {
        type: DataTypes.ENUM,
        values: ['completed', 'pending', 'in proccess']
    }
}, {
    sequelize,
    timestamps: true,
    indexes: [{ unique: true, fields: ['title'] }],
})

export default Todo