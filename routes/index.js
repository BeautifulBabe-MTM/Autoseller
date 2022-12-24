const Router = require('express')
const router = new Router()
const carRouter = require('./carRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/car', carRouter)

module.exports = router