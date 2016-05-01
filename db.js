var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var piece = new Schema({
    name: String,
    content: String
});

mongoose.model('piece', piece);
mongoose.connect('admin:password@ds064188.mlab.com:64188/colethecolossus-portfolio');