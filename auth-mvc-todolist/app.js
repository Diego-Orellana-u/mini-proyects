const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const logger = require('morgan')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
const flash = require('express-flash')

const mainRoutes = require('./routes/main')

require('dotenv').config({ path: './config/.env'})
require('./config/passport')(passport)

connectDB()
const app = express()


// General configuration
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('View engine', 'ejs')

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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.NODE_ENV} mode in port ${process.env.PORT}`)
})
