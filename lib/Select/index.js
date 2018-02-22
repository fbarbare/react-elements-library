'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports['default'] = function (_ref) {
  var config = _ref.config,
      options = _ref.options,
      label = _ref.label,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ['config', 'options', 'label', 'placeholder']);

  var stylesColor = {
    borderTopColor: config.inputColor1,
    borderBottomColor: config.inputColor1,
    borderLeftColor: config.inputColor1,
    borderRightColor: config.inputColor1,
    color: config.inputColor2
  };

  var stylesSelect = {};

  switch (config.inputTemplate) {
    case 'full-border':
      stylesSelect = (0, _object2['default'])({}, _style2['default'].select, _style2['default'].fullBorderSelect, props.disabled ? _style2['default'].selectDisabled : {}, stylesColor);
      break;

    case 'border-bottom':
      stylesSelect = (0, _object2['default'])({}, _style2['default'].select, _style2['default'].borderBottomSelect, props.disabled ? _style2['default'].selectDisabled : {}, stylesColor);
      break;

    default:
      stylesSelect = (0, _object2['default'])({}, stylesColor);
      break;
  }

  if (typeof options === 'number') {
    var numberOptions = options > 0 ? options + 1 : 0;

    options = [];
    while (options.length !== numberOptions) {
      options.push({ value: options.length });
    }
  }

  return _react2['default'].createElement(
    'div',
    {
      className: 'select__' + config.inputTemplate,
      style: (0, _object2['default'])({}, _style2['default'].wrapper, stylesColor)
    },
    _react2['default'].createElement(
      'label',
      null,
      label && _react2['default'].createElement(
        'div',
        { style: (0, _object2['default'])({}, _style2['default'].label, stylesColor) },
        label
      ),
      _react2['default'].createElement(
        'div',
        { style: _style2['default'].selectWrapper },
        _react2['default'].createElement(
          'span',
          { style: (0, _object2['default'])({}, _style2['default'].selectArrow, { color: config.inputColor1 }), 'aria-hidden': 'true' },
          _react2['default'].createElement(_Icon2['default'], { type: 'FaAngleDown' })
        ),
        _react2['default'].createElement(
          'select',
          _extends({}, props, { style: stylesSelect }),
          placeholder && _react2['default'].createElement(
            'option',
            { value: '', disabled: true, defaultValue: true },
            placeholder
          ),
          options.map(function (_ref2) {
            var value = _ref2.value,
                text = _ref2.text,
                _ref2$defaultValue = _ref2.defaultValue,
                defaultValue = _ref2$defaultValue === undefined ? false : _ref2$defaultValue;
            return _react2['default'].createElement(
              'option',
              {
                key: 'select-' + props.name + '-' + value,
                value: value,
                defaultValue: defaultValue === props.defaultValue
              },
              text || value
            );
          })
        )
      )
    )
  );
};