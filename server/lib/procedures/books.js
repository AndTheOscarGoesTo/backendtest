'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('../config/db');

function all() {
    return (0, _db.rows)('spGetAllBooks');
}

function create(authorid, name, cover) {
    return (0, _db.rows)('spAddABook', [authorid, name, cover]);
}

function read(id) {
    return (0, _db.row)('spGetABook', [id]);
}

function update(id, name, cover) {
    return (0, _db.empty)('spUpdateABook', [id, name, cover]);
}

function destroy(id) {
    return (0, _db.empty)('spDeleteABook', [id]);
}

exports.default = {
    all: all,
    create: create,
    read: read,
    update: update,
    destroy: destroy
};