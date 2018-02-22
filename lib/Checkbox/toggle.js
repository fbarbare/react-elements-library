'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _toggle = require('./toggle.style');

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checked: false
    }, _this.onKeyPress = function (event) {
      if (event.key === ' ') {
        _this.checkbox.checked = !_this.state.checked;
        _testUtils.Simulate.change(_this.checkbox);
      }

      if (event.key === 'Enter' && _this.checkbox.form) {
        _testUtils.Simulate.submit(_this.checkbox.form);
      }
    }, _this.onChange = function (event) {
      _this.setState({ checked: _this.checkbox.checked });

      if (typeof _this.props.onChange === 'function') {
        _this.props.onChange(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.setState({ checked: this.checkbox.checked });
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            props = _objectWithoutProperties(_props, ['children']);

        var _state = this.state,
            checked = _state.checked,
            focused = _state.focused;


        return _react2['default'].createElement(
          'label',
          {
            tabIndex: '0',
            style: (0, _object2['default'])({}, _toggle2['default'].label, focused ? _toggle2['default'].labelFocused : {}),
            onKeyPress: this.onKeyPress
          },
          _react2['default'].createElement('input', _extends({}, props, {
            ref: function () {
              function ref(el) {
                return _this2.checkbox = el;
              }

              return ref;
            }(),
            type: 'checkbox',
            tabIndex: '-1',
            style: _toggle2['default'].checkbox,
            onChange: this.onChange
          })),
          _react2['default'].createElement(
            'span',
            { style: _toggle2['default'].container },
            _react2['default'].createElement('span', { style: (0, _object2['default'])({}, _toggle2['default'].rail, checked ? _toggle2['default'].railChecked : {}) }),
            _react2['default'].createElement('span', { style: (0, _object2['default'])({}, _toggle2['default'].ball, checked ? _toggle2['default'].ballChecked : {}) })
          ),
          children && _react2['default'].createElement(
            'div',
            { style: _toggle2['default'].text },
            children
          )
        );
      }

      return render;
    }()
  }]);

  return Toggle;
}(_react.PureComponent);

exports['default'] = Toggle;