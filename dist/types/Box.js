"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Box = function Box(x) {
  return {
    map: function map(f) {
      return Box(f(x));
    },
    fold: function fold(_) {
      return x;
    }
  };
};

var _default = Box;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Cb3guanMiXSwibmFtZXMiOlsiQm94IiwieCIsIm1hcCIsImYiLCJmb2xkIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUFDLENBQUM7QUFBQSxTQUFLO0FBQ2hCQyxJQUFBQSxHQUFHLEVBQUUsYUFBQUMsQ0FBQztBQUFBLGFBQUlILEdBQUcsQ0FBQ0csQ0FBQyxDQUFDRixDQUFELENBQUYsQ0FBUDtBQUFBLEtBRFU7QUFFaEJHLElBQUFBLElBQUksRUFBRSxjQUFBQyxDQUFDO0FBQUEsYUFBSUosQ0FBSjtBQUFBO0FBRlMsR0FBTDtBQUFBLENBQWI7O2VBS2VELEciLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb3ggPSB4ID0+ICh7XG4gIG1hcDogZiA9PiBCb3goZih4KSksXG4gIGZvbGQ6IF8gPT4geCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iXX0=