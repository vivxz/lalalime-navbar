var mongoose = require('mongoose');
const db = mongoose.connect('mongodb+srv://vivxz:{PASSWORD}@cluster0-bk7sm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

var clothingSchema = new mongoose.Schema({
  name: String,
  color: String,
  type: String,
  images: String
})

var Clothings = mongoose.model('Clothings', clothingSchema);

module.exports = Clothings;
