const router = require('express').Router()
const { indexRoute, apiRoute } = require('../handlers/indexRoute')

router
    .get('/', indexRoute)

router
    .get('/api', apiRoute)

module.exports = router