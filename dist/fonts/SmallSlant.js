"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const SmallSlant = {
  "0": "  ___ \n / _ \\\n/ // /\n\\___/ \n      ",
  "1": "  ___\n <  /\n / / \n/_/  \n     ",
  "2": "   ___ \n  |_  |\n / __/ \n/____/ \n       ",
  "3": "   ____\n  |_  /\n _/_ < \n/____/ \n       ",
  "4": "  ____\n / / /\n/_  _/\n /_/  \n      ",
  "5": "   ____\n  / __/\n /__ \\ \n/____/ \n       ",
  "6": "  ____\n / __/\n/ _ \\ \n\\___/ \n      ",
  "7": " ____\n/_  /\n / / \n/_/  \n     ",
  "8": "  ___ \n ( _ )\n/ _  |\n\\___/ \n      ",
  "9": "  ___ \n / _ \\\n \\_, /\n/___/ \n      ",
  "A": "   ___ \n  / _ |\n / __ |\n/_/ |_|\n       ",
  "B": "   ___ \n  / _ )\n / _  |\n/____/ \n       ",
  "C": "  _____\n / ___/\n/ /__  \n\\___/  \n       ",
  "D": "   ___ \n  / _ \\\n / // /\n/____/ \n       ",
  "E": "   ____\n  / __/\n / _/  \n/___/  \n       ",
  "F": "   ____\n  / __/\n / _/  \n/_/    \n       ",
  "G": "  _____\n / ___/\n/ (_ / \n\\___/  \n       ",
  "H": "   __ __\n  / // /\n / _  / \n/_//_/  \n        ",
  "I": "   ____\n  /  _/\n _/ /  \n/___/  \n       ",
  "J": "     __\n __ / /\n/ // / \n\\___/  \n       ",
  "K": "   __ __\n  / //_/\n / ,<   \n/_/|_|  \n        ",
  "L": "   __ \n  / / \n / /__\n/____/\n      ",
  "M": "   __  ___\n  /  |/  /\n / /|_/ / \n/_/  /_/  \n          ",
  "N": "   _  __\n  / |/ /\n /    / \n/_/|_/  \n        ",
  "O": "  ____ \n / __ \\\n/ /_/ /\n\\____/ \n       ",
  "P": "   ___ \n  / _ \\\n / ___/\n/_/    \n       ",
  "Q": "  ____ \n / __ \\\n/ /_/ /\n\\___\\_\\\n       ",
  "R": "   ___ \n  / _ \\\n / , _/\n/_/|_| \n       ",
  "S": "   ____\n  / __/\n _\\ \\  \n/___/  \n       ",
  "T": " ______\n/_  __/\n / /   \n/_/    \n       ",
  "U": "  __  __\n / / / /\n/ /_/ / \n\\____/  \n        ",
  "V": "  _   __\n | | / /\n | |/ / \n |___/  \n        ",
  "W": "  _      __\n | | /| / /\n | |/ |/ / \n |__/|__/  \n           ",
  "X": "   _  __\n  | |/_/\n _>  <  \n/_/|_|  \n        ",
  "Y": " __  __\n \\ \\/ /\n  \\  / \n  /_/  \n       ",
  "Z": "  ____\n /_  /\n  / /_\n /___/\n      "
};

exports.default = SmallSlant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9TbWFsbFNsYW50LmpzIl0sIm5hbWVzIjpbIlNtYWxsU2xhbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsYUFBYTtBQUNqQixPQUFLLDBDQURZO0FBRWpCLE9BQUssbUNBRlk7QUFHakIsT0FBSyw2Q0FIWTtBQUlqQixPQUFLLDZDQUpZO0FBS2pCLE9BQUssd0NBTFk7QUFNakIsT0FBSyw4Q0FOWTtBQU9qQixPQUFLLDBDQVBZO0FBUWpCLE9BQUssbUNBUlk7QUFTakIsT0FBSyx5Q0FUWTtBQVVqQixPQUFLLDBDQVZZO0FBV2pCLE9BQUssNkNBWFk7QUFZakIsT0FBSyw2Q0FaWTtBQWFqQixPQUFLLDhDQWJZO0FBY2pCLE9BQUssOENBZFk7QUFlakIsT0FBSyw2Q0FmWTtBQWdCakIsT0FBSyw2Q0FoQlk7QUFpQmpCLE9BQUssOENBakJZO0FBa0JqQixPQUFLLGtEQWxCWTtBQW1CakIsT0FBSyw2Q0FuQlk7QUFvQmpCLE9BQUssOENBcEJZO0FBcUJqQixPQUFLLGtEQXJCWTtBQXNCakIsT0FBSyx3Q0F0Qlk7QUF1QmpCLE9BQUssNERBdkJZO0FBd0JqQixPQUFLLGtEQXhCWTtBQXlCakIsT0FBSywrQ0F6Qlk7QUEwQmpCLE9BQUssOENBMUJZO0FBMkJqQixPQUFLLGlEQTNCWTtBQTRCakIsT0FBSyw4Q0E1Qlk7QUE2QmpCLE9BQUssK0NBN0JZO0FBOEJqQixPQUFLLDZDQTlCWTtBQStCakIsT0FBSyxtREEvQlk7QUFnQ2pCLE9BQUssa0RBaENZO0FBaUNqQixPQUFLLGlFQWpDWTtBQWtDakIsT0FBSyxrREFsQ1k7QUFtQ2pCLE9BQUssZ0RBbkNZO0FBb0NqQixPQUFLO0FBcENZLENBQW5COztrQkF1Q2VBLFUiLCJmaWxlIjoiU21hbGxTbGFudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNtYWxsU2xhbnQgPSB7XG4gIFwiMFwiOiBcIiAgX19fIFxcbiAvIF8gXFxcXFxcbi8gLy8gL1xcblxcXFxfX18vIFxcbiAgICAgIFwiLFxuICBcIjFcIjogXCIgIF9fX1xcbiA8ICAvXFxuIC8gLyBcXG4vXy8gIFxcbiAgICAgXCIsXG4gIFwiMlwiOiBcIiAgIF9fXyBcXG4gIHxfICB8XFxuIC8gX18vIFxcbi9fX19fLyBcXG4gICAgICAgXCIsXG4gIFwiM1wiOiBcIiAgIF9fX19cXG4gIHxfICAvXFxuIF8vXyA8IFxcbi9fX19fLyBcXG4gICAgICAgXCIsXG4gIFwiNFwiOiBcIiAgX19fX1xcbiAvIC8gL1xcbi9fICBfL1xcbiAvXy8gIFxcbiAgICAgIFwiLFxuICBcIjVcIjogXCIgICBfX19fXFxuICAvIF9fL1xcbiAvX18gXFxcXCBcXG4vX19fXy8gXFxuICAgICAgIFwiLFxuICBcIjZcIjogXCIgIF9fX19cXG4gLyBfXy9cXG4vIF8gXFxcXCBcXG5cXFxcX19fLyBcXG4gICAgICBcIixcbiAgXCI3XCI6IFwiIF9fX19cXG4vXyAgL1xcbiAvIC8gXFxuL18vICBcXG4gICAgIFwiLFxuICBcIjhcIjogXCIgIF9fXyBcXG4gKCBfIClcXG4vIF8gIHxcXG5cXFxcX19fLyBcXG4gICAgICBcIixcbiAgXCI5XCI6IFwiICBfX18gXFxuIC8gXyBcXFxcXFxuIFxcXFxfLCAvXFxuL19fXy8gXFxuICAgICAgXCIsXG4gIFwiQVwiOiBcIiAgIF9fXyBcXG4gIC8gXyB8XFxuIC8gX18gfFxcbi9fLyB8X3xcXG4gICAgICAgXCIsXG4gIFwiQlwiOiBcIiAgIF9fXyBcXG4gIC8gXyApXFxuIC8gXyAgfFxcbi9fX19fLyBcXG4gICAgICAgXCIsXG4gIFwiQ1wiOiBcIiAgX19fX19cXG4gLyBfX18vXFxuLyAvX18gIFxcblxcXFxfX18vICBcXG4gICAgICAgXCIsXG4gIFwiRFwiOiBcIiAgIF9fXyBcXG4gIC8gXyBcXFxcXFxuIC8gLy8gL1xcbi9fX19fLyBcXG4gICAgICAgXCIsXG4gIFwiRVwiOiBcIiAgIF9fX19cXG4gIC8gX18vXFxuIC8gXy8gIFxcbi9fX18vICBcXG4gICAgICAgXCIsXG4gIFwiRlwiOiBcIiAgIF9fX19cXG4gIC8gX18vXFxuIC8gXy8gIFxcbi9fLyAgICBcXG4gICAgICAgXCIsXG4gIFwiR1wiOiBcIiAgX19fX19cXG4gLyBfX18vXFxuLyAoXyAvIFxcblxcXFxfX18vICBcXG4gICAgICAgXCIsXG4gIFwiSFwiOiBcIiAgIF9fIF9fXFxuICAvIC8vIC9cXG4gLyBfICAvIFxcbi9fLy9fLyAgXFxuICAgICAgICBcIixcbiAgXCJJXCI6IFwiICAgX19fX1xcbiAgLyAgXy9cXG4gXy8gLyAgXFxuL19fXy8gIFxcbiAgICAgICBcIixcbiAgXCJKXCI6IFwiICAgICBfX1xcbiBfXyAvIC9cXG4vIC8vIC8gXFxuXFxcXF9fXy8gIFxcbiAgICAgICBcIixcbiAgXCJLXCI6IFwiICAgX18gX19cXG4gIC8gLy9fL1xcbiAvICw8ICAgXFxuL18vfF98ICBcXG4gICAgICAgIFwiLFxuICBcIkxcIjogXCIgICBfXyBcXG4gIC8gLyBcXG4gLyAvX19cXG4vX19fXy9cXG4gICAgICBcIixcbiAgXCJNXCI6IFwiICAgX18gIF9fX1xcbiAgLyAgfC8gIC9cXG4gLyAvfF8vIC8gXFxuL18vICAvXy8gIFxcbiAgICAgICAgICBcIixcbiAgXCJOXCI6IFwiICAgXyAgX19cXG4gIC8gfC8gL1xcbiAvICAgIC8gXFxuL18vfF8vICBcXG4gICAgICAgIFwiLFxuICBcIk9cIjogXCIgIF9fX18gXFxuIC8gX18gXFxcXFxcbi8gL18vIC9cXG5cXFxcX19fXy8gXFxuICAgICAgIFwiLFxuICBcIlBcIjogXCIgICBfX18gXFxuICAvIF8gXFxcXFxcbiAvIF9fXy9cXG4vXy8gICAgXFxuICAgICAgIFwiLFxuICBcIlFcIjogXCIgIF9fX18gXFxuIC8gX18gXFxcXFxcbi8gL18vIC9cXG5cXFxcX19fXFxcXF9cXFxcXFxuICAgICAgIFwiLFxuICBcIlJcIjogXCIgICBfX18gXFxuICAvIF8gXFxcXFxcbiAvICwgXy9cXG4vXy98X3wgXFxuICAgICAgIFwiLFxuICBcIlNcIjogXCIgICBfX19fXFxuICAvIF9fL1xcbiBfXFxcXCBcXFxcICBcXG4vX19fLyAgXFxuICAgICAgIFwiLFxuICBcIlRcIjogXCIgX19fX19fXFxuL18gIF9fL1xcbiAvIC8gICBcXG4vXy8gICAgXFxuICAgICAgIFwiLFxuICBcIlVcIjogXCIgIF9fICBfX1xcbiAvIC8gLyAvXFxuLyAvXy8gLyBcXG5cXFxcX19fXy8gIFxcbiAgICAgICAgXCIsXG4gIFwiVlwiOiBcIiAgXyAgIF9fXFxuIHwgfCAvIC9cXG4gfCB8LyAvIFxcbiB8X19fLyAgXFxuICAgICAgICBcIixcbiAgXCJXXCI6IFwiICBfICAgICAgX19cXG4gfCB8IC98IC8gL1xcbiB8IHwvIHwvIC8gXFxuIHxfXy98X18vICBcXG4gICAgICAgICAgIFwiLFxuICBcIlhcIjogXCIgICBfICBfX1xcbiAgfCB8L18vXFxuIF8+ICA8ICBcXG4vXy98X3wgIFxcbiAgICAgICAgXCIsXG4gIFwiWVwiOiBcIiBfXyAgX19cXG4gXFxcXCBcXFxcLyAvXFxuICBcXFxcICAvIFxcbiAgL18vICBcXG4gICAgICAgXCIsXG4gIFwiWlwiOiBcIiAgX19fX1xcbiAvXyAgL1xcbiAgLyAvX1xcbiAvX19fL1xcbiAgICAgIFwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNtYWxsU2xhbnQiXX0=