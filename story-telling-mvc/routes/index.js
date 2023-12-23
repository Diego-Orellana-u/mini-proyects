const express = require('express')
const router = express.Router()
const mainControllers = require('../controllers/mainControllers')

const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureGuest, mainControllers.getLogin)
router.get('/dashboard', ensureAuth,  mainControllers.getDashboard)



module.exports = router