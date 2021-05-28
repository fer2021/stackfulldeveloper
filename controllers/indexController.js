const indexController = {
    home: (req, res) => {
        return res.render('home')
    },
    login: (req, res) => {
        return res.render('login')
    },
    market: (req, res) => {
        return res.render('market')
    },
    register: (req, res) => {
        return res.render('register')
    },
}
module.exports = indexController