'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('../db');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authRouter() {

    function getAll(rows) {
        return callProcedure(spGetAllAuthors).then(function (authors) {
            res.json(authors[0]);
        });
    }

    function create(firstname, lastname) {}

    function read(id) {}

    function update(id) {}

    function destroy(id) {}
}

exports.default = authRouter;