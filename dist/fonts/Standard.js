"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Standard = {
  "0": "   ___  \n  / _ \\ \n | | | |\n | |_| |\n  \\___/ \n        ",
  "1": "  _ \n / |\n | |\n | |\n |_|\n    ",
  "2": "  ____  \n |___ \\ \n   __) |\n  / __/ \n |_____|\n        ",
  "3": "  _____ \n |___ / \n   |_ \\ \n  ___) |\n |____/ \n        ",
  "4": "  _  _   \n | || |  \n | || |_ \n |__   _|\n    |_|  \n         ",
  "5": "  ____  \n | ___| \n |___ \\ \n  ___) |\n |____/ \n        ",
  "6": "   __   \n  / /_  \n | '_ \\ \n | (_) |\n  \\___/ \n        ",
  "7": "  _____ \n |___  |\n    / / \n   / /  \n  /_/   \n        ",
  "8": "   ___  \n  ( _ ) \n  / _ \\ \n | (_) |\n  \\___/ \n        ",
  "9": "   ___  \n  / _ \\ \n | (_) |\n  \\__, |\n    /_/ \n        ",
  "A": "     _    \n    / \\   \n   / _ \\  \n  / ___ \\ \n /_/   \\_\\\n          ",
  "B": "  ____  \n | __ ) \n |  _ \\ \n | |_) |\n |____/ \n        ",
  "C": "   ____ \n  / ___|\n | |    \n | |___ \n  \\____|\n        ",
  "D": "  ____  \n |  _ \\ \n | | | |\n | |_| |\n |____/ \n        ",
  "E": "  _____ \n | ____|\n |  _|  \n | |___ \n |_____|\n        ",
  "F": "  _____ \n |  ___|\n | |_   \n |  _|  \n |_|    \n        ",
  "G": "   ____ \n  / ___|\n | |  _ \n | |_| |\n  \\____|\n        ",
  "H": "  _   _ \n | | | |\n | |_| |\n |  _  |\n |_| |_|\n        ",
  "I": "  ___ \n |_ _|\n  | | \n  | | \n |___|\n      ",
  "J": "      _ \n     | |\n  _  | |\n | |_| |\n  \\___/ \n        ",
  "K": "  _  __\n | |/ /\n | ' / \n | . \\ \n |_|\\_\\\n       ",
  "L": "  _     \n | |    \n | |    \n | |___ \n |_____|\n        ",
  "M": "  __  __ \n |  \\/  |\n | |\\/| |\n | |  | |\n |_|  |_|\n         ",
  "N": "  _   _ \n | \\ | |\n |  \\| |\n | |\\  |\n |_| \\_|\n        ",
  "O": "   ___  \n  / _ \\ \n | | | |\n | |_| |\n  \\___/ \n        ",
  "P": "  ____  \n |  _ \\ \n | |_) |\n |  __/ \n |_|    \n        ",
  "Q": "   ___  \n  / _ \\ \n | | | |\n | |_| |\n  \\__\\_\\\n        ",
  "R": "  ____  \n |  _ \\ \n | |_) |\n |  _ < \n |_| \\_\\\n        ",
  "S": "  ____  \n / ___| \n \\___ \\ \n  ___) |\n |____/ \n        ",
  "T": "  _____ \n |_   _|\n   | |  \n   | |  \n   |_|  \n        ",
  "U": "  _   _ \n | | | |\n | | | |\n | |_| |\n  \\___/ \n        ",
  "V": " __     __\n \\ \\   / /\n  \\ \\ / / \n   \\ V /  \n    \\_/   \n          ",
  "W": " __        __\n \\ \\      / /\n  \\ \\ /\\ / / \n   \\ V  V /  \n    \\_/\\_/   \n             ",
  "X": " __  __\n \\ \\/ /\n  \\  / \n  /  \\ \n /_/\\_\\\n       ",
  "Y": " __   __\n \\ \\ / /\n  \\ V / \n   | |  \n   |_|  \n        ",
  "Z": "  _____\n |__  /\n   / / \n  / /_ \n /____|\n       "
};

exports.default = Standard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9TdGFuZGFyZC5qcyJdLCJuYW1lcyI6WyJTdGFuZGFyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBQ2YsT0FBSyw4REFEVTtBQUVmLE9BQUssb0NBRlU7QUFHZixPQUFLLDZEQUhVO0FBSWYsT0FBSyw2REFKVTtBQUtmLE9BQUssa0VBTFU7QUFNZixPQUFLLDZEQU5VO0FBT2YsT0FBSyw4REFQVTtBQVFmLE9BQUssNERBUlU7QUFTZixPQUFLLDhEQVRVO0FBVWYsT0FBSyw4REFWVTtBQVdmLE9BQUssNkVBWFU7QUFZZixPQUFLLDZEQVpVO0FBYWYsT0FBSyw2REFiVTtBQWNmLE9BQUssNkRBZFU7QUFlZixPQUFLLDREQWZVO0FBZ0JmLE9BQUssNERBaEJVO0FBaUJmLE9BQUssNkRBakJVO0FBa0JmLE9BQUssNERBbEJVO0FBbUJmLE9BQUssZ0RBbkJVO0FBb0JmLE9BQUssNkRBcEJVO0FBcUJmLE9BQUsseURBckJVO0FBc0JmLE9BQUssNERBdEJVO0FBdUJmLE9BQUssb0VBdkJVO0FBd0JmLE9BQUssZ0VBeEJVO0FBeUJmLE9BQUssOERBekJVO0FBMEJmLE9BQUssNkRBMUJVO0FBMkJmLE9BQUssZ0VBM0JVO0FBNEJmLE9BQUssK0RBNUJVO0FBNkJmLE9BQUssOERBN0JVO0FBOEJmLE9BQUssNERBOUJVO0FBK0JmLE9BQUssNkRBL0JVO0FBZ0NmLE9BQUssOEVBaENVO0FBaUNmLE9BQUssa0dBakNVO0FBa0NmLE9BQUssNERBbENVO0FBbUNmLE9BQUssK0RBbkNVO0FBb0NmLE9BQUs7QUFwQ1UsQ0FBakI7O2tCQXVDZUEsUSIsImZpbGUiOiJTdGFuZGFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0YW5kYXJkID0ge1xuICBcIjBcIjogXCIgICBfX18gIFxcbiAgLyBfIFxcXFwgXFxuIHwgfCB8IHxcXG4gfCB8X3wgfFxcbiAgXFxcXF9fXy8gXFxuICAgICAgICBcIixcbiAgXCIxXCI6IFwiICBfIFxcbiAvIHxcXG4gfCB8XFxuIHwgfFxcbiB8X3xcXG4gICAgXCIsXG4gIFwiMlwiOiBcIiAgX19fXyAgXFxuIHxfX18gXFxcXCBcXG4gICBfXykgfFxcbiAgLyBfXy8gXFxuIHxfX19fX3xcXG4gICAgICAgIFwiLFxuICBcIjNcIjogXCIgIF9fX19fIFxcbiB8X19fIC8gXFxuICAgfF8gXFxcXCBcXG4gIF9fXykgfFxcbiB8X19fXy8gXFxuICAgICAgICBcIixcbiAgXCI0XCI6IFwiICBfICBfICAgXFxuIHwgfHwgfCAgXFxuIHwgfHwgfF8gXFxuIHxfXyAgIF98XFxuICAgIHxffCAgXFxuICAgICAgICAgXCIsXG4gIFwiNVwiOiBcIiAgX19fXyAgXFxuIHwgX19ffCBcXG4gfF9fXyBcXFxcIFxcbiAgX19fKSB8XFxuIHxfX19fLyBcXG4gICAgICAgIFwiLFxuICBcIjZcIjogXCIgICBfXyAgIFxcbiAgLyAvXyAgXFxuIHwgJ18gXFxcXCBcXG4gfCAoXykgfFxcbiAgXFxcXF9fXy8gXFxuICAgICAgICBcIixcbiAgXCI3XCI6IFwiICBfX19fXyBcXG4gfF9fXyAgfFxcbiAgICAvIC8gXFxuICAgLyAvICBcXG4gIC9fLyAgIFxcbiAgICAgICAgXCIsXG4gIFwiOFwiOiBcIiAgIF9fXyAgXFxuICAoIF8gKSBcXG4gIC8gXyBcXFxcIFxcbiB8IChfKSB8XFxuICBcXFxcX19fLyBcXG4gICAgICAgIFwiLFxuICBcIjlcIjogXCIgICBfX18gIFxcbiAgLyBfIFxcXFwgXFxuIHwgKF8pIHxcXG4gIFxcXFxfXywgfFxcbiAgICAvXy8gXFxuICAgICAgICBcIixcbiAgXCJBXCI6IFwiICAgICBfICAgIFxcbiAgICAvIFxcXFwgICBcXG4gICAvIF8gXFxcXCAgXFxuICAvIF9fXyBcXFxcIFxcbiAvXy8gICBcXFxcX1xcXFxcXG4gICAgICAgICAgXCIsXG4gIFwiQlwiOiBcIiAgX19fXyAgXFxuIHwgX18gKSBcXG4gfCAgXyBcXFxcIFxcbiB8IHxfKSB8XFxuIHxfX19fLyBcXG4gICAgICAgIFwiLFxuICBcIkNcIjogXCIgICBfX19fIFxcbiAgLyBfX198XFxuIHwgfCAgICBcXG4gfCB8X19fIFxcbiAgXFxcXF9fX198XFxuICAgICAgICBcIixcbiAgXCJEXCI6IFwiICBfX19fICBcXG4gfCAgXyBcXFxcIFxcbiB8IHwgfCB8XFxuIHwgfF98IHxcXG4gfF9fX18vIFxcbiAgICAgICAgXCIsXG4gIFwiRVwiOiBcIiAgX19fX18gXFxuIHwgX19fX3xcXG4gfCAgX3wgIFxcbiB8IHxfX18gXFxuIHxfX19fX3xcXG4gICAgICAgIFwiLFxuICBcIkZcIjogXCIgIF9fX19fIFxcbiB8ICBfX198XFxuIHwgfF8gICBcXG4gfCAgX3wgIFxcbiB8X3wgICAgXFxuICAgICAgICBcIixcbiAgXCJHXCI6IFwiICAgX19fXyBcXG4gIC8gX19ffFxcbiB8IHwgIF8gXFxuIHwgfF98IHxcXG4gIFxcXFxfX19ffFxcbiAgICAgICAgXCIsXG4gIFwiSFwiOiBcIiAgXyAgIF8gXFxuIHwgfCB8IHxcXG4gfCB8X3wgfFxcbiB8ICBfICB8XFxuIHxffCB8X3xcXG4gICAgICAgIFwiLFxuICBcIklcIjogXCIgIF9fXyBcXG4gfF8gX3xcXG4gIHwgfCBcXG4gIHwgfCBcXG4gfF9fX3xcXG4gICAgICBcIixcbiAgXCJKXCI6IFwiICAgICAgXyBcXG4gICAgIHwgfFxcbiAgXyAgfCB8XFxuIHwgfF98IHxcXG4gIFxcXFxfX18vIFxcbiAgICAgICAgXCIsXG4gIFwiS1wiOiBcIiAgXyAgX19cXG4gfCB8LyAvXFxuIHwgJyAvIFxcbiB8IC4gXFxcXCBcXG4gfF98XFxcXF9cXFxcXFxuICAgICAgIFwiLFxuICBcIkxcIjogXCIgIF8gICAgIFxcbiB8IHwgICAgXFxuIHwgfCAgICBcXG4gfCB8X19fIFxcbiB8X19fX198XFxuICAgICAgICBcIixcbiAgXCJNXCI6IFwiICBfXyAgX18gXFxuIHwgIFxcXFwvICB8XFxuIHwgfFxcXFwvfCB8XFxuIHwgfCAgfCB8XFxuIHxffCAgfF98XFxuICAgICAgICAgXCIsXG4gIFwiTlwiOiBcIiAgXyAgIF8gXFxuIHwgXFxcXCB8IHxcXG4gfCAgXFxcXHwgfFxcbiB8IHxcXFxcICB8XFxuIHxffCBcXFxcX3xcXG4gICAgICAgIFwiLFxuICBcIk9cIjogXCIgICBfX18gIFxcbiAgLyBfIFxcXFwgXFxuIHwgfCB8IHxcXG4gfCB8X3wgfFxcbiAgXFxcXF9fXy8gXFxuICAgICAgICBcIixcbiAgXCJQXCI6IFwiICBfX19fICBcXG4gfCAgXyBcXFxcIFxcbiB8IHxfKSB8XFxuIHwgIF9fLyBcXG4gfF98ICAgIFxcbiAgICAgICAgXCIsXG4gIFwiUVwiOiBcIiAgIF9fXyAgXFxuICAvIF8gXFxcXCBcXG4gfCB8IHwgfFxcbiB8IHxffCB8XFxuICBcXFxcX19cXFxcX1xcXFxcXG4gICAgICAgIFwiLFxuICBcIlJcIjogXCIgIF9fX18gIFxcbiB8ICBfIFxcXFwgXFxuIHwgfF8pIHxcXG4gfCAgXyA8IFxcbiB8X3wgXFxcXF9cXFxcXFxuICAgICAgICBcIixcbiAgXCJTXCI6IFwiICBfX19fICBcXG4gLyBfX198IFxcbiBcXFxcX19fIFxcXFwgXFxuICBfX18pIHxcXG4gfF9fX18vIFxcbiAgICAgICAgXCIsXG4gIFwiVFwiOiBcIiAgX19fX18gXFxuIHxfICAgX3xcXG4gICB8IHwgIFxcbiAgIHwgfCAgXFxuICAgfF98ICBcXG4gICAgICAgIFwiLFxuICBcIlVcIjogXCIgIF8gICBfIFxcbiB8IHwgfCB8XFxuIHwgfCB8IHxcXG4gfCB8X3wgfFxcbiAgXFxcXF9fXy8gXFxuICAgICAgICBcIixcbiAgXCJWXCI6IFwiIF9fICAgICBfX1xcbiBcXFxcIFxcXFwgICAvIC9cXG4gIFxcXFwgXFxcXCAvIC8gXFxuICAgXFxcXCBWIC8gIFxcbiAgICBcXFxcXy8gICBcXG4gICAgICAgICAgXCIsXG4gIFwiV1wiOiBcIiBfXyAgICAgICAgX19cXG4gXFxcXCBcXFxcICAgICAgLyAvXFxuICBcXFxcIFxcXFwgL1xcXFwgLyAvIFxcbiAgIFxcXFwgViAgViAvICBcXG4gICAgXFxcXF8vXFxcXF8vICAgXFxuICAgICAgICAgICAgIFwiLFxuICBcIlhcIjogXCIgX18gIF9fXFxuIFxcXFwgXFxcXC8gL1xcbiAgXFxcXCAgLyBcXG4gIC8gIFxcXFwgXFxuIC9fL1xcXFxfXFxcXFxcbiAgICAgICBcIixcbiAgXCJZXCI6IFwiIF9fICAgX19cXG4gXFxcXCBcXFxcIC8gL1xcbiAgXFxcXCBWIC8gXFxuICAgfCB8ICBcXG4gICB8X3wgIFxcbiAgICAgICAgXCIsXG4gIFwiWlwiOiBcIiAgX19fX19cXG4gfF9fICAvXFxuICAgLyAvIFxcbiAgLyAvXyBcXG4gL19fX198XFxuICAgICAgIFwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkIl19