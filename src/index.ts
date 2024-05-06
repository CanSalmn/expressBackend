import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './router'

const app = express()
app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log("server running on http://localhost:8080/")
})


const MONGO_DB_URL = "mongodb+srv://mikailcansalman:b75J8VMHZip6WgBV@greenifyme.oenalsa.mongodb.net/?retryWrites=true&w=majority&appName=greenifyme"

mongoose.Promise = Promise
mongoose.connect(MONGO_DB_URL)
mongoose.connection.on('error', (error: Error) => console.log("error in index src"))

app.use('/', router())