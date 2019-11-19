const mongoose = require('mongoose')
const connectionURL =`mongodb+srv://LuciaOseg:Clase12345@cluster0-azb6v.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,     // crear indexes
})
