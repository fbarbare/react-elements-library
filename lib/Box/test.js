'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('Box component', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      config: {
        boxBg: 'red',
        boxShadow: false
      }
    };
  });

  it('renders its children', function () {
    var renderedBox = (0, _enzyme.shallow)(_react2['default'].createElement(
      _index2['default'],
      props,
      'some text'
    ));

    expect(renderedBox.contains('some text')).toEqual(true);
  });

  it('renders with the given background color', function () {
    var renderedBox = (0, _enzyme.shallow)(_react2['default'].createElement(_index2['default'], props));

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'hidden'
    });
  });

  it('renders with a box shadow', function () {
    props.config.boxShadow = true;
    var renderedBox = (0, _enzyme.shallow)(_react2['default'].createElement(_index2['default'], props));

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    });
  });

  it('can enforce the box shadow to show', function () {
    props.config.boxShadow = false;
    var renderedBox = (0, _enzyme.shallow)(_react2['default'].createElement(_index2['default'], _extends({}, props, { boxShadow: true })));

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    });
  });

  it('can enforce the box shadow not toshow', function () {
    props.config.boxShadow = true;
    var renderedBox = (0, _enzyme.shallow)(_react2['default'].createElement(_index2['default'], _extends({}, props, { boxShadow: false })));

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'hidden'
    });
  });

  it('disables the overflow', function () {
    props.overflow = false;
    var renderedBox = (0, _enzyme.shallow)(_react2['default'].createElement(_index2['default'], props));

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'initial'
    });
  });
});