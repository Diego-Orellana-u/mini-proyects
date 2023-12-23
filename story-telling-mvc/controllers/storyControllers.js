const Story = require('../models/Story')

module.exports = {
    add: (req, res) => {
        res.render('stories/add.hbs')
    },
    post: async (req, res) => {
        try {
            req.body.user = req.user.id
            await Story.create(req.body)
            res.redirect('/dashboard')
        } catch (err) {
            console.error(err)
            res.render('error/500.hbs')
        }
    },
    getStories: async (req, res) => {
        try {
            const stories = await Story.find({ status: 'public'})
                .populate('user')
                .sort({ createdAt: 'desc'})
                .lean()

            res.render('stories/index.hbs',{
                stories,
            })
        } catch (err) {
            console.error(err)
            res.render('error/500.hbs')
        }
    },
    editStory: async (req, res) => {
        try {
            const story = await Story.findOne({_id: req.params.id}).lean()

            if(!story){
                return res.render('error/404.hbs')
            }

            if(story.user != req.user.id){
                res.redirect('/stories')
            }else{
                res.render('stories/edit.hbs', {story})
            }
        } catch (err) {
            console.error(err)
            return res.render('error/500.hbs')
        }
        
    },
    putStory: async (req, res) => {
        try {
            let story = await Story.findById(req.params.id).lean()

            if(!story){
                return res.render('error/404.hbs')
            }

            if(story.user != req.user.id){
                res.redirect('/stories')
            }else{
                story = await Story.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new: true,
                    runValidators: true
                })

                res.redirect('/dashboard')
            }
        } catch (err) {
            console.error(err)
            return res.render('error/500.hbs')
        }
        
    },
    deleteStory: async (req, res) => {
        try {
            await Story.deleteOne({ _id: req.params.id })
            res.redirect('/dashboard')
        } catch (err) {
            console.error(err)
            return res.render('error/500.hbs')
        }
    },
    showIndividual: async (req, res) => {
        try {
            const story = await Story.findById({_id: req.params.id}).populate('user').lean()

            if(!story){
                return res.render('error/404.hbs')
            }
            res.render('stories/show.hbs', {
                story
            })
        } catch (err) {
            console.error(err)
            return res.render('error/500.hbs')
        }
    },
    getUser: async (req, res) => {
        try {
            const stories = await Story.find({
                user: req.params.userId,
                status: 'public',

            })
            .populate('user')
            .lean()

            res.render('stories/index.hbs',{
                stories
            })
        } catch (err) {
            console.error(err)
            return res.render('error/500.hbs')
        }
    }
}