const express = require('express')
const router = express.Router()

const profileControllers = require('../controllers/profileControllers')

router.get('/', profileControllers.getProfile)
router.get('/workout-tracker', profileControllers.getWorkoutTrack)

module.exports = router