import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'



const routes = express.Router()
const classesControllors = new ClassesController()
const connectionsController = new ConnectionsController()
routes.get('/classes', classesControllors.index)
routes.post('/classes', classesControllors.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes