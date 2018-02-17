const controller = {};

controller.main = function(req, res) {
    res.render('home/home', {
        pageTitle: 'Jodhpuri Furnitures -Furniture Range From The Land of Maharajas',
        bestSellers: [{
            name: "Sheesham Sofa",
            link: '/home'
        }, {
            name: "Morgan Coffee Table",
            link: '/login'
        }, {
            name: "Simple Study Table",
            link: '/signup'
        }],
        categories: [{
            name: "Sofas",
            link: '/sofas-list'
        }, {
            name: "Beds",
            link: '/beds-list'
        }, {
            name: "Dining",
            link: '/dining-list'
        }, {
            name: "Seating",
            link: '/seating-list'
        }, {
            name: "Coffe Tables",
            link: '/coffe-tables-list'
        }, {
            name: "Cupboards",
            link: '/cupboards-list'
        }, {
            name: "Recliners",
            link: '/recliners-list'
        }, {
            name: "Storage",
            link: '/storage-list'
        }, {
            name: "Shoe Racks",
            link: '/shoe-racks-list'
        }, {
            name: "Study",
            link: '/study-list'
        }, {
            name: "Interior Design",
            link: '/interior-list'
        }]
    });
};

export default controller;