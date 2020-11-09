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
      verbose = config && config.verbose,
      silent = config && config.silent;

  if (verbose) {
    console.log('Typeface: ', typeface);
    console.log('Color: ', color);
  } // If he tries to input an invalid typeface


  if (typeface !== '' && fonts[typeface] === -1) throw new Error('INVALID_TYPEFACE');
  var font = fonts[typeface] || fonts[Object.keys(fonts)[randomInt(Object.keys(fonts).length)]];
  var output = (0, _sentenceToAsciiAlphabet["default"])(sentence, font).map((0, _concatAsciiLetters["default"])(color)).map(_ramda["default"].join('\n')).fold();
  if (!silent) console.log(output);
  return output;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmb3JtUGhyYXNlIiwic2VudGVuY2UiLCJjb25maWciLCJ0eXBlZmFjZSIsImNvbG9yIiwidmVyYm9zZSIsInNpbGVudCIsImNvbnNvbGUiLCJsb2ciLCJmb250cyIsIkVycm9yIiwiZm9udCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJSIiwiam9pbiIsImZvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsR0FBM0IsQ0FBSjtBQUFBLENBQXJCOztBQUVlLFNBQVNJLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCQyxNQUE5QixFQUFzQztBQUNuRCxNQUFJLENBQUNELFFBQUwsRUFBZTtBQUVmLE1BQU1FLFFBQVEsR0FBR0QsTUFBTSxJQUFJQSxNQUFNLENBQUNDLFFBQWxDO0FBQUEsTUFDRUMsS0FBSyxHQUFHRixNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsS0FEM0I7QUFBQSxNQUVFQyxPQUFPLEdBQUdILE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxPQUY3QjtBQUFBLE1BR0VDLE1BQU0sR0FBR0osTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BSDVCOztBQUtBLE1BQUlELE9BQUosRUFBYTtBQUNYRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTCxRQUExQjtBQUNBSSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixLQUF2QjtBQUNELEdBWGtELENBWW5EOzs7QUFDQSxNQUFJRCxRQUFRLEtBQUssRUFBYixJQUFtQk0sS0FBSyxDQUFDTixRQUFELENBQUwsS0FBb0IsQ0FBQyxDQUE1QyxFQUNFLE1BQU0sSUFBSU8sS0FBSixDQUFVLGtCQUFWLENBQU47QUFFRixNQUFNQyxJQUFJLEdBQ1JGLEtBQUssQ0FBQ04sUUFBRCxDQUFMLElBQ0FNLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJkLFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CSyxNQUFwQixDQUE1QixDQUFELENBRlA7QUFJQSxNQUFNQyxNQUFNLEdBQUcseUNBQXdCZCxRQUF4QixFQUFrQ1UsSUFBbEMsRUFDVkssR0FEVSxDQUNOLG9DQUFtQlosS0FBbkIsQ0FETSxFQUVWWSxHQUZVLENBRU5DLGtCQUFFQyxJQUFGLENBQU8sSUFBUCxDQUZNLEVBR1ZDLElBSFUsRUFBZjtBQUtBLE1BQUcsQ0FBQ2IsTUFBSixFQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sTUFBWjtBQUVaLFNBQU9BLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJ3JhbWRhJztcbmltcG9ydCAqIGFzIGZvbnRzIGZyb20gJy4vZm9udHMnO1xuaW1wb3J0IHNlbnRlbmNlVG9Bc2NpaUFscGhhYmV0IGZyb20gJy4vc2VudGVuY2VUb0FzY2lpQWxwaGFiZXQnO1xuaW1wb3J0IGNvbmNhdEFzY2lpTGV0dGVycyBmcm9tICcuL2NvbmNhdEFzY2lpTGV0dGVycyc7XG5cbmNvbnN0IHJhbmRvbUludCA9IG1heCA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtUGhyYXNlKHNlbnRlbmNlLCBjb25maWcpIHtcbiAgaWYgKCFzZW50ZW5jZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHR5cGVmYWNlID0gY29uZmlnICYmIGNvbmZpZy50eXBlZmFjZSxcbiAgICBjb2xvciA9IGNvbmZpZyAmJiBjb25maWcuY29sb3IsXG4gICAgdmVyYm9zZSA9IGNvbmZpZyAmJiBjb25maWcudmVyYm9zZSxcbiAgICBzaWxlbnQgPSBjb25maWcgJiYgY29uZmlnLnNpbGVudDtcblxuICBpZiAodmVyYm9zZSkge1xuICAgIGNvbnNvbGUubG9nKCdUeXBlZmFjZTogJywgdHlwZWZhY2UpO1xuICAgIGNvbnNvbGUubG9nKCdDb2xvcjogJywgY29sb3IpO1xuICB9XG4gIC8vIElmIGhlIHRyaWVzIHRvIGlucHV0IGFuIGludmFsaWQgdHlwZWZhY2VcbiAgaWYgKHR5cGVmYWNlICE9PSAnJyAmJiBmb250c1t0eXBlZmFjZV0gPT09IC0xKVxuICAgIHRocm93IG5ldyBFcnJvcignSU5WQUxJRF9UWVBFRkFDRScpO1xuXG4gIGNvbnN0IGZvbnQgPVxuICAgIGZvbnRzW3R5cGVmYWNlXSB8fFxuICAgIGZvbnRzW09iamVjdC5rZXlzKGZvbnRzKVtyYW5kb21JbnQoT2JqZWN0LmtleXMoZm9udHMpLmxlbmd0aCldXTtcbiAgXG4gIGNvbnN0IG91dHB1dCA9IHNlbnRlbmNlVG9Bc2NpaUFscGhhYmV0KHNlbnRlbmNlLCBmb250KVxuICAgICAgLm1hcChjb25jYXRBc2NpaUxldHRlcnMoY29sb3IpKVxuICAgICAgLm1hcChSLmpvaW4oJ1xcbicpKVxuICAgICAgLmZvbGQoKTtcbiAgXG4gIGlmKCFzaWxlbnQpIGNvbnNvbGUubG9nKG91dHB1dClcbiAgXG4gIHJldHVybiBvdXRwdXQ7XG59XG4iXX0=