var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var piece = mongoose.model('piece');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cole Campbell · Multimedia Designer' });
});

router.get('/about', function(req,res,next) {
  res.render('about', {title: 'About Cole'});
});

router.get('/work', function(req,res,next){
  res.render('work', {title: 'Portfolio Work'})
})

//POST new submit of piece
router.post("/create", function(req,res,next){
  var portfolio = mongoose.get('portfolio');
  
  piece.save({
    title: req.body.name,
    content: req.body.content
  }, function(err,doc){
    if(err){
      res.send("Whoopsies! Looks like we lost your work.");
    } else{
      res.redirect('/');
    }
  });
});

/*exports.create = function (req,res){
  new piece ({
    name: req.body.name,
    content: req.body.content
  }).save( function(err, piece, count){
    res.redirect('/');
  });
};*/

module.exports = router;
