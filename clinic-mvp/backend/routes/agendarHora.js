import express from 'express'
import { Appointment } from '../models/appointmentModel.js'

const router = express.Router()


router.post('/', async (req, res) => {
    try {

        if(
            !req.body.nombre ||
            !req.body.correo ||
            !req.body.telefono ||
            !req.body.rut ||
            !req.body.servicio
        ){
            return res.status(400).send({
                message: 'Send all required fields: nombre, correo, telefono, rut, servicio'
            })
        }
        
        const newAppointment = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            telefono: req.body.telefono,
            rut: req.body.rut,
            servicio: req.body.servicio
        }

        const appointment = await Appointment.create(newAppointment)

        return res.status(201).send(appointment)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: error.message })
    }
})

export default router