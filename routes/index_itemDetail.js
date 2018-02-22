
var data = require('../buyer_menu.json');

exports.viewMenu = function(req, res) { 
  // controller code goes here 
  var i = 0;
  res.render('index_itemDetail', data.items[i]);
};
