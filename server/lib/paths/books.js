'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _db = require('../config/db');

var _books = require('../calls/books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _books2.default.all);
router.get('/:id', _books2.default.read);
router.post('/', _books2.default.create);
router.put('/:id', _books2.default.update);
router.delete('/:id', _books2.default.destroy);

exports.default = router;