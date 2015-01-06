var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 

var newCarModel = mongoose.model('cars'); 
//var newCarModel = mongoose.model('carnames'); 

var newTvModel = mongoose.model('tvs'); 
//var newTvModel = mongoose.model('tvnames'); 

var newNpModel = mongoose.model('nps'); 
//var newNpModel = mongoose.model('npnames'); 
 
 


router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//***********************************************
router.get('/getCarInfo/:id', function(req, res, next){
console.log("id is: "+req.params.id);
newCarModel.find({model:req.params.id},function(err,docs){
if(err){ return next(err); }
res.json(docs);
    });
});



router.get('/getCarNameList', function(req, res, next){

	
    newCarModel.find(function(err,docs){
	if(err){ 
	return next(err); }
	if(docs){
	res.json(docs);
	}
    });
});

//***********************************************

router.get('/getTVInfo/:id', function(req, res, next){
console.log("id is: "+req.params.id);
newTvModel.find({brand:req.params.id},function(err,docs){
	if(err){ return next(err); }
	console.log("Inside TV service");
	res.json(docs);
    });
});

router.get('/getTVNameList', function(req, res, next){
newTvModel.find(function(err,docs){
	if(err){ return next(err); }
	console.log("Inside TV Name service");
	res.json(docs);
    });
});
//***********************************************


router.get('/getNPInfo/:id', function(req, res, next){
console.log("id is: "+req.params.id);
newNpModel.find({brand:req.params.id},function(err,docs){
	if(err){ return next(err); }
	console.log("Inside NP service");
	res.json(docs);
    });
});

router.get('/getNPNameList', function(req, res, next){
newNpModel.find(function(err,docs){
	if(err){ return next(err); }
	console.log("Inside NP Name service");
	res.json(docs);
    });
});


module.exports = router;
