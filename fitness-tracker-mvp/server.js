const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
const passport = require('passport')
const logger = require('morgan')
const session = require('express-session')
const flash = require('express-flash')

const mainRoutes = require('./routes/main')
const profileRoutes = require('./routes/profile')

require('dotenv').config({ path: './config/.env' })
require('./config/passport')(passport)

connectDB()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(logger('dev'))
app.set('View engine', 'ejs')

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ client: mongoose.connection.getClient() }),
    })
)

// Passport
app.use(passport.initialize())
app.use(passport.session())

app.use(flash()) //has to go before Routes

// Routes
app.use('/', mainRoutes)
app.use('/profile', profileRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.NODE_ENV} mode in ${process.env.PORT}`)
})