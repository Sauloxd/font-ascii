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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmF0aXZlLWNsaS5qcyJdLCJuYW1lcyI6WyJpbml0IiwiaW5xdWlyZXIiLCJwcm9tcHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJ0aGVuIiwiYWN0aW9uIiwicGhyYXNlIiwiXyIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUFBLElBQUksQ0FBQ0Msb0JBQUQsQ0FBSjs7QUFFQSxTQUFTRCxJQUFULEdBQWdCO0FBQ2QsU0FBT0MscUJBQVNDLE1BQVQsQ0FBZ0I7QUFDckJDLElBQUFBLE9BQU8sRUFBRSw0QkFEWTtBQUVyQkMsSUFBQUEsSUFBSSxFQUFFLE9BRmU7QUFHckJDLElBQUFBLElBQUksRUFBRTtBQUhlLEdBQWhCLEVBS05DLElBTE0sQ0FLRCxVQUFDQyxNQUFELEVBQVk7QUFDaEIsV0FBTyx1QkFBV0EsTUFBTSxDQUFDQyxNQUFsQixDQUFQO0FBQ0QsR0FQTSxFQVFORixJQVJNLENBUUQsVUFBQUcsQ0FBQztBQUFBLFdBQUlULElBQUksRUFBUjtBQUFBLEdBUkEsV0FTQSxVQUFBVSxDQUFDO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosQ0FBSjtBQUFBLEdBVEQsQ0FBUDtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IGZvcm1QaHJhc2UgZnJvbSAnLi9pbmRleCdcblxuaW5pdChpbnF1aXJlcilcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgcmV0dXJuIGlucXVpcmVyLnByb21wdCh7XG4gICAgbWVzc2FnZTogJ0lucHV0IGEgbWFnaWNhbCBwaHJhc2U6IFxcbicsXG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBuYW1lOiAncGhyYXNlJ1xuICB9KVxuICAudGhlbigoYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGZvcm1QaHJhc2UoYWN0aW9uLnBocmFzZSlcbiAgfSlcbiAgLnRoZW4oXyA9PiBpbml0KCkpXG4gIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxufVxuXG4iXX0=