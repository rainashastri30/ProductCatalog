var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var CarSchema = new mongoose.Schema({
_id: {type:String},
model: {type:String},
yearofmanufacture: {type:Number},
condition:{type:String},
mileage:{type:String},
description:{type:String},
price:{type:String},
img:{type:String}
});

var newCar = new mongoose.Schema({
_id: {type:String},
model: {type:String}
});

var TvSchema = new mongoose.Schema({
_id: {type:String},
brand: {type:String},
diagonalLength: {type:String},
HD:{type:String},
length:{type:String},
width:{type:String},
height:{type:String},
price:{type:String},
description:{type:String},
warantyPeriod:{type:String},
img:{type:String}
});

var newTv = new mongoose.Schema({
_id: {type:String},
brand: {type:String}
});

var NPSchema = new mongoose.Schema({

_id: {type:String},
brand: {type:String},
color:{type:String},
description:{type:String},
price:{type:String},
img:{type:String}
});

var newNp = new mongoose.Schema({
_id:{type:String},
brand:{type:String}
});


module.exports = mongoose.model('cars', CarSchema);  
//module.exports = mongoose.model('carnames', newCar);   

module.exports = mongoose.model('tvs', TvSchema);   
//module.exports = mongoose.model('tvnames', newTv);

module.exports = mongoose.model('nps', NPSchema);   
//module.exports = mongoose.model('npnames', newNp);   
