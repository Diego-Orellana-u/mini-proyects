import express, { response } from 'express'
import mongoose from 'mongoose'
import { Appointment } from './models/appointmentModel.js'
import agendarHora from './routes/agendarHora.js'

const app = express()
const port = 5556

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send('welcome')
})

app.use('/agendar-hora', agendarHora)

mongoose
    .connect('mongodb+srv://diegoorellanagit:lacosa1313@clinic.3bgrbf3.mongodb.net/?retryWrites=true&w=majority&appName=Clinic')
    .then(() => {
        console.log("app connected to database")
        app.listen(port, () => {
            console.log("Server is running")
        })
    })
    .catch(err => {
        console.error(err)
    })