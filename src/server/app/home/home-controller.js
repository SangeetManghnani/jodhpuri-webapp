const controller = {};

controller.main = function(req, res) {
    res.render('home/home', {
        pageTitle: 'Hello Sangeet',
        navList: [{
            name: "Home",
            link: '/home'
        }, {
            name: "Login",
            link: '/login'
        }, {
            name: "Signup",
            link: '/signup'
        }]
    });
};

export default controller;