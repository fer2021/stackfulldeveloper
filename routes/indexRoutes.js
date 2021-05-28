const express = require('express')
const indexRoutes = express.Router()

const indexController = require('../controllers/indexController')

indexRoutes.get('/', indexController.home)
indexRoutes.get('/login', indexController.login)
indexRoutes.get('/register', indexController.register)
indexRoutes.get('/market', indexController.market)


module.exports = indexRoutes