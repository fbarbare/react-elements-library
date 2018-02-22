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

var _reactRouterDom = require('react-router-dom');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.toggleHover = function () {
      _this.setState({ active: !_this.state.active });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.buttonWrapper.addEventListener('mouseleave', this.toggleHover);
        this.buttonWrapper.addEventListener('mouseenter', this.toggleHover);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.buttonWrapper.removeEventListener('mouseleave', this.toggleHover);
        this.buttonWrapper.removeEventListener('mouseenter', this.toggleHover);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            config = _props.config,
            size = _props.size,
            props = _objectWithoutProperties(_props, ['children', 'config', 'size']);

        var buttonTemplate = config.buttonTemplate,
            buttonColor1 = config.buttonColor1,
            buttonColor2 = config.buttonColor2;

        var Component = !!props.to ? _reactRouterDom.Link : 'button';
        var style = _style2['default'].button;

        switch (size) {
          case 'small':
            style = (0, _object2['default'])({}, style, _style2['default'].buttonSmall);
            break;
          case 'big':
            style = (0, _object2['default'])({}, style, _style2['default'].buttonBig);
            break;
          default:
            style = (0, _object2['default'])({}, style, _style2['default'].buttonMedium);
        }
        switch (buttonTemplate) {
          case 'border':
            if (this.state.active) {
              style = (0, _object2['default'])({}, style, {
                color: buttonColor2,
                borderColor: buttonColor1,
                backgroundColor: buttonColor1
              });
            } else {
              style = (0, _object2['default'])({}, style, {
                color: buttonColor1,
                borderColor: buttonColor1,
                backgroundColor: buttonColor2
              });
            }
            break;
          case 'full':
            style = (0, _object2['default'])({}, style, {
              color: buttonColor2,
              backgroundColor: buttonColor1
            });

            if (this.state.active) style.opacity = 0.7;
            break;
          default:
            break;
        }

        if (props.disabled) {
          style = (0, _object2['default'])({}, style, _style2['default'].buttonDisabled);
        }

        return _react2['default'].createElement(
          'span',
          { ref: function () {
              function ref(el) {
                return _this2.buttonWrapper = el;
              }

              return ref;
            }() },
          _react2['default'].createElement(
            Component,
            _extends({}, props, { className: '' + size, style: style }),
            children
          )
        );
      }

      return render;
    }()
  }]);

  return Button;
}(_react.PureComponent);

exports['default'] = Button;