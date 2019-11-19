
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const connectionURL = 'mongodb+srv://LuciaOseg:Maya2014.@cluster0-azb6v.mongodb.net/test?retryWrites=true&w=majority'
// const database = 'test'

const express = require('express')
const app = express()

require('./db/mongoose.js')

const router = require('/Users/luciaoseguera/Desktop/Lab7-CRUD/controllers/routes.js')

const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(port, function() {
  console.log('Server up and running on port', port)
})

// MongoClient.connect(connectionURL,
//   { useNewUrlParser: true },
//   function(error, client) {
//   if (error) {
//     console.log(error)
//     return console.log('No se pudo conectar a la DB')
//   }
//
//   const db = client.db(database)


  //CREATE
   // db.collection('characters').insertMany([
   //   {
   //     name: 'Jon Snow',
   //     age: 20,
   //     born: '283',
   //     timeline: 'AC',
   //     alliegance: [
   //      'House Stark',
   //      'The Nights Watch'
   //     ],
   //     playedBy : 'Kit Harrington',
   //     titles: [
   //      'Lord Commander of The Nights Watch',
   //      'King of The North',
   //      'Lord Crow'
   //     ],
   //     father: 'Ned Stark',
   //     mother: 'unknown',
   //     spouse: ''
   //   },{
   //     name: 'Eddard Stark',
   //     age: 35,
   //     born: "263",
   //     timeline: "AC",
   //     alliegance: [
   //       'House Stark'
   //     ],
   //     playedBy : 'Sean Bean',
   //     titles: [
   //       'Lord of Winterfell',
   //       'Warden of the North',
   //       'Hand of the King'
   //     ],
   //     father: 'Rickard Stark',
   //     mother: 'Lyanna Stark',
   //     spouse: 'Catelyn Stark'
   //   }], function(error, result) {
   //     if(error) {
   //       return console.log('Error al agregar')
   //     }
   //     console.log(result.ops)
   //   })


  // READ
  //  db.collection('characters').findOne({ name: 'Eddard Stark'},
  //    function(error, user){
  //      if(error) {
  //        console.log('Unable to fetch')
  //      }
  //     console.log(user)
  //   })
  // })

  // db.collection('users').findOne({ _id: new ObjectId('5dc0acde93c3834a410fc32f')},
  //   function(error, user){
  //     if(error) {
  //       console.log('Unable to fetch')
  //     }
  //     console.log(user)
  //   })

  // db.collection('users').find({ age : { $gt: 21, $lt: 28 } }).toArray(
  //   function(error, users) {
  //     console.log(users)
  //   })

  //UPDATE

  // db.collection('users').updateOne({
  //   name: 'Barbara'
  // }, {
  //   $set: {
  //     name: 'SUPER EDIT'
  //   },
  //   $inc: {
  //     age: 1
  //   }
  // }, function(error, update) {
  //   if (error) {
  //     console.log('Could not update')
  //   }
  //   console.log(update)

  //db.collection('users').updateMany({
  //  age: 23
  //}, {
  //  $set: {
  //    age: 24
  //  }
  //}, function(error, update) {
    // if (error) {
    //  console.log('Could not update')
  //  }
  //  console.log(update)
//  })
