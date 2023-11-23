import express, { Express } from 'express'
import { Controller } from './controllers/Controller'
import { Logger } from '../core/infrastructure/Logger'

export class App {
    private readonly _server: Express
    private logger: Logger = new Logger()

    constructor() {
        this._server = express()
    }

    registerController(controller: Controller) {
        controller.registerRoutesIn(this._server)
    }

    start(port: number) {
        this._server.listen(port, () => { this.logger.log(`app listening on port ${port}`) })
    }

    get server(): Express {
        return this._server
    }
}
