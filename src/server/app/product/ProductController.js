const breadcrumbs = require('../../utils/breadcrumbs');
const controller = {};

controller.main = function(req, res) {
    const breadcrumbsProduct = breadcrumbs.getBreadcrumbs(req, res);
    console.log(req.breadcrumbs);
    const productData = {
        breadcrumbs: req.breadcrumbs,
    }
    res.render('product/product', {
        breadcrumbs: req.breadcrumbs,
    });
}

export default controller;