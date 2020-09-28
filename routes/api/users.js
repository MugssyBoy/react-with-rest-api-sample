const router = require('express').Router({ mergeParams: true })
const { getUsers, addUsers, updateUsers, deleteUsers } = require('../../handlers/usersRoute')

router
    .route('/')
    .get(getUsers)
    .post(addUsers)
    .put(updateUsers)
    .delete(deleteUsers)

module.exports = router