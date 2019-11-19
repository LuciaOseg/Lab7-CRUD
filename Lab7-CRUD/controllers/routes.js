
const express = require('express')
const characters = require('./character')

const router = express.Router()

router.get('/persons', characters.getCharacter)
router.get('/persons/:id', characters.getByID)
router.post('/persons', characters.createCharacter)
router.patch('/persons/:id', characters.updateByID)
router.delete('/persons/:id', characters.deleteCharacter)

module.exports = router

