const express = require('express')
const router = express.Router()

const homeControllers = require('../controllers/homeControllers')
const authControllers = require('../controllers/authControllers')
const pageControllers = require('../controllers/pageControllers')

// Auth routes
router.get('/', homeControllers.getIndex)
router.get('/login', authControllers.getLogin)
router.post('/login', authControllers.postLogin)
router.get('/logout', authControllers.logout)
router.get('/signup', authControllers.getSignup)
router.post('/signup', authControllers.postSignup)

// Pages routes
router.get('/pricing', pageControllers.getPricing)
router.get('/why-us', pageControllers.getWhy)
router.get('/about-us', pageControllers.getAbout)
router.get('/contact', pageControllers.getContact)

module.exports = router