'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authors = require('../procedures/authors');

var _authors2 = _interopRequireDefault(_authors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all(req, res, next) {
    _authors2.default.all().then(function (authors) {
        res.json(authors);
    }).catch(function (err) {
        console.log(err);
    });
}

function create(req, res, next) {
    var newAuthor = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    _authors2.default.create(newAuthor.firstname, newAuthor.lastname).then(function (id) {
        res.json(id);
    }).catch(function (err) {
        console.log(err);
    });
}

function read(req, res, next) {
    var id = req.params.id;

    _authors2.default.read(id).then(function (author) {
        res.json(author);
    }).catch(function (err) {
        console.log(err);
    });
}

function update(req, res, next) {
    var id = req.params.id;
    var author = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };
    _authors2.default.update(id, author.firstname, author.lastname).then(function () {
        res.sendStatus(201);
    }).catch(function (err) {
        console.log(err);
    });
}

function destroy(req, res, next) {
    var id = req.params.id;

    _authors2.default.destroy(id).then(function () {
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