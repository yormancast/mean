// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String,
    img_url: String
});

module.exports = mongoose.model('Bear', BearSchema);
