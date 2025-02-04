var mongoose = require('mongoose');

// finish schema
var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  color: String,
  backgroundColor: String,
  borderColor: String,
  fontSize: { type: Number, min: 2, max: 144 },
  borderRadius: { type: Number, min: 2, max: 100 },
  borderWidth: { type: Number, min: 2, max: 144 },
  padding: { type: Number, min: 2, max: 144 },
  margin: { type: Number, min: 2, max: 144 },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);