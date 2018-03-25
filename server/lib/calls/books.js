'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _books = require('../procedures/books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all(req, res, next) {
    _books2.default.all().then(function (books) {
        res.json(books);
    }).catch(function (err) {
        console.log(err);
    });
}

function create(req, res, next) {
    var newBook = {
        authorid: req.body.authorid,
        name: req.body.name,
        cover: req.body.cover
    };

    _books2.default.create(newBook.authorid, newBook.name, newBook.cover).then(function (id) {
        res.json(id);
    }).catch(function (err) {
        console.log(err);
    });
}

function read(req, res, next) {
    var id = req.params.id;

    _books2.default.read(id).then(function (book) {
        res.json(book);
    }).catch(function (err) {
        console.log(err);
    });
}

function update(req, res, next) {
    var id = req.params.id;
    var book = {
        name: req.body.name,
        cover: req.body.cover
    };

    _books2.default.update(id, book.name, book.cover).then(function () {
        res.sendStatus(201);
    }).catch(function (err) {
        console.log(err);
    });
}

function destroy(req, res, next) {
    var id = req.params.id;

    _books2.default.destroy(id).then(function () {
        res.send('Deleted');
    }).catch(function (err) {
        console.log(err);
    });
}

exports.default = {
    all: all,
    create: create,
    read: read,
    update: update,
    destroy: destroy
};