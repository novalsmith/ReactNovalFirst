Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _Permissions = require('./Permissions');

var Permissions = babelHelpers.interopRequireWildcard(_Permissions);

var _invariant = require('invariant');

var _invariant2 = babelHelpers.interopRequireDefault(_invariant);

var LocationEventEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.ExponentLocation);
var ExponentLocation = _reactNative.NativeModules.ExponentLocation;


var nextWatchId = 0;
function _getNextWatchId() {
  nextWatchId++;
  return nextWatchId;
}
function _getCurrentWatchId() {
  return nextWatchId;
}

var watchCallbacks = {};
var deviceEventSubscription = void 0;

function getCurrentPositionAsync(options) {
  var _this = this;

  if (_reactNative.Platform.OS === 'android') {
    return ExponentLocation.getCurrentPositionAsync(options);
  }

  return new Promise(function _callee(resolve, reject) {
    var done, subscription;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            done = false;
            subscription = void 0;
            _context.next = 5;
            return regeneratorRuntime.awrap(watchPositionAsync(options, function (location) {
              if (!done) {
                resolve(location);
                done = true;
              }
              subscription.remove();
            }));

          case 5:
            subscription = _context.sent;

            if (done) {
              subscription.remove();
            }
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            reject(_context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, null, _this, [[0, 9]]);
  });
}

function _maybeInitializeEmitterSubscription() {
  if (!deviceEventSubscription) {
    deviceEventSubscription = LocationEventEmitter.addListener('Exponent.locationChanged', function (_ref) {
      var watchId = _ref.watchId,
          location = _ref.location;

      var callback = watchCallbacks[watchId];
      if (callback) {
        callback(location);
      } else {
        ExponentLocation.removeWatchAsync(watchId);
      }
    });
  }
}

function _askPermissionForWatchAsync(success, error, options, watchId) {
  var _ref2, status;

  return regeneratorRuntime.async(function _askPermissionForWatchAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Permissions.askAsync(Permissions.LOCATION));

        case 2:
          _ref2 = _context2.sent;
          status = _ref2.status;

          if (status === 'granted') {
            ExponentLocation.watchPositionImplAsync(watchId, options);
          } else {
            _removeWatcher(watchId);
            error({ watchId: watchId, message: 'No permission to access location' });
          }

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}

function watchPosition(success, error, options) {
  _maybeInitializeEmitterSubscription();

  var watchId = _getNextWatchId();
  watchCallbacks[watchId] = success;
  _askPermissionForWatchAsync(success, error, options, watchId);

  return watchId;
}

function watchPositionAsync(options, callback) {
  var watchId;
  return regeneratorRuntime.async(function watchPositionAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _maybeInitializeEmitterSubscription();

          watchId = _getNextWatchId();

          watchCallbacks[watchId] = callback;
          _context3.next = 5;
          return regeneratorRuntime.awrap(ExponentLocation.watchPositionImplAsync(watchId, options));

        case 5:
          return _context3.abrupt('return', {
            remove: function remove() {
              _removeWatcher(watchId);
            }
          });

        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, null, this);
}

function clearWatch(watchId) {
  _removeWatcher(watchId);
}

function _removeWatcher(watchId) {
  if (!watchCallbacks[watchId]) {
    return;
  }

  ExponentLocation.removeWatchAsync(watchId);
  delete watchCallbacks[watchId];
  if (Object.keys(watchCallbacks).length === 0) {
    LocationEventEmitter.removeSubscription(deviceEventSubscription);
    deviceEventSubscription = null;
  }
}

function getCurrentPosition(success, error, options) {
  (0, _invariant2.default)(typeof success === 'function', 'Must provide a valid success callback.');
  _getCurrentPositionAsyncWrapper(success, error, options);
}

function _getCurrentPositionAsyncWrapper(success, error, options) {
  var _ref3, status, result;

  return regeneratorRuntime.async(function _getCurrentPositionAsyncWrapper$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Permissions.askAsync(Permissions.LOCATION));

        case 3:
          _ref3 = _context4.sent;
          status = _ref3.status;

          if (!(status !== 'granted')) {
            _context4.next = 7;
            break;
          }

          throw new Error('Permission to access location not granted. User must now enable it manually in settings');

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(Location.getCurrentPositionAsync(options));

        case 9:
          result = _context4.sent;

          success(result);
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4['catch'](0);

          error(_context4.t0);

        case 16:
        case 'end':
          return _context4.stop();
      }
    }
  }, null, this, [[0, 13]]);
}

var _polyfill = {
  getCurrentPosition: getCurrentPosition,
  watchPosition: watchPosition,
  clearWatch: clearWatch,

  stopObserving: function stopObserving() {}
};
window.navigator.geolocation = _polyfill;

var Location = {
  getCurrentPositionAsync: getCurrentPositionAsync,
  watchPositionAsync: watchPositionAsync,

  EventEmitter: LocationEventEmitter,
  _polyfill: _polyfill,
  _getCurrentWatchId: _getCurrentWatchId
};

exports.default = Location;