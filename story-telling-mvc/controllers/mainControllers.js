module.exports = {
    getLogin: (req,res) => {
        res.render('login.hbs', {
            layout: 'login',
        })
    },
    getDashboard: (req, res) => {
        res.render('dashboard.hbs')
    }
}