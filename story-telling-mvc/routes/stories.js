const express = require('express')
const router = express.Router()
const storiesControllers = require('../controllers/storyControllers')

const { ensureAuth} = require('../middleware/auth')

router.get('/add', ensureAuth, storiesControllers.add)
router.post('/', ensureAuth, storiesControllers.post)
router.get('/', ensureAuth, storiesControllers.getStories)
router.get('/edit/:id', ensureAuth, storiesControllers.editStory)
router.put('/:id', ensureAuth, storiesControllers.putStory)
router.delete('/:id', ensureAuth, storiesControllers.deleteStory)
router.get('/:id', ensureAuth, storiesControllers.showIndividual)
router.get('/user/:userId', ensureAuth, storiesControllers.getUser)

module.exports = router