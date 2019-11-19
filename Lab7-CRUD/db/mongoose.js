const mongoose = require('mongoose')
const connectionURL =`mongodb+srv://LuciaOseg:${SECRET_KEY}.@cluster0-azb6v.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,     // crear indexes
})
