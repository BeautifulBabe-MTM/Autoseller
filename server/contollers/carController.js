const uuid = require('uuid')
const path = require('path');
const { Car } = require('../models/models')
const ApiError = require('../error/ApiError')

class CarController {
    async create(req, res, next) {
        try {
            const { model, brand, type, year, mileage, body, count_site, count_door, type_gas, engine, power, power_engine, type_of_drive, type_of_gearbox, price, img_1, img_2, img_3, img_4, img_5 } = req.body

            const car = await Car.create({ model, brand, type, year, mileage, body, count_site, count_door, type_gas, engine, power, power_engine, type_of_drive, type_of_gearbox, price, img_1, img_2, img_3, img_4, img_5})

            return res.json(car)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CarController()