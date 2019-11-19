
const express = require('express')
const users = require('./character')

const router = express.Router()

router.get('/persons', users.getCharacter)
router.get('/persons/:id', users.getByID)
//router.post('/persons', users.createUser)
//router.patch('/persons/:id', users.updateUser)
//router.delete('/persons/:id', users.deleteUser)

module.exports = router
