import mongoose from "mongoose"

const appointmentSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        rut: {
            type: String,
            required: true
        },
        servicio: {
            type: String,
            required: true
        }
    }
)

export const Appointment = mongoose.model('Appointment', appointmentSchema)