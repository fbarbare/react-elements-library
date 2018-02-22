'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = require('./default.style');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports['default'] = function (_ref) {
  var config = _ref.config,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['config', 'children']);

  return _react2['default'].createElement(
    'label',
    { style: _default2['default'].wrapper },
    _react2['default'].createElement('input', _extends({}, props, { type: 'checkbox' })),
    children && _react2['default'].createElement(
      'span',
      { style: _default2['default'].text },
      children
    )
  );
};