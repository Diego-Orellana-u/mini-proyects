module.exports = {
    getLogin: (req, res) => {
        if(req.user){
            return res.redirect('/todos')
        }
        res.render('login.ejs')
    }
}