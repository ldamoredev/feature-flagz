import request = require('supertest')
import { App } from '../../src/http/App'
import { StatusController } from '../../src/http/controllers/StatusController'

it('get status information', async () => {
    const app = new App()
    app.registerController(new StatusController())

    const response = await request(app.server).get("/status")

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ status: 'ok!' })
})
