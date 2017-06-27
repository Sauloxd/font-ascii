'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensions = dimensions;

exports.default = function (sentence, alphabet) {
  return sentence.split('').map(char => handleAlphabetChar(alphabet, char));
};

var _lodash = require('lodash');

const specialChars = {
  EMPTY: ' '
};

const handlers = {
  [specialChars.EMPTY]: (_ref) => {
    let height = _ref.height,
        width = _ref.width;
    return Array(height).fill(0).map(fillEmpty.bind(null, width)).join('\n');
  }
};

function fillEmpty(width) {
  return Array(width).fill(0).map(_ => ' ').join('');
}

function handleAlphabetChar(alphabet, char) {
  return handlers[char] && handlers[char](dimensions(alphabet)) || alphabet[char.toUpperCase()];
}

function dimensions(letters, dimension) {
  const letter = letters instanceof Array ? (0, _lodash.first)(letters) : letters.A;
  const proportion = {
    height: letter.split('\n').length,
    width: letter.split('\n')[0].split('').length
  };

  return dimension && proportion[dimension] || proportion;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZW50ZW5jZVRvQXNjaWlBbHBoYWJldC5qcyJdLCJuYW1lcyI6WyJkaW1lbnNpb25zIiwic2VudGVuY2UiLCJhbHBoYWJldCIsInNwbGl0IiwibWFwIiwiY2hhciIsImhhbmRsZUFscGhhYmV0Q2hhciIsInNwZWNpYWxDaGFycyIsIkVNUFRZIiwiaGFuZGxlcnMiLCJoZWlnaHQiLCJ3aWR0aCIsIkFycmF5IiwiZmlsbCIsImZpbGxFbXB0eSIsImJpbmQiLCJqb2luIiwiXyIsInRvVXBwZXJDYXNlIiwibGV0dGVycyIsImRpbWVuc2lvbiIsImxldHRlciIsIkEiLCJwcm9wb3J0aW9uIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztRQWtCZ0JBLFUsR0FBQUEsVTs7a0JBVUQsVUFBVUMsUUFBVixFQUFvQkMsUUFBcEIsRUFBOEI7QUFDM0MsU0FBT0QsU0FBU0UsS0FBVCxDQUFlLEVBQWYsRUFDSkMsR0FESSxDQUNBQyxRQUFRQyxtQkFBbUJKLFFBQW5CLEVBQTZCRyxJQUE3QixDQURSLENBQVA7QUFFRCxDOztBQS9CRDs7QUFDQSxNQUFNRSxlQUFlO0FBQ25CQyxTQUFPO0FBRFksQ0FBckI7O0FBSUEsTUFBTUMsV0FBVztBQUNmLEdBQUNGLGFBQWFDLEtBQWQsR0FBc0I7QUFBQSxRQUFHRSxNQUFILFFBQUdBLE1BQUg7QUFBQSxRQUFXQyxLQUFYLFFBQVdBLEtBQVg7QUFBQSxXQUF1QkMsTUFBTUYsTUFBTixFQUFjRyxJQUFkLENBQW1CLENBQW5CLEVBQXNCVCxHQUF0QixDQUEwQlUsVUFBVUMsSUFBVixDQUFlLElBQWYsRUFBcUJKLEtBQXJCLENBQTFCLEVBQXVESyxJQUF2RCxDQUE0RCxJQUE1RCxDQUF2QjtBQUFBO0FBRFAsQ0FBakI7O0FBSUEsU0FBU0YsU0FBVCxDQUFtQkgsS0FBbkIsRUFBMEI7QUFDeEIsU0FBT0MsTUFBTUQsS0FBTixFQUFhRSxJQUFiLENBQWtCLENBQWxCLEVBQXFCVCxHQUFyQixDQUF5QmEsS0FBSyxHQUE5QixFQUFtQ0QsSUFBbkMsQ0FBd0MsRUFBeEMsQ0FBUDtBQUNEOztBQUVELFNBQVNWLGtCQUFULENBQTRCSixRQUE1QixFQUFzQ0csSUFBdEMsRUFBNEM7QUFDMUMsU0FBUUksU0FBU0osSUFBVCxLQUFrQkksU0FBU0osSUFBVCxFQUFlTCxXQUFXRSxRQUFYLENBQWYsQ0FBbkIsSUFDRkEsU0FBU0csS0FBS2EsV0FBTCxFQUFULENBREw7QUFFRDs7QUFFTSxTQUFTbEIsVUFBVCxDQUFvQm1CLE9BQXBCLEVBQTZCQyxTQUE3QixFQUF3QztBQUM3QyxRQUFNQyxTQUFTRixtQkFBbUJQLEtBQW5CLEdBQTJCLG1CQUFNTyxPQUFOLENBQTNCLEdBQTRDQSxRQUFRRyxDQUFuRTtBQUNBLFFBQU1DLGFBQWE7QUFDakJiLFlBQVFXLE9BQU9sQixLQUFQLENBQWEsSUFBYixFQUFtQnFCLE1BRFY7QUFFakJiLFdBQU9VLE9BQU9sQixLQUFQLENBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQkEsS0FBdEIsQ0FBNEIsRUFBNUIsRUFBZ0NxQjtBQUZ0QixHQUFuQjs7QUFLQSxTQUFRSixhQUFhRyxXQUFXSCxTQUFYLENBQWQsSUFBd0NHLFVBQS9DO0FBQ0QiLCJmaWxlIjoic2VudGVuY2VUb0FzY2lpQWxwaGFiZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJzdCB9IGZyb20gJ2xvZGFzaCdcbmNvbnN0IHNwZWNpYWxDaGFycyA9IHtcbiAgRU1QVFk6ICcgJ1xufVxuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgW3NwZWNpYWxDaGFycy5FTVBUWV06ICh7IGhlaWdodCwgd2lkdGggfSkgPT4gQXJyYXkoaGVpZ2h0KS5maWxsKDApLm1hcChmaWxsRW1wdHkuYmluZChudWxsLCB3aWR0aCkpLmpvaW4oJ1xcbicpXG59XG5cbmZ1bmN0aW9uIGZpbGxFbXB0eSh3aWR0aCkge1xuICByZXR1cm4gQXJyYXkod2lkdGgpLmZpbGwoMCkubWFwKF8gPT4gJyAnKS5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBbHBoYWJldENoYXIoYWxwaGFiZXQsIGNoYXIpIHtcbiAgcmV0dXJuIChoYW5kbGVyc1tjaGFyXSAmJiBoYW5kbGVyc1tjaGFyXShkaW1lbnNpb25zKGFscGhhYmV0KSkpXG4gICAgfHwgYWxwaGFiZXRbY2hhci50b1VwcGVyQ2FzZSgpXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGltZW5zaW9ucyhsZXR0ZXJzLCBkaW1lbnNpb24pIHtcbiAgY29uc3QgbGV0dGVyID0gbGV0dGVycyBpbnN0YW5jZW9mIEFycmF5ID8gZmlyc3QobGV0dGVycykgOiBsZXR0ZXJzLkFcbiAgY29uc3QgcHJvcG9ydGlvbiA9IHtcbiAgICBoZWlnaHQ6IGxldHRlci5zcGxpdCgnXFxuJykubGVuZ3RoLFxuICAgIHdpZHRoOiBsZXR0ZXIuc3BsaXQoJ1xcbicpWzBdLnNwbGl0KCcnKS5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiAoZGltZW5zaW9uICYmIHByb3BvcnRpb25bZGltZW5zaW9uXSkgfHwgcHJvcG9ydGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2VudGVuY2UsIGFscGhhYmV0KSB7XG4gIHJldHVybiBzZW50ZW5jZS5zcGxpdCgnJylcbiAgICAubWFwKGNoYXIgPT4gaGFuZGxlQWxwaGFiZXRDaGFyKGFscGhhYmV0LCBjaGFyKSlcbn1cblxuXG4iXX0=