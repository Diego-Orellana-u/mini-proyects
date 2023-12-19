const express = require('express')
const router = express.Router()

const homeControllers = require('../controllers/homeControllers')
const authControllers = require('../controllers/authControllers')

router.get('/', homeControllers.getIndex)
router.get('/login', authControllers.getLogin)

module.exports = router