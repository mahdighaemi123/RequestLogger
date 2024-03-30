const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const myLogger = require('./logging.middleware')

const app = express()

const { port, default_response } = require("./config")


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cookieParser())

app.use(myLogger.myLogger)

app.use("*", (req, res, next) => res.status(200).json(default_response))

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://0.0.0.0:${port}`)
})