'use strict';

import bodyParser from 'body-parser';
import express from 'express';
var device = require('express-device');

export default function(app) {
    // Request body parser for url
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Request body parser for json
    app.use(bodyParser.json());

    // Static server
    app.use(express.static(PUBLIC_DIR));
    app.use(device.capture());
    device.enableDeviceHelpers(app)
};