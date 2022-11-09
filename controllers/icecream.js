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
// VIEWS 
// Handle a show all view 
exports.icecream_view_all_Page = async function(req, res) { 
    try{ 
        theicecreams = await icecream.find(); 
        res.render('icecreams', { title: 'icecream Search Results', results: theicecreams }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume create on POST. 
exports.icecream_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new icecream(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.icecream_type = req.body.icecream_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 