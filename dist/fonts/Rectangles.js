"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Rectangles = {
  "0": "     \n ___ \n|   |\n| | |\n|___|\n     ",
  "1": "       \n ___   \n|_  |  \n _| |_ \n|_____|\n       ",
  "2": "     \n ___ \n|_  |\n|  _|\n|___|\n     ",
  "3": "     \n ___ \n|_  |\n|_  |\n|___|\n     ",
  "4": "     \n ___ \n| | |\n|_  |\n  |_|\n     ",
  "5": "     \n ___ \n|  _|\n|_  |\n|___|\n     ",
  "6": "     \n ___ \n|  _|\n| . |\n|___|\n     ",
  "7": "     \n ___ \n|_  |\n  | |\n  |_|\n     ",
  "8": "     \n ___ \n| . |\n| . |\n|___|\n     ",
  "9": "     \n ___ \n| . |\n|_  |\n|___|\n     ",
  "A": "       \n _____ \n|  _  |\n|     |\n|__|__|\n       ",
  "B": "       \n _____ \n| __  |\n| __ -|\n|_____|\n       ",
  "C": "       \n _____ \n|     |\n|   --|\n|_____|\n       ",
  "D": "       \n ____  \n|    \\ \n|  |  |\n|____/ \n       ",
  "E": "       \n _____ \n|   __|\n|   __|\n|_____|\n       ",
  "F": "       \n _____ \n|   __|\n|   __|\n|__|   \n       ",
  "G": "       \n _____ \n|   __|\n|  |  |\n|_____|\n       ",
  "H": "       \n _____ \n|  |  |\n|     |\n|__|__|\n       ",
  "I": "       \n _____ \n|     |\n|-   -|\n|_____|\n       ",
  "J": "       \n    __ \n __|  |\n|  |  |\n|_____|\n       ",
  "K": "       \n _____ \n|  |  |\n|    -|\n|__|__|\n       ",
  "L": "       \n __    \n|  |   \n|  |__ \n|_____|\n       ",
  "M": "       \n _____ \n|     |\n| | | |\n|_|_|_|\n       ",
  "N": "       \n _____ \n|   | |\n| | | |\n|_|___|\n       ",
  "O": "       \n _____ \n|     |\n|  |  |\n|_____|\n       ",
  "P": "       \n _____ \n|  _  |\n|   __|\n|__|   \n       ",
  "Q": "       \n _____ \n|     |\n|  |  |\n|__  _|\n   |__|",
  "R": "       \n _____ \n| __  |\n|    -|\n|__|__|\n       ",
  "S": "       \n _____ \n|   __|\n|__   |\n|_____|\n       ",
  "T": "       \n _____ \n|_   _|\n  | |  \n  |_|  \n       ",
  "U": "       \n _____ \n|  |  |\n|  |  |\n|_____|\n       ",
  "V": "       \n _____ \n|  |  |\n|  |  |\n \\___/ \n       ",
  "W": "       \n _ _ _ \n| | | |\n| | | |\n|_____|\n       ",
  "X": "       \n __ __ \n|  |  |\n|-   -|\n|__|__|\n       ",
  "Y": "       \n __ __ \n|  |  |\n|_   _|\n  |_|  \n       ",
  "Z": "       \n _____ \n|__   |\n|   __|\n|_____|\n       "
};
var _default = Rectangles;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9SZWN0YW5nbGVzLmpzIl0sIm5hbWVzIjpbIlJlY3RhbmdsZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRztBQUNqQixPQUFLLDBDQURZO0FBRWpCLE9BQUssc0RBRlk7QUFHakIsT0FBSywwQ0FIWTtBQUlqQixPQUFLLDBDQUpZO0FBS2pCLE9BQUssMENBTFk7QUFNakIsT0FBSywwQ0FOWTtBQU9qQixPQUFLLDBDQVBZO0FBUWpCLE9BQUssMENBUlk7QUFTakIsT0FBSywwQ0FUWTtBQVVqQixPQUFLLDBDQVZZO0FBV2pCLE9BQUssc0RBWFk7QUFZakIsT0FBSyxzREFaWTtBQWFqQixPQUFLLHNEQWJZO0FBY2pCLE9BQUssdURBZFk7QUFlakIsT0FBSyxzREFmWTtBQWdCakIsT0FBSyxzREFoQlk7QUFpQmpCLE9BQUssc0RBakJZO0FBa0JqQixPQUFLLHNEQWxCWTtBQW1CakIsT0FBSyxzREFuQlk7QUFvQmpCLE9BQUssc0RBcEJZO0FBcUJqQixPQUFLLHNEQXJCWTtBQXNCakIsT0FBSyxzREF0Qlk7QUF1QmpCLE9BQUssc0RBdkJZO0FBd0JqQixPQUFLLHNEQXhCWTtBQXlCakIsT0FBSyxzREF6Qlk7QUEwQmpCLE9BQUssc0RBMUJZO0FBMkJqQixPQUFLLHNEQTNCWTtBQTRCakIsT0FBSyxzREE1Qlk7QUE2QmpCLE9BQUssc0RBN0JZO0FBOEJqQixPQUFLLHNEQTlCWTtBQStCakIsT0FBSyxzREEvQlk7QUFnQ2pCLE9BQUssdURBaENZO0FBaUNqQixPQUFLLHNEQWpDWTtBQWtDakIsT0FBSyxzREFsQ1k7QUFtQ2pCLE9BQUssc0RBbkNZO0FBb0NqQixPQUFLO0FBcENZLENBQW5CO2VBdUNlQSxVIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVjdGFuZ2xlcyA9IHtcbiAgXCIwXCI6IFwiICAgICBcXG4gX19fIFxcbnwgICB8XFxufCB8IHxcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiMVwiOiBcIiAgICAgICBcXG4gX19fICAgXFxufF8gIHwgIFxcbiBffCB8XyBcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIjJcIjogXCIgICAgIFxcbiBfX18gXFxufF8gIHxcXG58ICBffFxcbnxfX198XFxuICAgICBcIixcbiAgXCIzXCI6IFwiICAgICBcXG4gX19fIFxcbnxfICB8XFxufF8gIHxcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiNFwiOiBcIiAgICAgXFxuIF9fXyBcXG58IHwgfFxcbnxfICB8XFxuICB8X3xcXG4gICAgIFwiLFxuICBcIjVcIjogXCIgICAgIFxcbiBfX18gXFxufCAgX3xcXG58XyAgfFxcbnxfX198XFxuICAgICBcIixcbiAgXCI2XCI6IFwiICAgICBcXG4gX19fIFxcbnwgIF98XFxufCAuIHxcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiN1wiOiBcIiAgICAgXFxuIF9fXyBcXG58XyAgfFxcbiAgfCB8XFxuICB8X3xcXG4gICAgIFwiLFxuICBcIjhcIjogXCIgICAgIFxcbiBfX18gXFxufCAuIHxcXG58IC4gfFxcbnxfX198XFxuICAgICBcIixcbiAgXCI5XCI6IFwiICAgICBcXG4gX19fIFxcbnwgLiB8XFxufF8gIHxcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiQVwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgXyAgfFxcbnwgICAgIHxcXG58X198X198XFxuICAgICAgIFwiLFxuICBcIkJcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgX18gIHxcXG58IF9fIC18XFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCJDXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgICB8XFxufCAgIC0tfFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiRFwiOiBcIiAgICAgICBcXG4gX19fXyAgXFxufCAgICBcXFxcIFxcbnwgIHwgIHxcXG58X19fXy8gXFxuICAgICAgIFwiLFxuICBcIkVcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgICBfX3xcXG58ICAgX198XFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCJGXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgX198XFxufCAgIF9ffFxcbnxfX3wgICBcXG4gICAgICAgXCIsXG4gIFwiR1wiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgIF9ffFxcbnwgIHwgIHxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIkhcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgIHwgIHxcXG58ICAgICB8XFxufF9ffF9ffFxcbiAgICAgICBcIixcbiAgXCJJXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgICB8XFxufC0gICAtfFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiSlwiOiBcIiAgICAgICBcXG4gICAgX18gXFxuIF9ffCAgfFxcbnwgIHwgIHxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIktcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgIHwgIHxcXG58ICAgIC18XFxufF9ffF9ffFxcbiAgICAgICBcIixcbiAgXCJMXCI6IFwiICAgICAgIFxcbiBfXyAgICBcXG58ICB8ICAgXFxufCAgfF9fIFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiTVwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgICAgfFxcbnwgfCB8IHxcXG58X3xffF98XFxuICAgICAgIFwiLFxuICBcIk5cIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgICB8IHxcXG58IHwgfCB8XFxufF98X19ffFxcbiAgICAgICBcIixcbiAgXCJPXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgICB8XFxufCAgfCAgfFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiUFwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgXyAgfFxcbnwgICBfX3xcXG58X198ICAgXFxuICAgICAgIFwiLFxuICBcIlFcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgICAgIHxcXG58ICB8ICB8XFxufF9fICBffFxcbiAgIHxfX3xcIixcbiAgXCJSXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58IF9fICB8XFxufCAgICAtfFxcbnxfX3xfX3xcXG4gICAgICAgXCIsXG4gIFwiU1wiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgIF9ffFxcbnxfXyAgIHxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIlRcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnxfICAgX3xcXG4gIHwgfCAgXFxuICB8X3wgIFxcbiAgICAgICBcIixcbiAgXCJVXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICB8ICB8XFxufCAgfCAgfFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiVlwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgfCAgfFxcbnwgIHwgIHxcXG4gXFxcXF9fXy8gXFxuICAgICAgIFwiLFxuICBcIldcIjogXCIgICAgICAgXFxuIF8gXyBfIFxcbnwgfCB8IHxcXG58IHwgfCB8XFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCJYXCI6IFwiICAgICAgIFxcbiBfXyBfXyBcXG58ICB8ICB8XFxufC0gICAtfFxcbnxfX3xfX3xcXG4gICAgICAgXCIsXG4gIFwiWVwiOiBcIiAgICAgICBcXG4gX18gX18gXFxufCAgfCAgfFxcbnxfICAgX3xcXG4gIHxffCAgXFxuICAgICAgIFwiLFxuICBcIlpcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnxfXyAgIHxcXG58ICAgX198XFxufF9fX19ffFxcbiAgICAgICBcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGVzIl19