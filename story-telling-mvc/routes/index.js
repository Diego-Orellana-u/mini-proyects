const express = require('express')
const router = express.Router()
const mainControllers = require('../controllers/mainControllers')

// @desc     Login/landing
// @route    GET /
router.get('/', mainControllers.getLogin)
router.get('/dashboard', mainControllers.getDashboard)



module.exports = router