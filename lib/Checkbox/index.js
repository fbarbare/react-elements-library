'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (props) {
  var Component = _default2['default'];

  if (typeof props.config !== 'undefined' && props.config.checkboxTemplate === 'toggle') {
    Component = _toggle2['default'];
  }

  return _react2['default'].createElement(Component, props);
};