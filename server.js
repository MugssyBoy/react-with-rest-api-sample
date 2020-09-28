const cors = require('cors')
const path = require('path')
const express = require('express')

// server port
const serverPort = process.env.PORT || 8080
// 500 status middleware
const errorHandler = require('./handlers/errorHandler')

// require routes
const indexRoute = require('./routes/index')
const usersRoute = require('./routes/api/users')

// initialize express
const app = express()

//initialize cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'client/build')))

//routes
app.use('/', indexRoute)
app.use('/api/users', usersRoute)

// if in production, react client will be served to browser
if (process.env.NODE_ENV) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

// handle error middlewares
app.use((req, res, next) => {
    let err = new Error('Not Found.')
    err.status = 404
    next(err)
})

app.use(errorHandler)

app.listen(serverPort, () => console.log(`server running on port ${serverPort}`))