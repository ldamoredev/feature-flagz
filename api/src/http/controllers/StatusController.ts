import { Express, Request, Response } from 'express'
import { Controller } from './Controller'

export class StatusController implements Controller {
    registerRoutesIn(server: Express): void {
        server.get('/status', this.statusHandler())
    }

    private statusHandler() {
        return function (req: Request, res: Response) {
            res.status(200).send({ status: 'ok!' })
        }
    }
}
