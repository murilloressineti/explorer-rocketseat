const { Router } = require('express')

const UsersControllers = require('../controllers/UsersControllers.js')

const usersRoutes = Router()

const usersController = new UsersControllers()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes