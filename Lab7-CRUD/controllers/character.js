const User = require('../models/character.js')

const getCharacter = function(req, res) {
  User.find({}).then(function(users) {
    res.send(users)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

  const getByID = function(req, res) {
    _id = req.params.id
    User.findById(_id).then(function(user) {
      return res.send(user)
    }).catch(function(error) {
      return res.status(404).send({})
    })
  }

  module.exports = {
    getCharacter,
    getByID
  }
