var express = require('express');
var analyzerEntity = require('../utils/lexicalAnalyzer');
var router = express.Router();
var fs = require('fs');

var contents = fs.readFileSync('codeForAnalyze', 'utf8');
// console.log(contents);

let analyzer =  new analyzerEntity(contents);

console.log(analyzer.countRows());

/* GET lab1 */
router.get('/', function(req, res, next) {
  res.render('lab1', { title: 'Created by Victor Klynets' });
});


module.exports = router;
