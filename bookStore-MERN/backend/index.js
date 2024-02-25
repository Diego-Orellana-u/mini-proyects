import express, { request, response } from "express"
import mongoose from "mongoose"
import { PORT, mongoDBURL } from "./config.js"
import { Book } from './model/bookModel.js'
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("welcome")
})

app.use('/books', bookRoutes)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("app connected to database")
        app.listen(PORT, () => {
            console.log("Server started")
        })
    })
    .catch((error) => {
        console.log(error)
    })