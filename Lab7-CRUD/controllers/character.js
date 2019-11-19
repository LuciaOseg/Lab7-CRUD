const Character = require('../models/character.js')

const getCharacter = function(req, res) {
  Character.find({}).then(function(characters) {
    res.send(characters)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

  const getByID = function(req, res) {
    _id = req.params.id
    Character.findById(_id).then(function(character) {
      return res.send(character)
    }).catch(function(error) {
      return res.status(404).send({})
    })
  }

  const createCharacter = function(req, res) {
    const character = new Character(req.body)
        character.save().then(function() {
        return res.send(character)
        }).catch(function(error) {
        return res.status(400).send(error)
        })
}

const updateByID = function(req, res) {
    const _id = req.params.id

    Character.findByIdAndUpdate(_id, req.body).then(function(character) {
        if (!character) { //if character is not found
            return res.status(404).send()
        }
        return res.send(character)
        }).catch(function(error) {
        res.status(500).send(error)
        })
}

const deleteCharacter = function(req, res) {
  const _id = req.params.id
  Character.findByIdAndDelete(_id).then(function(character){
    if(!character) {
      return res.status(404).send({})
    }
    return res.send(character)
  }).catch(function(character) {
    res.status(505).send(character)
  })
}
  module.exports = {
    getCharacter,
    getByID,
    createCharacter,
    updateByID,
    deleteCharacter
  }
