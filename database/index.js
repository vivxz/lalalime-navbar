var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/search', { useNewUrlParser: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('CONNECTED'));

var clothingSchema = new mongoose.Schema({
  name: String,
  color: String,
  type: String,
  images: String
})

var Clothings = mongoose.model('Clothings', clothingSchema);

module.exports = Clothings;