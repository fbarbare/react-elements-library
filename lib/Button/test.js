'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('Button component', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      config: {
        buttonColor1: 'red',
        buttonColor2: 'white'
      }
    };
  });

  it('renders its text', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(
      _index2['default'],
      props,
      'some text'
    ));

    expect(renderedButton.contains('some text')).toEqual(true);
  });

  it('renders a button when no link is given', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(renderedButton.find('button').name()).toEqual('button');
  });

  it('renders a link when a link is given', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(
      _reactRouterDom.MemoryRouter,
      null,
      _react2['default'].createElement(_index2['default'], _extends({}, props, { to: 'someLink' }))
    ));
    expect(renderedButton.find('Link').name()).toEqual('Link');
  });

  it('gives a type to the button', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], _extends({}, props, { type: 'any type' })));

    expect(renderedButton.find('button').props().type).toEqual('any type');
  });

  it('does not render the button as block by default', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(renderedButton.find('button').hasClass('block')).toEqual(false);
  });

  it('triggers the click event when clicked', function () {
    var onClick = jest.fn();
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], _extends({}, props, { onClick: onClick })));

    renderedButton.find('button').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('renders a medium button by default', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(renderedButton.find('button').props().style).toEqual(expect.objectContaining({
      fontSize: '1em',
      margin: '5px auto',
      padding: '10px 20px'
    }));
  });
  it('renders a button as small when specified', function () {
    var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], _extends({}, props, { size: 'small' })));

    expect(renderedButton.find('button').props().style).toEqual(expect.objectContaining({
      fontSize: '0.8em',
      margin: '3px auto',
      padding: '5px 10px'
    }));
  });

  describe('when the template is border', function () {
    beforeEach(function () {
      props.config.buttonTemplate = 'border';
    });

    it('adds the right styles', function () {
      var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

      expect(renderedButton.find('button').props().style).toEqual(expect.objectContaining({
        backgroundColor: 'white',
        borderColor: 'red',
        color: 'red'
      }));
    });

    it('adds the right styles on its hover state', function () {
      var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

      renderedButton.setState({ active: true });

      expect(renderedButton.find('button').props().style).toEqual(expect.objectContaining({
        backgroundColor: 'red',
        borderColor: 'red',
        color: 'white'
      }));
    });
  });

  describe('when the template is full', function () {
    beforeEach(function () {
      props.config.buttonTemplate = 'full';
    });

    it('adds the right styles', function () {
      var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

      expect(renderedButton.find('button').props().style).toEqual(expect.objectContaining({
        backgroundColor: 'red',
        color: 'white'
      }));
    });

    it('adds the right styles on its hover state', function () {
      var renderedButton = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

      renderedButton.setState({ active: true });

      expect(renderedButton.find('button').props().style).toEqual(expect.objectContaining({
        backgroundColor: 'red',
        color: 'white',
        opacity: 0.7
      }));
    });
  });
});