const express = require('express')
const router = express.Router()

// @desc     Login/landing
// @route    GET /
router.get('/', mainControllers.getIndex)



module.exports = router