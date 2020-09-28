module.exports = {
    indexRoute: (req, res) => {
        res.redirect('/api')
    },
    apiRoute: (req, res) => {
        res.status(200).json({
            msg: 'Welcome to Api Route'
        })
    }
}