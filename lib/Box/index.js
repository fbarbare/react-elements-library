'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (_ref) {
  var children = _ref.children,
      config = _ref.config,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === undefined ? true : _ref$overflow,
      boxShadow = _ref.boxShadow;

  var isBoxShadowEnabled = typeof boxShadow === 'boolean' ? boxShadow : config.boxShadow;

  return _react2['default'].createElement(
    'div',
    {
      style: (0, _object2['default'])({}, _style2['default'].box, {
        backgroundColor: config.boxBg,
        boxShadow: isBoxShadowEnabled ? '0 0 3px rgba(0,0,0,0.4)' : '',
        overflow: overflow ? 'hidden' : 'initial'
      })
    },
    children
  );
};