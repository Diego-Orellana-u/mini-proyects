module.exports = {
    getProfile: (req, res) => {
        res.render('profile.ejs')
    },
    getWorkoutTrack: (req, res) => {
        res.render('workout-tracker.ejs')
    }
}

