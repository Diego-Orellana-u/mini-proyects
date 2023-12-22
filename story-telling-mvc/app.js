const express = require('express')
const app = express()
const passport = require('passport')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const morgan = require('morgan')
const session = require('express-session')
const exphbs = require('express-handlebars')

const indexRoutes = require('./routes/index')
const authRoutes = require('./routes/auth')


require('dotenv').config({ path: './config/.env'})

require('./config/passport')(passport)

connectDB()

// Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('View engine', '.hbs')

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
    })
)

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Static
app.use(express.static('public'))

// Routes
app.use('/', indexRoutes)
app.use('/auth', authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})

