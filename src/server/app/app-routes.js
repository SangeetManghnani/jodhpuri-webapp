// This file is executed in NodeJs

import homeController from './home/home-controller';
import aboutUsController from './aboutUs/about-us-controller';
import productController from './product/ProductController';
import categoryController from './category/CategoryController';

// because * -routes files are required dynamically,
// we need to export them in CommonJS style
module.exports = function(app, router) {

    router.get("/", homeController.main);
    router.get("/about-us", aboutUsController.main);
    router.get("/:category", categoryController.main);
    router.get("/:category/:product", productController.main);

    // router.get("/s/*", searchController.main);

    // router.get("/item/*", propertyController.main);

};