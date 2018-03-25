'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('../config/db');

function all() {
    return (0, _db.rows)('spGetAllAuthors');
}

function create(firstname, lastname) {
    return (0, _db.rows)('spAddAnAuthor', [firstname, lastname]);
}

function read(id) {
    return (0, _db.row)('spGetAnAuthor', [id]);
}

function update(id, firstname, lastname) {
    return (0, _db.empty)('spUpdateAnAuthor', [id, firstname, lastname]);
}

function destroy(id) {
    return (0, _db.empty)('spDeleteAnAuthor', [id]);
}

exports.default = {
    all: all,
    create: create,
    read: read,
    update: update,
    destroy: destroy
};