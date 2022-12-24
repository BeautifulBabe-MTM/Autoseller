const Router = require('express')
const router = new Router()
const carController = require('../contollers/carController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), carController.create)

module.exports = router