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
    console.log("local host running")
})


const MONGO_DB_URL = "mongodb+srv://sorgunlu2000:qG9lbzFvrdzO8b9V@cluster0.rc4o6dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.Promise = Promise
mongoose.connect(MONGO_DB_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())