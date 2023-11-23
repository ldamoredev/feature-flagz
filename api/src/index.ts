import { App } from './http/App'
import { StatusController } from './http/controllers/StatusController'

const app = new App()
app.registerController(new StatusController())
app.start(300)
