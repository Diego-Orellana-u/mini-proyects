const Story = require('../models/Story')

module.exports = {
    getLogin: (req,res) => {
        res.render('login.hbs', {
            layout: 'login',
        })
    },
    getDashboard: async (req, res) => {
        try {
            const stories = await Story.find({user: req.user.id}).lean()
            res.render('dashboard.hbs', {
                name: req.user.firstName, 
                stories
            })
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
        
    }
}