'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fa = require('react-icons/lib/fa');

var FaIcons = _interopRequireWildcard(_fa);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// NextJs compatibility

exports['default'] = function (_ref) {
  var type = _ref.type;

  var Icon = FaIcons[type];

  if (!Icon) {
    throw new Error('Icon not found or invalid.');
  }

  return _react2['default'].createElement(
    'div',
    { style: { display: 'flex' } },
    _react2['default'].createElement(Icon, null)
  );
};