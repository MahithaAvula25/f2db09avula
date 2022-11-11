var icecream = require('../models/icecream');

// List of all Costumes 
exports.icecream_list = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream list');
};

// List of all Costumes 
exports.icecream_list = async function (req, res) {
    try {
        theicecreams = await icecream.find();
        res.send(theicecreams);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume. 
exports.icecream_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};

// for a specific Costume. 
exports.icecream_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await icecream.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// List of all Costumes 
// exports.icecream_detail = async function(req, res) { 
//     try{ 
//         theicecreams = await icecream.find(); 
//         res.send(theicecreams); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// };

// Handle Costume create on POST. 
exports.icecream_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream create POST');
};

// List of all Costumes 
exports.icecream_create_post = async function (req, res) {
    try {
        theicecreams = await icecream.find();
        res.send(theicecreams);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume delete form on DELETE. 
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};

// List of all Costumes 
exports.icecream_delete = async function (req, res) {
    try {
        theicecreams = await icecream.find();
        res.send(theicecreams);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update form on PUT. 
// exports.icecream_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
// };

// List of all Costumes 
// exports.icecream_update_put = async function(req, res) { 
//     try{ 
//         theicecreams = await icecream.find(); 
//         res.send(theicecreams); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// };

// Handle Costume update form on PUT. 
exports.icecream_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await icecream.findById(req.params.id)
        // Do updates of properties 

        if (req.body.name)toUpdate.name = req.body.name;
        if (req.body.flavor) toUpdate.flavor = req.body.flavor;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS 
// Handle a show all view 
exports.icecream_view_all_Page = async function (req, res) {
    try {
        theicecreams = await icecream.find();
        res.render('icecreams', {
            title: 'icecream Search Results',
            results: theicecreams
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST. 
exports.icecream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name;
    document.flavor = req.body.flavor;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};