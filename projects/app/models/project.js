var mongoose = require('mongoose');  
var bcrypt   = require('bcrypt-nodejs');

var projectSchema = new mongoose.Schema({  
  naziv_projekta: String,
  opis_projekta: String,
  cijena_projekta: Number,
  obavljeni_poslovi: { type: Boolean, default: false},
  datum_pocetak: { type: Date, default: Date.now },
  datum_zavrsetak: { type: Date, default: Date.now },
  clanovi: { type:String, default: "nema"},
  voditelj: String
});

module.exports = mongoose.model('Project', projectSchema);