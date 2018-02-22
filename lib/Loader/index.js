'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var keyframe = '\n@-webkit-keyframes Loader_Rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg)\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg)\n  }\n}\n@keyframes Loader_Rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform:rotate(0deg)\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform:rotate(360deg)\n  }\n}';

exports['default'] = function (_ref) {
  var children = _ref.children;

  return _react2['default'].createElement(
    'div',
    { style: _style2['default'].overlay },
    _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: keyframe } }),
    _react2['default'].createElement(
      'div',
      { style: _style2['default'].container },
      _react2['default'].createElement(
        'div',
        { style: _style2['default'].circleContainer },
        _react2['default'].createElement('div', { style: _style2['default'].circle }),
        children && _react2['default'].createElement(
          'div',
          { style: _style2['default'].text },
          children
        )
      )
    )
  );
};