import express from 'express'

const app = express()

app.get('/', function(req, res) {
    res.send('hello world')
})

app.listen(3008, () => {
    console.log(`Example app listening on port ${3008}`)
})
