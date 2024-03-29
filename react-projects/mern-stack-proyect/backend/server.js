require('dotenv').config()
const express = require('express')
const path = require('path')
const errorHandler = require('./middleware/errorHandler.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')
const connectDB = require('./config/dbConn.js')
const mongoose = require('mongoose')
const { logger, logEvents } = require('./middleware/logger.js')

console.log(process.env.NODE_ENV)

connectDB()

const app = express()
const PORT = process.env.PORT || 3500

app.use(logger)

app.use(express.json())

app.use(cors(corsOptions))

app.use(cookieParser())


app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

app.use('/users', require('./routes/userRoutes.js'))
app.use('/notes', require('./routes/noteRoutes.js'))

app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if(req.accepts('json')){
        res.json({ message: '404 not found'})
    }else{
        res.type('txt').send('404 not found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB')
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})