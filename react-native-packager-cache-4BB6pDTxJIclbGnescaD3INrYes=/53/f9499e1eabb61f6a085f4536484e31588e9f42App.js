Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/novalnauw/ReactNativeApp/NovalFirst/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _List = require('./List');

var _List2 = babelHelpers.interopRequireDefault(_List);

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App(props) {
    babelHelpers.classCallCheck(this, App);

    var _this = babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.add = function () {
      var _this$state = _this.state,
          text = _this$state.text,
          todos = _this$state.todos;

      if (!text) return;

      todos.push(text);

      _this.setState({
        todos: todos,
        text: ''
      });
    };

    _this.remove = function (todo) {
      var todos = _this.state.todos;

      todoWillDelete = todos.indexOf(todo);

      todos.splice(todoWillDelete, 1);

      _this.setState({
        todos: todos
      });
    };

    _this.state = {
      text: '',
      todos: []
    };
    return _this;
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.ScrollView,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          _react2.default.createElement(_reactNative.View, { style: styles.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
          _react2.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            'Facebook Circle Sby React Native'
          ),
          _react2.default.createElement(_reactNative.View, { style: styles.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }),
          _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              style: styles.textInput,
              onChangeText: function onChangeText(text) {
                return _this2.setState({ text: text });
              },
              value: this.state.text,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            }),
            _react2.default.createElement(_reactNative.Button, {
              title: 'Execute',
              color: '#208de6',
              onPress: this.add,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            })
          ),
          _react2.default.createElement(_reactNative.View, { style: styles.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }),
          this.state.todos.length > 0 && _react2.default.createElement(_List2.default, { items: this.state.todos, onRemove: this.remove, __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          })
        )
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {},
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  spacer: {
    left: 0,
    right: 0,
    height: 30
  }
});