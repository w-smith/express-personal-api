var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VideogamesSchema = new Schema({
  Title: String,
  Console: String,
  Year: String,
  Multiplayer: Boolean,

});

var Videogames = mongoose.model('Videogames', VideogamesSchema);

module.exports = Videogames;
