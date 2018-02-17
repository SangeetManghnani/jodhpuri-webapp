const Handlebars = require('../../../node_modules/handlebars/dist/handlebars');
Handlebars.registerHelper("ifMobile", function(options) {
    if (typeof window.ontouchstart === "object") {
        console.log('hello helper');
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});