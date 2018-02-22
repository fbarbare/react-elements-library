'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('Checkbox component', function () {
  it('should render label within the checkbox if children passed', function () {
    var checkbox = (0, _enzyme.mount)(_react2['default'].createElement(
      _index2['default'],
      null,
      'Test'
    ));

    expect(checkbox.find('span').text()).toBe('Test');
  });

  it('should not render label within the checkbox if children passed', function () {
    var checkbox = (0, _enzyme.mount)(_react2['default'].createElement(_index2['default'], null));

    expect(checkbox.find('.checkbox__label').length).toBe(0);
  });

  it('should be required if specified', function () {
    var checkbox = (0, _enzyme.mount)(_react2['default'].createElement(
      _index2['default'],
      { required: true },
      'Test Text'
    ));

    expect(checkbox.find('input').props()).toHaveProperty('required', true);
  });
});