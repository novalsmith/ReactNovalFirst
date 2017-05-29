Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/novalnauw/ReactNativeApp/NovalFirst/List.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        this.props.items.map(function (todo, idx) {
          return _react2.default.createElement(
            _reactNative.TouchableHighlight,
            {
              key: idx,
              onPress: function onPress() {
                return _this2.props.onRemove(todo);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.todo, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              '- ',
              todo
            )
          );
        })
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;


var styles = _reactNative.StyleSheet.create({
  todo: {
    marginBottom: 20
  }
});