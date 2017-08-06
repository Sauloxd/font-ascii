'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formPhrase;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _fonts = require('./fonts');

var fonts = _interopRequireWildcard(_fonts);

var _sentenceToAsciiAlphabet = require('./sentenceToAsciiAlphabet');

var _sentenceToAsciiAlphabet2 = _interopRequireDefault(_sentenceToAsciiAlphabet);

var _concatAsciiLetters = require('./concatAsciiLetters');

var _concatAsciiLetters2 = _interopRequireDefault(_concatAsciiLetters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const randomInt = max => Math.floor(Math.random() * max);

function formPhrase(sentence, config) {
  if (!sentence) return;

  const typeface = config && config.typeface,
        color = config && config.color,
        verbose = config && config.verbose;

  if (verbose) {
    console.log('Typeface: ', typeface);
    console.log('Color: ', color);
  }
  // If he tries to input an invalid typeface
  if (typeface !== '' && fonts[typeface] === -1) throw new Error('INVALID_TYPEFACE');

  const font = fonts[typeface] || fonts[Object.keys(fonts)[randomInt(Object.keys(fonts).length)]];

  console.log((0, _sentenceToAsciiAlphabet2.default)(sentence, font).map((0, _concatAsciiLetters2.default)(color)).map(_ramda2.default.join('\n')).fold());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmb3JtUGhyYXNlIiwiZm9udHMiLCJyYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZW50ZW5jZSIsImNvbmZpZyIsInR5cGVmYWNlIiwiY29sb3IiLCJ2ZXJib3NlIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiZm9udCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXAiLCJqb2luIiwiZm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBT3dCQSxVOztBQVB4Qjs7OztBQUNBOztJQUFZQyxLOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUMsWUFBWUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCSCxHQUEzQixDQUF6Qjs7QUFFZSxTQUFTSCxVQUFULENBQW9CTyxRQUFwQixFQUE4QkMsTUFBOUIsRUFBc0M7QUFDbkQsTUFBSSxDQUFDRCxRQUFMLEVBQWU7O0FBRWYsUUFBTUUsV0FBV0QsVUFBVUEsT0FBT0MsUUFBbEM7QUFBQSxRQUNTQyxRQUFRRixVQUFVQSxPQUFPRSxLQURsQztBQUFBLFFBRU9DLFVBQVVILFVBQVVBLE9BQU9HLE9BRmxDOztBQUlBLE1BQUlBLE9BQUosRUFBYTtBQUNYQyxZQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQkosUUFBMUI7QUFDQUcsWUFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJILEtBQXZCO0FBQ0Q7QUFDRDtBQUNBLE1BQUlELGFBQWEsRUFBYixJQUFtQlIsTUFBTVEsUUFBTixNQUFvQixDQUFDLENBQTVDLEVBQStDLE1BQU0sSUFBSUssS0FBSixDQUFVLGtCQUFWLENBQU47O0FBRS9DLFFBQU1DLE9BQU9kLE1BQU1RLFFBQU4sS0FBbUJSLE1BQU1lLE9BQU9DLElBQVAsQ0FBWWhCLEtBQVosRUFBbUJDLFVBQVVjLE9BQU9DLElBQVAsQ0FBWWhCLEtBQVosRUFBbUJpQixNQUE3QixDQUFuQixDQUFOLENBQWhDOztBQUVBTixVQUFRQyxHQUFSLENBQVksdUNBQXdCTixRQUF4QixFQUFrQ1EsSUFBbEMsRUFDVEksR0FEUyxDQUNMLGtDQUFtQlQsS0FBbkIsQ0FESyxFQUVUUyxHQUZTLENBRUwsZ0JBQUVDLElBQUYsQ0FBTyxJQUFQLENBRkssRUFHVEMsSUFIUyxFQUFaO0FBSUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIGZvbnRzIGZyb20gJy4vZm9udHMnXG5pbXBvcnQgc2VudGVuY2VUb0FzY2lpQWxwaGFiZXQgZnJvbSAnLi9zZW50ZW5jZVRvQXNjaWlBbHBoYWJldCdcbmltcG9ydCBjb25jYXRBc2NpaUxldHRlcnMgZnJvbSAnLi9jb25jYXRBc2NpaUxldHRlcnMnXG5cbmNvbnN0IHJhbmRvbUludCA9IG1heCA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1QaHJhc2Uoc2VudGVuY2UsIGNvbmZpZykge1xuICBpZiAoIXNlbnRlbmNlKSByZXR1cm5cblxuICBjb25zdCB0eXBlZmFjZSA9IGNvbmZpZyAmJiBjb25maWcudHlwZWZhY2UsXG4gICAgICAgICAgIGNvbG9yID0gY29uZmlnICYmIGNvbmZpZy5jb2xvcixcbiAgICAgICAgIHZlcmJvc2UgPSBjb25maWcgJiYgY29uZmlnLnZlcmJvc2VcblxuICBpZiAodmVyYm9zZSkge1xuICAgIGNvbnNvbGUubG9nKCdUeXBlZmFjZTogJywgdHlwZWZhY2UpXG4gICAgY29uc29sZS5sb2coJ0NvbG9yOiAnLCBjb2xvcilcbiAgfVxuICAvLyBJZiBoZSB0cmllcyB0byBpbnB1dCBhbiBpbnZhbGlkIHR5cGVmYWNlXG4gIGlmICh0eXBlZmFjZSAhPT0gJycgJiYgZm9udHNbdHlwZWZhY2VdID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJTlZBTElEX1RZUEVGQUNFJylcblxuICBjb25zdCBmb250ID0gZm9udHNbdHlwZWZhY2VdIHx8IGZvbnRzW09iamVjdC5rZXlzKGZvbnRzKVtyYW5kb21JbnQoT2JqZWN0LmtleXMoZm9udHMpLmxlbmd0aCldXVxuXG4gIGNvbnNvbGUubG9nKHNlbnRlbmNlVG9Bc2NpaUFscGhhYmV0KHNlbnRlbmNlLCBmb250KVxuICAgIC5tYXAoY29uY2F0QXNjaWlMZXR0ZXJzKGNvbG9yKSlcbiAgICAubWFwKFIuam9pbignXFxuJykpXG4gICAgLmZvbGQoKSlcbn1cbiJdfQ==