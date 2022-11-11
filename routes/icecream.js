var express = require('express'); 
const icecream_controlers= require('../controllers/icecream'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/',icecream_controlers.icecream_view_all_Page); 
// GET request for one costume. 
router.get('/icecreams/:id', icecream_controlers.icecream_detail); 
 
module.exports = router; 