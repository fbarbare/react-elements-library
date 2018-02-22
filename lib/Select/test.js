'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Select component', function () {
  var _config;

  var config = (_config = {
    inputColor1: 'red'
  }, _defineProperty(_config, 'inputColor1', 'white'), _defineProperty(_config, 'inputTemplate', 'full-border'), _config);
  var renderedComponent = void 0;

  afterEach(function () {
    renderedComponent.unmount();
  });

  it('should render select with correct template', function () {
    renderedComponent = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], { config: config, defaultValue: 2, options: 6 }));

    expect(renderedComponent.find('select').props().style).toEqual(expect.objectContaining({
      borderColor: 'inherit',
      borderTopColor: 'white',
      borderBottomColor: 'white',
      borderLeftColor: 'white',
      borderRightColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px'
    }));
  });

  describe('display label', function () {
    it('should show label if label is passed as a prop', function () {
      renderedComponent = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], { config: config, defaultValue: 2, options: 6, label: 'test test' }));

      expect(renderedComponent.find('label > div').length).toEqual(2);
      expect(renderedComponent.find('label > div').at(0).text()).toEqual('test test');
    });

    it('should not show label if label is not passed as a prop', function () {
      renderedComponent = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], { config: config, defaultValue: 2, options: 6 }));

      expect(renderedComponent.find('label > div').length).toBe(1);
    });
  });

  describe('have css', function () {
    var config = {
      inputColor1: 'blue',
      inputColor2: 'red'
    };

    it('should show label if label is passed as a prop', function () {
      renderedComponent = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], { config: config, defaultValue: 2, options: 6 }));

      expect(renderedComponent.find('select').props()).toHaveProperty('style', {
        borderBottomColor: 'blue',
        borderLeftColor: 'blue',
        borderRightColor: 'blue',
        borderTopColor: 'blue',
        color: 'red'
      });
    });
  });

  describe('on change', function () {
    it('should call the onChange function on value change', function () {
      var callOnChange = jest.fn();
      renderedComponent = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], { config: config, value: 1, options: 6, onChange: callOnChange }));

      renderedComponent.find('select').simulate('change', { target: { value: '2' } });
      expect(callOnChange).toHaveBeenCalledTimes(1);
    });
  });
});