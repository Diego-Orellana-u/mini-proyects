const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const logger = require('morgan')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')

const mainRoutes = require('./routes/mainRoutes')
const todoRoutes = require('./routes/todoRoutes')

// .env Config
require('dotenv').config({path: './config/.env'})

// Passport Config
require('./config/passport')

connectDB()
const app = express()

// Middlewares
app.set('View engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ client: mongoose.connection.getClient() }),
    })
)

// Passport middleware
app.use(passport.initialize()) 
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
// app.use('/todos', todoRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})