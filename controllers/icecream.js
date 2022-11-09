var icecream = require('../models/icecream'); 
 
// List of all Costumes 
exports.icecream_list = async function(req, res) { 
        try{ 
            theicecreams = await icecream.find(); 
            res.send(theicecreams); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
    }; 
 
// for a specific Costume. 
exports.icecream_detail = async function(req, res) { 
    try{ 
        theicecreams = await icecream.find(); 
        res.send(theicecreams); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.icecream_create_post = async function(req, res) { 
    try{ 
        theicecreams = await icecream.find(); 
        res.send(theicecreams); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.icecream_delete = async function(req, res) { 
    try{ 
        theicecreams = await icecream.find(); 
        res.send(theicecreams); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume update form on PUT. 
exports.icecream_update_put = async function(req, res) { 
    try{ 
        theicecreams = await icecream.find(); 
        res.send(theicecreams); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 