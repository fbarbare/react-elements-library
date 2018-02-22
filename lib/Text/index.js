'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports['default'] = function (_ref) {
  var config = _ref.config,
      props = _objectWithoutProperties(_ref, ['config']);

  var stylesInput = (0, _object2['default'])({}, _style2['default'].input, {
    borderColor: config.inputColor1,
    color: config.inputColor2
  });

  switch (config.inputTemplate) {
    case 'full-border':
      stylesInput = (0, _object2['default'])({}, _style2['default'].fullBorderInput, stylesInput);
      break;

    case 'border-bottom':
      stylesInput = (0, _object2['default'])({}, _style2['default'].borderBottomInput, stylesInput);
      break;

    default:
      break;
  }

  return _react2['default'].createElement(
    'div',
    null,
    props.label && _react2['default'].createElement(
      'label',
      {
        style: (0, _object2['default'])({}, _style2['default'].label, {
          borderColor: config.inputColor1,
          color: config.inputColor2
        })
      },
      props.label
    ),
    _react2['default'].createElement('input', _extends({}, props, { style: stylesInput })),
    _react2['default'].createElement('style', {
      dangerouslySetInnerHTML: {
        __html: 'input::placeholder { color: #bbb; font-size: inherit; }'
      }
    })
  );
};