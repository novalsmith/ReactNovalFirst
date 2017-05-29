Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADDRESSES = exports.EMAILS = exports.PHONE_NUMBERS = undefined;
exports.getContactsAsync = getContactsAsync;

var _reactNative = require('react-native');

var DEFAULT_PAGE_SIZE = 100;

function getContactsAsync() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === undefined ? DEFAULT_PAGE_SIZE : _ref$pageSize,
      _ref$pageOffset = _ref.pageOffset,
      pageOffset = _ref$pageOffset === undefined ? 0 : _ref$pageOffset,
      _ref$fields = _ref.fields,
      fields = _ref$fields === undefined ? [] : _ref$fields;

  return regeneratorRuntime.async(function getContactsAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentContacts.getContactsAsync({
            pageSize: pageSize,
            pageOffset: pageOffset,
            fields: fields
          }));

        case 2:
          return _context.abrupt('return', _context.sent);

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

var PHONE_NUMBERS = exports.PHONE_NUMBERS = 'phoneNumbers';
var EMAILS = exports.EMAILS = 'emails';
var ADDRESSES = exports.ADDRESSES = 'addresses';