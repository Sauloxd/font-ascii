'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formPhrase;

var _lodash = require('lodash');

var _fonts = require('./fonts');

var fonts = _interopRequireWildcard(_fonts);

var _sentenceToAsciiAlphabet = require('./sentenceToAsciiAlphabet');

var _sentenceToAsciiAlphabet2 = _interopRequireDefault(_sentenceToAsciiAlphabet);

var _concatAsciiLetters = require('./concatAsciiLetters');

var _concatAsciiLetters2 = _interopRequireDefault(_concatAsciiLetters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/
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

  //Otherwise use sample
  const font = fonts[typeface] || (0, _lodash.sample)(fonts);
  console.log((0, _concatAsciiLetters2.default)((0, _sentenceToAsciiAlphabet2.default)(sentence, font), color).join('\n'));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmb3JtUGhyYXNlIiwiZm9udHMiLCJzZW50ZW5jZSIsImNvbmZpZyIsInR5cGVmYWNlIiwiY29sb3IiLCJ2ZXJib3NlIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiZm9udCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQU13QkEsVTs7QUFOeEI7O0FBQ0E7O0lBQVlDLEs7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ2UsU0FBU0QsVUFBVCxDQUFvQkUsUUFBcEIsRUFBOEJDLE1BQTlCLEVBQXNDO0FBQ25ELE1BQUksQ0FBQ0QsUUFBTCxFQUFlOztBQUVmLFFBQU1FLFdBQVdELFVBQVVBLE9BQU9DLFFBQWxDO0FBQUEsUUFDRUMsUUFBUUYsVUFBVUEsT0FBT0UsS0FEM0I7QUFBQSxRQUVFQyxVQUFVSCxVQUFVQSxPQUFPRyxPQUY3Qjs7QUFJQSxNQUFJQSxPQUFKLEVBQWE7QUFDWEMsWUFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJKLFFBQTFCO0FBQ0FHLFlBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxLQUF2QjtBQUNEO0FBQ0Q7QUFDQSxNQUFJRCxhQUFhLEVBQWIsSUFBbUJILE1BQU1HLFFBQU4sTUFBb0IsQ0FBQyxDQUE1QyxFQUErQyxNQUFNLElBQUlLLEtBQUosQ0FBVSxrQkFBVixDQUFOOztBQUUvQztBQUNBLFFBQU1DLE9BQU9ULE1BQU1HLFFBQU4sS0FBbUIsb0JBQU9ILEtBQVAsQ0FBaEM7QUFDQU0sVUFBUUMsR0FBUixDQUFZLGtDQUFtQix1Q0FBd0JOLFFBQXhCLEVBQWtDUSxJQUFsQyxDQUFuQixFQUE0REwsS0FBNUQsRUFBbUVNLElBQW5FLENBQXdFLElBQXhFLENBQVo7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhbXBsZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIGZvbnRzIGZyb20gJy4vZm9udHMnXG5pbXBvcnQgc2VudGVuY2VUb0FzY2lpQWxwaGFiZXQgZnJvbSAnLi9zZW50ZW5jZVRvQXNjaWlBbHBoYWJldCdcbmltcG9ydCBjb25jYXRBc2NpaUxldHRlcnMgZnJvbSAnLi9jb25jYXRBc2NpaUxldHRlcnMnXG4vL1xuLy9BU0NJSSBDT0RFUyBodHRwczovL3dlYnNpdGVidWlsZGVycy5jb20vdG9vbHMvaHRtbC1jb2Rlcy9hLXovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtUGhyYXNlKHNlbnRlbmNlLCBjb25maWcpIHtcbiAgaWYgKCFzZW50ZW5jZSkgcmV0dXJuXG5cbiAgY29uc3QgdHlwZWZhY2UgPSBjb25maWcgJiYgY29uZmlnLnR5cGVmYWNlLFxuICAgIGNvbG9yID0gY29uZmlnICYmIGNvbmZpZy5jb2xvcixcbiAgICB2ZXJib3NlID0gY29uZmlnICYmIGNvbmZpZy52ZXJib3NlXG5cbiAgaWYgKHZlcmJvc2UpIHtcbiAgICBjb25zb2xlLmxvZygnVHlwZWZhY2U6ICcsIHR5cGVmYWNlKVxuICAgIGNvbnNvbGUubG9nKCdDb2xvcjogJywgY29sb3IpXG4gIH1cbiAgLy8gSWYgaGUgdHJpZXMgdG8gaW5wdXQgYW4gaW52YWxpZCB0eXBlZmFjZVxuICBpZiAodHlwZWZhY2UgIT09ICcnICYmIGZvbnRzW3R5cGVmYWNlXSA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSU5WQUxJRF9UWVBFRkFDRScpXG5cbiAgLy9PdGhlcndpc2UgdXNlIHNhbXBsZVxuICBjb25zdCBmb250ID0gZm9udHNbdHlwZWZhY2VdIHx8IHNhbXBsZShmb250cylcbiAgY29uc29sZS5sb2coY29uY2F0QXNjaWlMZXR0ZXJzKHNlbnRlbmNlVG9Bc2NpaUFscGhhYmV0KHNlbnRlbmNlLCBmb250KSwgY29sb3IpLmpvaW4oJ1xcbicpKVxufVxuIl19