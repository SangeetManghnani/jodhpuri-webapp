'use strict';

import exphbs from 'express-handlebars';
import path from 'path';
import Promise from 'bluebird';
import glob from 'glob';


export default function(app) {

    // Handlebars helpers
    const helpers = {};

    // Load all handlebars helpers from client dir
    glob.sync(CLIENT_DIR + '/**/*-helper.js').forEach(function(name) {
        // let helper = require(name);
        let helper = require('/Users/sangeetmanghnani/development_personal/experiments/jodhpuri-webapp/src/client/home/ifMobile-helper.js');
        console.log(helper);
        helpers[helper.name] = helper.func;
    });
    console.log(helpers);

    var partialsDir = [
        CLIENT_DIR, { dir: '/home', namespace: 'home' },
        { dir: '/_common/navbar', namespace: 'navbar' },
    ]

    console.log(partialsDir);
    // Handlebars engine setup
    app.engine('hbs', exphbs({
        extname: '.hbs',
        partialsDir: CLIENT_DIR,
        layoutsDir: CLIENT_DIR,
        defaultLayout: "main-layout",
        helpers: helpers
    }));


    // views dir setup
    app.set('views', CLIENT_DIR);

    // view engine set
    app.set('view engine', 'hbs');

    // App render method returns a promise
    app.render = Promise.promisify(app.render).bind(app);
};