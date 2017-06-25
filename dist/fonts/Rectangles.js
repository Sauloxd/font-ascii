"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Rectangles = {
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

exports.default = Rectangles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9SZWN0YW5nbGVzLmpzIl0sIm5hbWVzIjpbIlJlY3RhbmdsZXMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsYUFBYTtBQUNqQixPQUFLLDBDQURZO0FBRWpCLE9BQUssc0RBRlk7QUFHakIsT0FBSywwQ0FIWTtBQUlqQixPQUFLLDBDQUpZO0FBS2pCLE9BQUssMENBTFk7QUFNakIsT0FBSywwQ0FOWTtBQU9qQixPQUFLLDBDQVBZO0FBUWpCLE9BQUssMENBUlk7QUFTakIsT0FBSywwQ0FUWTtBQVVqQixPQUFLLDBDQVZZO0FBV2pCLE9BQUssc0RBWFk7QUFZakIsT0FBSyxzREFaWTtBQWFqQixPQUFLLHNEQWJZO0FBY2pCLE9BQUssdURBZFk7QUFlakIsT0FBSyxzREFmWTtBQWdCakIsT0FBSyxzREFoQlk7QUFpQmpCLE9BQUssc0RBakJZO0FBa0JqQixPQUFLLHNEQWxCWTtBQW1CakIsT0FBSyxzREFuQlk7QUFvQmpCLE9BQUssc0RBcEJZO0FBcUJqQixPQUFLLHNEQXJCWTtBQXNCakIsT0FBSyxzREF0Qlk7QUF1QmpCLE9BQUssc0RBdkJZO0FBd0JqQixPQUFLLHNEQXhCWTtBQXlCakIsT0FBSyxzREF6Qlk7QUEwQmpCLE9BQUssc0RBMUJZO0FBMkJqQixPQUFLLHNEQTNCWTtBQTRCakIsT0FBSyxzREE1Qlk7QUE2QmpCLE9BQUssc0RBN0JZO0FBOEJqQixPQUFLLHNEQTlCWTtBQStCakIsT0FBSyxzREEvQlk7QUFnQ2pCLE9BQUssdURBaENZO0FBaUNqQixPQUFLLHNEQWpDWTtBQWtDakIsT0FBSyxzREFsQ1k7QUFtQ2pCLE9BQUssc0RBbkNZO0FBb0NqQixPQUFLO0FBcENZLENBQW5COztrQkF1Q2VBLFUiLCJmaWxlIjoiUmVjdGFuZ2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlY3RhbmdsZXMgPSB7XG4gIFwiMFwiOiBcIiAgICAgXFxuIF9fXyBcXG58ICAgfFxcbnwgfCB8XFxufF9fX3xcXG4gICAgIFwiLFxuICBcIjFcIjogXCIgICAgICAgXFxuIF9fXyAgIFxcbnxfICB8ICBcXG4gX3wgfF8gXFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCIyXCI6IFwiICAgICBcXG4gX19fIFxcbnxfICB8XFxufCAgX3xcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiM1wiOiBcIiAgICAgXFxuIF9fXyBcXG58XyAgfFxcbnxfICB8XFxufF9fX3xcXG4gICAgIFwiLFxuICBcIjRcIjogXCIgICAgIFxcbiBfX18gXFxufCB8IHxcXG58XyAgfFxcbiAgfF98XFxuICAgICBcIixcbiAgXCI1XCI6IFwiICAgICBcXG4gX19fIFxcbnwgIF98XFxufF8gIHxcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiNlwiOiBcIiAgICAgXFxuIF9fXyBcXG58ICBffFxcbnwgLiB8XFxufF9fX3xcXG4gICAgIFwiLFxuICBcIjdcIjogXCIgICAgIFxcbiBfX18gXFxufF8gIHxcXG4gIHwgfFxcbiAgfF98XFxuICAgICBcIixcbiAgXCI4XCI6IFwiICAgICBcXG4gX19fIFxcbnwgLiB8XFxufCAuIHxcXG58X19ffFxcbiAgICAgXCIsXG4gIFwiOVwiOiBcIiAgICAgXFxuIF9fXyBcXG58IC4gfFxcbnxfICB8XFxufF9fX3xcXG4gICAgIFwiLFxuICBcIkFcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgIF8gIHxcXG58ICAgICB8XFxufF9ffF9ffFxcbiAgICAgICBcIixcbiAgXCJCXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58IF9fICB8XFxufCBfXyAtfFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiQ1wiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgICAgfFxcbnwgICAtLXxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIkRcIjogXCIgICAgICAgXFxuIF9fX18gIFxcbnwgICAgXFxcXCBcXG58ICB8ICB8XFxufF9fX18vIFxcbiAgICAgICBcIixcbiAgXCJFXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgX198XFxufCAgIF9ffFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiRlwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgIF9ffFxcbnwgICBfX3xcXG58X198ICAgXFxuICAgICAgIFwiLFxuICBcIkdcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgICBfX3xcXG58ICB8ICB8XFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCJIXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICB8ICB8XFxufCAgICAgfFxcbnxfX3xfX3xcXG4gICAgICAgXCIsXG4gIFwiSVwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgICAgfFxcbnwtICAgLXxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIkpcIjogXCIgICAgICAgXFxuICAgIF9fIFxcbiBfX3wgIHxcXG58ICB8ICB8XFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCJLXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICB8ICB8XFxufCAgICAtfFxcbnxfX3xfX3xcXG4gICAgICAgXCIsXG4gIFwiTFwiOiBcIiAgICAgICBcXG4gX18gICAgXFxufCAgfCAgIFxcbnwgIHxfXyBcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIk1cIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgICAgIHxcXG58IHwgfCB8XFxufF98X3xffFxcbiAgICAgICBcIixcbiAgXCJOXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgfCB8XFxufCB8IHwgfFxcbnxffF9fX3xcXG4gICAgICAgXCIsXG4gIFwiT1wiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgICAgfFxcbnwgIHwgIHxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIlBcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgIF8gIHxcXG58ICAgX198XFxufF9ffCAgIFxcbiAgICAgICBcIixcbiAgXCJRXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58ICAgICB8XFxufCAgfCAgfFxcbnxfXyAgX3xcXG4gICB8X198XCIsXG4gIFwiUlwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCBfXyAgfFxcbnwgICAgLXxcXG58X198X198XFxuICAgICAgIFwiLFxuICBcIlNcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgICBfX3xcXG58X18gICB8XFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCJUXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58XyAgIF98XFxuICB8IHwgIFxcbiAgfF98ICBcXG4gICAgICAgXCIsXG4gIFwiVVwiOiBcIiAgICAgICBcXG4gX19fX18gXFxufCAgfCAgfFxcbnwgIHwgIHxcXG58X19fX198XFxuICAgICAgIFwiLFxuICBcIlZcIjogXCIgICAgICAgXFxuIF9fX19fIFxcbnwgIHwgIHxcXG58ICB8ICB8XFxuIFxcXFxfX18vIFxcbiAgICAgICBcIixcbiAgXCJXXCI6IFwiICAgICAgIFxcbiBfIF8gXyBcXG58IHwgfCB8XFxufCB8IHwgfFxcbnxfX19fX3xcXG4gICAgICAgXCIsXG4gIFwiWFwiOiBcIiAgICAgICBcXG4gX18gX18gXFxufCAgfCAgfFxcbnwtICAgLXxcXG58X198X198XFxuICAgICAgIFwiLFxuICBcIllcIjogXCIgICAgICAgXFxuIF9fIF9fIFxcbnwgIHwgIHxcXG58XyAgIF98XFxuICB8X3wgIFxcbiAgICAgICBcIixcbiAgXCJaXCI6IFwiICAgICAgIFxcbiBfX19fXyBcXG58X18gICB8XFxufCAgIF9ffFxcbnxfX19fX3xcXG4gICAgICAgXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlcyJdfQ==