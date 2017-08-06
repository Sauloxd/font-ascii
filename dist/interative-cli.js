'use strict';

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

init(_inquirer2.default);

function init() {
  return _inquirer2.default.prompt({
    message: 'Input a magical phrase: \n',
    type: 'input',
    name: 'phrase'
  }).then(action => {
    return (0, _index2.default)(action.phrase);
  }).then(_ => init()).catch(e => console.log(e));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmF0aXZlLWNsaS5qcyJdLCJuYW1lcyI6WyJpbml0IiwicHJvbXB0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwidGhlbiIsImFjdGlvbiIsInBocmFzZSIsIl8iLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsU0FBTyxtQkFBU0MsTUFBVCxDQUFnQjtBQUNyQkMsYUFBUyw0QkFEWTtBQUVyQkMsVUFBTSxPQUZlO0FBR3JCQyxVQUFNO0FBSGUsR0FBaEIsRUFLTkMsSUFMTSxDQUtBQyxNQUFELElBQVk7QUFDaEIsV0FBTyxxQkFBV0EsT0FBT0MsTUFBbEIsQ0FBUDtBQUNELEdBUE0sRUFRTkYsSUFSTSxDQVFERyxLQUFLUixNQVJKLEVBU05TLEtBVE0sQ0FTQUMsS0FBS0MsUUFBUUMsR0FBUixDQUFZRixDQUFaLENBVEwsQ0FBUDtBQVVEIiwiZmlsZSI6ImludGVyYXRpdmUtY2xpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IGZvcm1QaHJhc2UgZnJvbSAnLi9pbmRleCdcblxuaW5pdChpbnF1aXJlcilcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgcmV0dXJuIGlucXVpcmVyLnByb21wdCh7XG4gICAgbWVzc2FnZTogJ0lucHV0IGEgbWFnaWNhbCBwaHJhc2U6IFxcbicsXG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBuYW1lOiAncGhyYXNlJ1xuICB9KVxuICAudGhlbigoYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGZvcm1QaHJhc2UoYWN0aW9uLnBocmFzZSlcbiAgfSlcbiAgLnRoZW4oXyA9PiBpbml0KCkpXG4gIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxufVxuXG4iXX0=