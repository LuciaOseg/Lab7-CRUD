
const Mongoose = require('mongoose');

const characterSchema = Mongoose.Schema({
    name: String,
    age: Number,
    born: String,
    timeline: String,
    alliegance: Array,
    playedBy: String,
    titles: Array,
    father: String,
    mother: String,
    spouse: String
});

const Character = Mongoose.model("Character", characterSchema);

module.exports = Character;
