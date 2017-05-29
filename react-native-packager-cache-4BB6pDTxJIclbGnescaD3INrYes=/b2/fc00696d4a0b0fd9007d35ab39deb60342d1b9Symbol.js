Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/novalnauw/ReactNativeApp/NovalFirst/node_modules/react-native-svg/elements/Symbol.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _extractViewBox = require('../lib/extract/extractViewBox');

var _extractViewBox2 = babelHelpers.interopRequireDefault(_extractViewBox);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _default = (_temp = _class = function (_Component) {
    babelHelpers.inherits(_default, _Component);

    function _default() {
        babelHelpers.classCallCheck(this, _default);
        return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            var props = this.props;


            return _react2.default.createElement(
                RNSVGSymbol,
                babelHelpers.extends({
                    name: props.id
                }, (0, _extractViewBox2.default)(props), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }),
                props.children
            );
        }
    }]);
    return _default;
}(_react.Component), _class.displayName = 'Symbol', _class.propTypes = {
    id: _react.PropTypes.string.isRequired,
    viewBox: _react.PropTypes.string,
    preserveAspectRatio: _react.PropTypes.string
}, _temp);

exports.default = _default;


var RNSVGSymbol = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.SymbolAttributes,
    uiViewClassName: 'RNSVGSymbol'
});