'use strict';

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var router = _express2.default.Router();

var connection = _mysql2.default.createConnection({
    host: 'localhost',
    user: 'oscar',
    password: 'innovatebham',
    database: 'backend_test'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('We are connected');
});

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

app.listen();