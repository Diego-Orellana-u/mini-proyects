const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mainRoutes = require('./routes/mainRoutes')
const todoRoutes = require('./routes/todoRoutes')
const connectDB = require('./config/database')

require('dotenv').config({ path: './config/.env' })

connectDB()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/', mainRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})


