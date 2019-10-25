"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formPhrase;

var _ramda = _interopRequireDefault(require("ramda"));

var fonts = _interopRequireWildcard(require("./fonts"));

var _sentenceToAsciiAlphabet = _interopRequireDefault(require("./sentenceToAsciiAlphabet"));

var _concatAsciiLetters = _interopRequireDefault(require("./concatAsciiLetters"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var randomInt = function randomInt(max) {
  return Math.floor(Math.random() * max);
};

function formPhrase(sentence, config) {
  if (!sentence) return;
  var typeface = config && config.typeface,
      color = config && config.color,
      verbose = config && config.verbose;

  if (verbose) {
    console.log('Typeface: ', typeface);
    console.log('Color: ', color);
  } // If he tries to input an invalid typeface


  if (typeface !== '' && fonts[typeface] === -1) throw new Error('INVALID_TYPEFACE');
  var font = fonts[typeface] || fonts[Object.keys(fonts)[randomInt(Object.keys(fonts).length)]];
  console.log((0, _sentenceToAsciiAlphabet["default"])(sentence, font).map((0, _concatAsciiLetters["default"])(color)).map(_ramda["default"].join('\n')).fold());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmb3JtUGhyYXNlIiwic2VudGVuY2UiLCJjb25maWciLCJ0eXBlZmFjZSIsImNvbG9yIiwidmVyYm9zZSIsImNvbnNvbGUiLCJsb2ciLCJmb250cyIsIkVycm9yIiwiZm9udCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXAiLCJSIiwiam9pbiIsImZvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsR0FBM0IsQ0FBSjtBQUFBLENBQXJCOztBQUVlLFNBQVNJLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxNQUE5QixFQUFzQztBQUNuRCxNQUFJLENBQUNELFFBQUwsRUFBZTtBQUVmLE1BQU1FLFFBQVEsR0FBR0QsTUFBTSxJQUFJQSxNQUFNLENBQUNDLFFBQWxDO0FBQUEsTUFDU0MsS0FBSyxHQUFHRixNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsS0FEbEM7QUFBQSxNQUVPQyxPQUFPLEdBQUdILE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxPQUZsQzs7QUFJQSxNQUFJQSxPQUFKLEVBQWE7QUFDWEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkosUUFBMUI7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsS0FBdkI7QUFDRCxHQVZrRCxDQVduRDs7O0FBQ0EsTUFBSUQsUUFBUSxLQUFLLEVBQWIsSUFBbUJLLEtBQUssQ0FBQ0wsUUFBRCxDQUFMLEtBQW9CLENBQUMsQ0FBNUMsRUFBK0MsTUFBTSxJQUFJTSxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUUvQyxNQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0wsUUFBRCxDQUFMLElBQW1CSyxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CYixTQUFTLENBQUNnQixNQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBWixFQUFtQkssTUFBcEIsQ0FBNUIsQ0FBRCxDQUFyQztBQUVBUCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBd0JOLFFBQXhCLEVBQWtDUyxJQUFsQyxFQUNUSSxHQURTLENBQ0wsb0NBQW1CVixLQUFuQixDQURLLEVBRVRVLEdBRlMsQ0FFTEMsa0JBQUVDLElBQUYsQ0FBTyxJQUFQLENBRkssRUFHVEMsSUFIUyxFQUFaO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIGZvbnRzIGZyb20gJy4vZm9udHMnXG5pbXBvcnQgc2VudGVuY2VUb0FzY2lpQWxwaGFiZXQgZnJvbSAnLi9zZW50ZW5jZVRvQXNjaWlBbHBoYWJldCdcbmltcG9ydCBjb25jYXRBc2NpaUxldHRlcnMgZnJvbSAnLi9jb25jYXRBc2NpaUxldHRlcnMnXG5cbmNvbnN0IHJhbmRvbUludCA9IG1heCA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1QaHJhc2Uoc2VudGVuY2UsIGNvbmZpZykge1xuICBpZiAoIXNlbnRlbmNlKSByZXR1cm5cblxuICBjb25zdCB0eXBlZmFjZSA9IGNvbmZpZyAmJiBjb25maWcudHlwZWZhY2UsXG4gICAgICAgICAgIGNvbG9yID0gY29uZmlnICYmIGNvbmZpZy5jb2xvcixcbiAgICAgICAgIHZlcmJvc2UgPSBjb25maWcgJiYgY29uZmlnLnZlcmJvc2VcblxuICBpZiAodmVyYm9zZSkge1xuICAgIGNvbnNvbGUubG9nKCdUeXBlZmFjZTogJywgdHlwZWZhY2UpXG4gICAgY29uc29sZS5sb2coJ0NvbG9yOiAnLCBjb2xvcilcbiAgfVxuICAvLyBJZiBoZSB0cmllcyB0byBpbnB1dCBhbiBpbnZhbGlkIHR5cGVmYWNlXG4gIGlmICh0eXBlZmFjZSAhPT0gJycgJiYgZm9udHNbdHlwZWZhY2VdID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJTlZBTElEX1RZUEVGQUNFJylcblxuICBjb25zdCBmb250ID0gZm9udHNbdHlwZWZhY2VdIHx8IGZvbnRzW09iamVjdC5rZXlzKGZvbnRzKVtyYW5kb21JbnQoT2JqZWN0LmtleXMoZm9udHMpLmxlbmd0aCldXVxuXG4gIGNvbnNvbGUubG9nKHNlbnRlbmNlVG9Bc2NpaUFscGhhYmV0KHNlbnRlbmNlLCBmb250KVxuICAgIC5tYXAoY29uY2F0QXNjaWlMZXR0ZXJzKGNvbG9yKSlcbiAgICAubWFwKFIuam9pbignXFxuJykpXG4gICAgLmZvbGQoKSlcbn1cbiJdfQ==