const express = require('express')
const notesControllers = require('../controllers/notesControllers.js')
const router = express.Router()

router.route('/')
    .get(notesControllers.getAllNotes)
    .post(notesControllers.createNewNote)
    .patch(notesControllers.updateNote)
    .delete(notesControllers.deleteNote)

module.exports = router