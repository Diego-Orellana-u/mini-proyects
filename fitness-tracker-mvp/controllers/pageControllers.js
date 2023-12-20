const passport = require('passport')
const session = require('express-session')
const validator = require('validator')
const User = require('../models/User')
const flash = require('express-flash')

module.exports = {
    getPricing: (req, res) => {
        res.render('pricing.ejs')
    },
    getWhy: (req, res) => {
        res.render('why-us.ejs')
    },
    getAbout: (req, res) => {
        res.render('about-us.ejs')
    },
    getContact: (req, res) => {
        res.render('contact.ejs')
    }
}