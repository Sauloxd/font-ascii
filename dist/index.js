"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formPhrase;

var _ramda = _interopRequireDefault(require("ramda"));

var fonts = _interopRequireWildcard(require("./fonts"));

var _sentenceToAsciiAlphabet = _interopRequireDefault(require("./sentenceToAsciiAlphabet"));

var _concatAsciiLetters = _interopRequireDefault(require("./concatAsciiLetters"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmb3JtUGhyYXNlIiwic2VudGVuY2UiLCJjb25maWciLCJ0eXBlZmFjZSIsImNvbG9yIiwidmVyYm9zZSIsInNpbGVudCIsImNvbnNvbGUiLCJsb2ciLCJmb250cyIsIkVycm9yIiwiZm9udCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJSIiwiam9pbiIsImZvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEdBQUc7QUFBQSxTQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxHQUEzQixDQUFKO0FBQUEsQ0FBckI7O0FBRWUsU0FBU0ksVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEJDLE1BQTlCLEVBQXNDO0FBQ25ELE1BQUksQ0FBQ0QsUUFBTCxFQUFlO0FBRWYsTUFBTUUsUUFBUSxHQUFHRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsUUFBbEM7QUFBQSxNQUNFQyxLQUFLLEdBQUdGLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxLQUQzQjtBQUFBLE1BRUVDLE9BQU8sR0FBR0gsTUFBTSxJQUFJQSxNQUFNLENBQUNHLE9BRjdCO0FBQUEsTUFHRUMsTUFBTSxHQUFHSixNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksTUFINUI7O0FBS0EsTUFBSUQsT0FBSixFQUFhO0FBQ1hFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJMLFFBQTFCO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLEtBQXZCO0FBQ0QsR0FYa0QsQ0FZbkQ7OztBQUNBLE1BQUlELFFBQVEsS0FBSyxFQUFiLElBQW1CTSxLQUFLLENBQUNOLFFBQUQsQ0FBTCxLQUFvQixDQUFDLENBQTVDLEVBQ0UsTUFBTSxJQUFJTyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUVGLE1BQU1DLElBQUksR0FDUkYsS0FBSyxDQUFDTixRQUFELENBQUwsSUFDQU0sS0FBSyxDQUFDRyxNQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBWixFQUFtQmQsU0FBUyxDQUFDaUIsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLE1BQXBCLENBQTVCLENBQUQsQ0FGUDtBQUlBLE1BQU1DLE1BQU0sR0FBRyx5Q0FBd0JkLFFBQXhCLEVBQWtDVSxJQUFsQyxFQUNWSyxHQURVLENBQ04sb0NBQW1CWixLQUFuQixDQURNLEVBRVZZLEdBRlUsQ0FFTkMsa0JBQUVDLElBQUYsQ0FBTyxJQUFQLENBRk0sRUFHVkMsSUFIVSxFQUFmO0FBS0EsTUFBRyxDQUFDYixNQUFKLEVBQVlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxNQUFaO0FBRVosU0FBT0EsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAncmFtZGEnO1xuaW1wb3J0ICogYXMgZm9udHMgZnJvbSAnLi9mb250cyc7XG5pbXBvcnQgc2VudGVuY2VUb0FzY2lpQWxwaGFiZXQgZnJvbSAnLi9zZW50ZW5jZVRvQXNjaWlBbHBoYWJldCc7XG5pbXBvcnQgY29uY2F0QXNjaWlMZXR0ZXJzIGZyb20gJy4vY29uY2F0QXNjaWlMZXR0ZXJzJztcblxuY29uc3QgcmFuZG9tSW50ID0gbWF4ID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1QaHJhc2Uoc2VudGVuY2UsIGNvbmZpZykge1xuICBpZiAoIXNlbnRlbmNlKSByZXR1cm47XG5cbiAgY29uc3QgdHlwZWZhY2UgPSBjb25maWcgJiYgY29uZmlnLnR5cGVmYWNlLFxuICAgIGNvbG9yID0gY29uZmlnICYmIGNvbmZpZy5jb2xvcixcbiAgICB2ZXJib3NlID0gY29uZmlnICYmIGNvbmZpZy52ZXJib3NlLFxuICAgIHNpbGVudCA9IGNvbmZpZyAmJiBjb25maWcuc2lsZW50O1xuXG4gIGlmICh2ZXJib3NlKSB7XG4gICAgY29uc29sZS5sb2coJ1R5cGVmYWNlOiAnLCB0eXBlZmFjZSk7XG4gICAgY29uc29sZS5sb2coJ0NvbG9yOiAnLCBjb2xvcik7XG4gIH1cbiAgLy8gSWYgaGUgdHJpZXMgdG8gaW5wdXQgYW4gaW52YWxpZCB0eXBlZmFjZVxuICBpZiAodHlwZWZhY2UgIT09ICcnICYmIGZvbnRzW3R5cGVmYWNlXSA9PT0gLTEpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJTlZBTElEX1RZUEVGQUNFJyk7XG5cbiAgY29uc3QgZm9udCA9XG4gICAgZm9udHNbdHlwZWZhY2VdIHx8XG4gICAgZm9udHNbT2JqZWN0LmtleXMoZm9udHMpW3JhbmRvbUludChPYmplY3Qua2V5cyhmb250cykubGVuZ3RoKV1dO1xuICBcbiAgY29uc3Qgb3V0cHV0ID0gc2VudGVuY2VUb0FzY2lpQWxwaGFiZXQoc2VudGVuY2UsIGZvbnQpXG4gICAgICAubWFwKGNvbmNhdEFzY2lpTGV0dGVycyhjb2xvcikpXG4gICAgICAubWFwKFIuam9pbignXFxuJykpXG4gICAgICAuZm9sZCgpO1xuICBcbiAgaWYoIXNpbGVudCkgY29uc29sZS5sb2cob3V0cHV0KVxuICBcbiAgcmV0dXJuIG91dHB1dDtcbn1cbiJdfQ==