Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.touchableProps = exports.responderProps = exports.pathProps = exports.clipProps = exports.fontProps = exports.strokeProps = exports.fillProps = exports.numberProp = undefined;

var _react = require('react');

var _reactNative = require('react-native');

var numberProp = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);

var touchableProps = {
    disabled: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    onPressIn: _react.PropTypes.func,
    onPressOut: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func,
    delayPressIn: _react.PropTypes.number,
    delayPressOut: _react.PropTypes.number,
    delayLongPress: _react.PropTypes.number
};

var responderProps = [].concat(babelHelpers.toConsumableArray(Object.keys(_reactNative.PanResponder.create({}).panHandlers)), ['pointerEvents']).reduce(function (props, name) {
    props[name] = _react.PropTypes.func;
    return props;
}, {});

var fillProps = {
    fill: _react.PropTypes.string,
    fillOpacity: numberProp,
    fillRule: _react.PropTypes.oneOf(['evenodd', 'nonzero'])
};

var clipProps = {
    clipRule: _react.PropTypes.oneOf(['evenodd', 'nonzero']),
    clipPath: _react.PropTypes.string
};

var definationProps = {
    name: _react.PropTypes.string
};

var strokeProps = {
    stroke: _react.PropTypes.string,
    strokeWidth: numberProp,
    strokeOpacity: numberProp,
    strokeDasharray: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.number), _react.PropTypes.string]),
    strokeDashoffset: numberProp,
    strokeLinecap: _react.PropTypes.oneOf(['butt', 'square', 'round']),
    strokeLinejoin: _react.PropTypes.oneOf(['miter', 'bevel', 'round']),
    strokeMiterlimit: numberProp
};

var fontProps = {
    fontFamily: _react.PropTypes.string,
    fontSize: numberProp,
    fontWeight: numberProp,
    fontStyle: _react.PropTypes.string,
    font: _react.PropTypes.object
};

var transformProps = {
    scale: numberProp,
    scaleX: numberProp,
    scaleY: numberProp,
    rotate: numberProp,
    rotation: numberProp,
    translate: numberProp,
    translateX: numberProp,
    translateY: numberProp,
    x: numberProp,
    y: numberProp,
    origin: numberProp,
    originX: numberProp,
    originY: numberProp,
    skew: numberProp,
    skewX: numberProp,
    skewY: numberProp,
    transform: _react.PropTypes.object
};

var pathProps = babelHelpers.extends({}, fillProps, strokeProps, clipProps, transformProps, responderProps, touchableProps, definationProps);

exports.numberProp = numberProp;
exports.fillProps = fillProps;
exports.strokeProps = strokeProps;
exports.fontProps = fontProps;
exports.clipProps = clipProps;
exports.pathProps = pathProps;
exports.responderProps = responderProps;
exports.touchableProps = touchableProps;