const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const indexRoutes = require('./routes/index')
const authRoutes = require('./routes/auth')
const storiesRoutes = require('./routes/stories')


require('dotenv').config({ path: './config/.env'})

require('./config/passport')(passport)

connectDB()

// Body Parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Method override
app.use(
    methodOverride(function (req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
      }
    })
)

// Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//  Handlebars Helpers
const { formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs')

// Handlebars
app.engine('.hbs', exphbs.engine({helpers: {formatDate, stripTags, truncate, editIcon, select },defaultLayout: 'main', extname: '.hbs'}))
app.set('View engine', '.hbs')

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ client: mongoose.connection.getClient() })
    })
)

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Set Global Var
app.use(function (req, res, next){
    res.locals.user = req.user || null
    next()
})

// Static
app.use(express.static('public'))

// Routes
app.use('/', indexRoutes)
app.use('/auth', authRoutes)
app.use('/stories', storiesRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})

