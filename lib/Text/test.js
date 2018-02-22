'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('Filed component', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      config: {
        inputColor1: 'blue',
        inputColor2: 'red'
      }
    };
  });

  it('should render the input with the right type', function () {
    props.type = 'email';
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(field.find('input').props()).toHaveProperty('type', 'email');
  });

  it('should render the input with the right name', function () {
    props.name = 'test-details';
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(field.find('input').props()).toHaveProperty('name', 'test-details');
  });

  it('should render the input with the right placeholder', function () {
    props.placeholder = 'test';
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(field.find('input').props()).toHaveProperty('placeholder', 'test');
  });

  it('should render the input with the right styles', function () {
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(field.find('input').props().style).toEqual(expect.objectContaining({
      borderColor: 'blue',
      color: 'red'
    }));
  });

  it('should show label if label is passed as a prop', function () {
    props.label = 'test';
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(field.find('label').length).toBe(1);
  });

  it('should not show label if label is not passed as a prop', function () {
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    expect(field.find('label').length).toBe(0);
  });

  it('should call onChange function if passed', function () {
    var callOnChange = jest.fn();
    props.onChange = callOnChange;
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    field.find('input').simulate('change');

    expect(callOnChange).toHaveBeenCalledTimes(1);
  });

  it('should call onChange function twice if function called twice', function () {
    var callOnChange = jest.fn();
    props.onChange = callOnChange;
    var field = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], props));

    field.find('input').simulate('change');
    field.find('input').simulate('change');

    expect(callOnChange).toHaveBeenCalledTimes(2);
  });
});