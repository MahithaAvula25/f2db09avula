var icecream = require('../models/icecream'); 
 
// List of all Costumes 
exports.icecream_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream list'); 
}; 
 
// for a specific Costume. 
exports.icecream_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.icecream_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.icecream_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.icecream_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id); 
}; 