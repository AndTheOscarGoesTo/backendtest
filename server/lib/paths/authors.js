'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _db = require('../config/db');

var _authors = require('../calls/authors');

var _authors2 = _interopRequireDefault(_authors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _authors2.default.all);
router.get('/:id', _authors2.default.read);
router.post('/', _authors2.default.create);
router.put('/:id', _authors2.default.update);
router.delete('/:id', _authors2.default.destroy);

exports.default = router;