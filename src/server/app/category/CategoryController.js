const controller = {};

// constructor pattern.
controller.main = function(req, res) {
    res.render('listing/listing')
}

export default controller;