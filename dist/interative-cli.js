"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

init(_inquirer["default"]);

function init() {
  return _inquirer["default"].prompt({
    message: 'Input a magical phrase: \n',
    type: 'input',
    name: 'phrase'
  }).then(function (action) {
    return (0, _index["default"])(action.phrase);
  }).then(function (_) {
    return init();
  })["catch"](function (e) {
    return console.log(e);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmF0aXZlLWNsaS5qcyJdLCJuYW1lcyI6WyJpbml0IiwiaW5xdWlyZXIiLCJwcm9tcHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJ0aGVuIiwiYWN0aW9uIiwicGhyYXNlIiwiXyIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUFBLElBQUksQ0FBQ0Msb0JBQUQsQ0FBSjs7QUFFQSxTQUFTRCxJQUFULEdBQWdCO0FBQ2QsU0FBT0MscUJBQ0pDLE1BREksQ0FDRztBQUNOQyxJQUFBQSxPQUFPLEVBQUUsNEJBREg7QUFFTkMsSUFBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkMsSUFBQUEsSUFBSSxFQUFFO0FBSEEsR0FESCxFQU1KQyxJQU5JLENBTUMsVUFBQUMsTUFBTSxFQUFJO0FBQ2QsV0FBTyx1QkFBV0EsTUFBTSxDQUFDQyxNQUFsQixDQUFQO0FBQ0QsR0FSSSxFQVNKRixJQVRJLENBU0MsVUFBQUcsQ0FBQztBQUFBLFdBQUlULElBQUksRUFBUjtBQUFBLEdBVEYsV0FVRSxVQUFBVSxDQUFDO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosQ0FBSjtBQUFBLEdBVkgsQ0FBUDtBQVdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJztcbmltcG9ydCBmb3JtUGhyYXNlIGZyb20gJy4vaW5kZXgnO1xuXG5pbml0KGlucXVpcmVyKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgcmV0dXJuIGlucXVpcmVyXG4gICAgLnByb21wdCh7XG4gICAgICBtZXNzYWdlOiAnSW5wdXQgYSBtYWdpY2FsIHBocmFzZTogXFxuJyxcbiAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICBuYW1lOiAncGhyYXNlJyxcbiAgICB9KVxuICAgIC50aGVuKGFjdGlvbiA9PiB7XG4gICAgICByZXR1cm4gZm9ybVBocmFzZShhY3Rpb24ucGhyYXNlKTtcbiAgICB9KVxuICAgIC50aGVuKF8gPT4gaW5pdCgpKVxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbn1cbiJdfQ==