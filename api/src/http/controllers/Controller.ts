import { Express } from 'express'

export interface Controller {
    registerRoutesIn(server: Express): void
}
