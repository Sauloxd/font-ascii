"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Box = x => ({
  map: f => Box(f(x)),
  fold: _ => x
});

exports.default = Box;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Cb3guanMiXSwibmFtZXMiOlsiQm94IiwieCIsIm1hcCIsImYiLCJmb2xkIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxNQUFNQyxNQUFNO0FBQ2hCQyxPQUFLQyxLQUFLSCxJQUFJRyxFQUFFRixDQUFGLENBQUosQ0FETTtBQUVoQkcsUUFBTUMsS0FBS0o7QUFGSyxDQUFOLENBQVo7O2tCQUtlRCxHIiwiZmlsZSI6IkJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJveCA9IHggPT4gKHtcbiAgbWFwOiBmID0+IEJveChmKHgpKSxcbiAgZm9sZDogXyA9PiB4XG59KVxuXG5leHBvcnQgZGVmYXVsdCBCb3hcbiJdfQ==