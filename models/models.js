const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Car = sequelize.define('car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    brand: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    mileage: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false},
    count_site: {type: DataTypes.INTEGER, allowNull: false},
    count_door: {type: DataTypes.INTEGER, allowNull: false},
    type_gas: {type: DataTypes.STRING, allowNull: false},
    engine: {type: DataTypes.DOUBLE, allowNull: false},
    power_engine: {type: DataTypes.INTEGER, allowNull: false},
    type_of_drive: {type: DataTypes.STRING, allowNull: false},
    type_of_gearbox: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    User,
    Car
}
