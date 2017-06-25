"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Ogre = {
  "0": "  ___  \n / _ \\ \n| | | |\n| |_| |\n \\___/ \n       ",
  "1": " _ \n/ |\n| |\n| |\n|_|\n   ",
  "2": " ____  \n|___ \\ \n  __) |\n / __/ \n|_____|\n       ",
  "3": " _____ \n|___ / \n  |_ \\ \n ___) |\n|____/ \n       ",
  "4": " _  _   \n| || |  \n| || |_ \n|__   _|\n   |_|  \n        ",
  "5": " ____  \n| ___| \n|___ \\ \n ___) |\n|____/ \n       ",
  "6": "  __   \n / /_  \n| '_ \\ \n| (_) |\n \\___/ \n       ",
  "7": " _____ \n|___  |\n   / / \n  / /  \n /_/   \n       ",
  "8": "  ___  \n ( _ ) \n / _ \\ \n| (_) |\n \\___/ \n       ",
  "9": "  ___  \n / _ \\ \n| (_) |\n \\__, |\n   /_/ \n       ",
  "A": "   _   \n  /_\\  \n //_\\\\ \n/  _  \\\n\\_/ \\_/\n       ",
  "B": "   ___ \n  / __\\\n /__\\//\n/ \\/  \\\n\\_____/\n       ",
  "C": "   ___ \n  / __\\\n / /   \n/ /___ \n\\____/ \n       ",
  "D": "    ___ \n   /   \\\n  / /\\ /\n / /_// \n/___,'  \n        ",
  "E": "   __ \n  /__\\\n /_\\  \n//__  \n\\__/  \n      ",
  "F": "   ___ \n  / __\\\n / _\\  \n/ /    \n\\/     \n       ",
  "G": "   ___ \n  / _ \\\n / /_\\/\n/ /_\\\\ \n\\____/ \n       ",
  "H": "        \n  /\\  /\\\n / /_/ /\n/ __  / \n\\/ /_/  \n        ",
  "I": "  _____ \n  \\_   \\\n   / /\\/\n/\\/ /_  \n\\____/  \n        ",
  "J": "   __  \n   \\ \\ \n    \\ \\\n /\\_/ /\n \\___/ \n       ",
  "K": "       \n  /\\ /\\\n / //_/\n/ __ \\ \n\\/  \\/ \n       ",
  "L": "   __  \n  / /  \n / /   \n/ /___ \n\\____/ \n       ",
  "M": "        \n  /\\/\\  \n /    \\ \n/ /\\/\\ \\\n\\/    \\/\n        ",
  "N": "     __ \n  /\\ \\ \\\n /  \\/ /\n/ /\\  / \n\\_\\ \\/  \n        ",
  "O": "   ___ \n  /___\\\n //  //\n/ \\_// \n\\___/  \n       ",
  "P": "   ___ \n  / _ \\\n / /_)/\n/ ___/ \n\\/     \n       ",
  "Q": "   ____ \n  /___ \\\n //  / /\n/ \\_/ / \n\\___,_\\ \n        ",
  "R": "   __  \n  /__\\ \n / \\// \n/ _  \\ \n\\/ \\_/ \n       ",
  "S": " __    \n/ _\\   \n\\ \\    \n_\\ \\   \n\\__/   \n       ",
  "T": " _____ \n/__   \\\n  / /\\/\n / /   \n \\/    \n       ",
  "U": "       \n /\\ /\\ \n/ / \\ \\\n\\ \\_/ /\n \\___/ \n       ",
  "V": "         \n /\\   /\\ \n \\ \\ / / \n  \\ V /  \n   \\_/   \n         ",
  "W": " __    __ \n/ / /\\ \\ \\\n\\ \\/  \\/ /\n \\  /\\  / \n  \\/  \\/  \n          ",
  "X": "__  __\n\\ \\/ /\n \\  / \n /  \\ \n/_/\\_\\\n      ",
  "Y": "     \n/\\_/\\\n\\_ _/\n / \\ \n \\_/ \n     ",
  "Z": " _____\n/ _  /\n\\// / \n / //\\\n/____/\n      "
};

exports.default = Ogre;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9PZ3JlLmpzIl0sIm5hbWVzIjpbIk9ncmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsT0FBTztBQUNYLE9BQUssd0RBRE07QUFFWCxPQUFLLDhCQUZNO0FBR1gsT0FBSyx1REFITTtBQUlYLE9BQUssdURBSk07QUFLWCxPQUFLLDREQUxNO0FBTVgsT0FBSyx1REFOTTtBQU9YLE9BQUssd0RBUE07QUFRWCxPQUFLLHNEQVJNO0FBU1gsT0FBSyx3REFUTTtBQVVYLE9BQUssd0RBVk07QUFXWCxPQUFLLDREQVhNO0FBWVgsT0FBSywyREFaTTtBQWFYLE9BQUssd0RBYk07QUFjWCxPQUFLLDhEQWRNO0FBZVgsT0FBSyxtREFmTTtBQWdCWCxPQUFLLHlEQWhCTTtBQWlCWCxPQUFLLDJEQWpCTTtBQWtCWCxPQUFLLCtEQWxCTTtBQW1CWCxPQUFLLGlFQW5CTTtBQW9CWCxPQUFLLDREQXBCTTtBQXFCWCxPQUFLLDJEQXJCTTtBQXNCWCxPQUFLLHVEQXRCTTtBQXVCWCxPQUFLLG9FQXZCTTtBQXdCWCxPQUFLLG9FQXhCTTtBQXlCWCxPQUFLLHlEQXpCTTtBQTBCWCxPQUFLLHdEQTFCTTtBQTJCWCxPQUFLLGdFQTNCTTtBQTRCWCxPQUFLLDJEQTVCTTtBQTZCWCxPQUFLLDREQTdCTTtBQThCWCxPQUFLLHlEQTlCTTtBQStCWCxPQUFLLDZEQS9CTTtBQWdDWCxPQUFLLHdFQWhDTTtBQWlDWCxPQUFLLGtGQWpDTTtBQWtDWCxPQUFLLHNEQWxDTTtBQW1DWCxPQUFLLCtDQW5DTTtBQW9DWCxPQUFLO0FBcENNLENBQWI7O2tCQXVDZUEsSSIsImZpbGUiOiJPZ3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT2dyZSA9IHtcbiAgXCIwXCI6IFwiICBfX18gIFxcbiAvIF8gXFxcXCBcXG58IHwgfCB8XFxufCB8X3wgfFxcbiBcXFxcX19fLyBcXG4gICAgICAgXCIsXG4gIFwiMVwiOiBcIiBfIFxcbi8gfFxcbnwgfFxcbnwgfFxcbnxffFxcbiAgIFwiLFxuICBcIjJcIjogXCIgX19fXyAgXFxufF9fXyBcXFxcIFxcbiAgX18pIHxcXG4gLyBfXy8gXFxufF9fX19ffFxcbiAgICAgICBcIixcbiAgXCIzXCI6IFwiIF9fX19fIFxcbnxfX18gLyBcXG4gIHxfIFxcXFwgXFxuIF9fXykgfFxcbnxfX19fLyBcXG4gICAgICAgXCIsXG4gIFwiNFwiOiBcIiBfICBfICAgXFxufCB8fCB8ICBcXG58IHx8IHxfIFxcbnxfXyAgIF98XFxuICAgfF98ICBcXG4gICAgICAgIFwiLFxuICBcIjVcIjogXCIgX19fXyAgXFxufCBfX198IFxcbnxfX18gXFxcXCBcXG4gX19fKSB8XFxufF9fX18vIFxcbiAgICAgICBcIixcbiAgXCI2XCI6IFwiICBfXyAgIFxcbiAvIC9fICBcXG58ICdfIFxcXFwgXFxufCAoXykgfFxcbiBcXFxcX19fLyBcXG4gICAgICAgXCIsXG4gIFwiN1wiOiBcIiBfX19fXyBcXG58X19fICB8XFxuICAgLyAvIFxcbiAgLyAvICBcXG4gL18vICAgXFxuICAgICAgIFwiLFxuICBcIjhcIjogXCIgIF9fXyAgXFxuICggXyApIFxcbiAvIF8gXFxcXCBcXG58IChfKSB8XFxuIFxcXFxfX18vIFxcbiAgICAgICBcIixcbiAgXCI5XCI6IFwiICBfX18gIFxcbiAvIF8gXFxcXCBcXG58IChfKSB8XFxuIFxcXFxfXywgfFxcbiAgIC9fLyBcXG4gICAgICAgXCIsXG4gIFwiQVwiOiBcIiAgIF8gICBcXG4gIC9fXFxcXCAgXFxuIC8vX1xcXFxcXFxcIFxcbi8gIF8gIFxcXFxcXG5cXFxcXy8gXFxcXF8vXFxuICAgICAgIFwiLFxuICBcIkJcIjogXCIgICBfX18gXFxuICAvIF9fXFxcXFxcbiAvX19cXFxcLy9cXG4vIFxcXFwvICBcXFxcXFxuXFxcXF9fX19fL1xcbiAgICAgICBcIixcbiAgXCJDXCI6IFwiICAgX19fIFxcbiAgLyBfX1xcXFxcXG4gLyAvICAgXFxuLyAvX19fIFxcblxcXFxfX19fLyBcXG4gICAgICAgXCIsXG4gIFwiRFwiOiBcIiAgICBfX18gXFxuICAgLyAgIFxcXFxcXG4gIC8gL1xcXFwgL1xcbiAvIC9fLy8gXFxuL19fXywnICBcXG4gICAgICAgIFwiLFxuICBcIkVcIjogXCIgICBfXyBcXG4gIC9fX1xcXFxcXG4gL19cXFxcICBcXG4vL19fICBcXG5cXFxcX18vICBcXG4gICAgICBcIixcbiAgXCJGXCI6IFwiICAgX19fIFxcbiAgLyBfX1xcXFxcXG4gLyBfXFxcXCAgXFxuLyAvICAgIFxcblxcXFwvICAgICBcXG4gICAgICAgXCIsXG4gIFwiR1wiOiBcIiAgIF9fXyBcXG4gIC8gXyBcXFxcXFxuIC8gL19cXFxcL1xcbi8gL19cXFxcXFxcXCBcXG5cXFxcX19fXy8gXFxuICAgICAgIFwiLFxuICBcIkhcIjogXCIgICAgICAgIFxcbiAgL1xcXFwgIC9cXFxcXFxuIC8gL18vIC9cXG4vIF9fICAvIFxcblxcXFwvIC9fLyAgXFxuICAgICAgICBcIixcbiAgXCJJXCI6IFwiICBfX19fXyBcXG4gIFxcXFxfICAgXFxcXFxcbiAgIC8gL1xcXFwvXFxuL1xcXFwvIC9fICBcXG5cXFxcX19fXy8gIFxcbiAgICAgICAgXCIsXG4gIFwiSlwiOiBcIiAgIF9fICBcXG4gICBcXFxcIFxcXFwgXFxuICAgIFxcXFwgXFxcXFxcbiAvXFxcXF8vIC9cXG4gXFxcXF9fXy8gXFxuICAgICAgIFwiLFxuICBcIktcIjogXCIgICAgICAgXFxuICAvXFxcXCAvXFxcXFxcbiAvIC8vXy9cXG4vIF9fIFxcXFwgXFxuXFxcXC8gIFxcXFwvIFxcbiAgICAgICBcIixcbiAgXCJMXCI6IFwiICAgX18gIFxcbiAgLyAvICBcXG4gLyAvICAgXFxuLyAvX19fIFxcblxcXFxfX19fLyBcXG4gICAgICAgXCIsXG4gIFwiTVwiOiBcIiAgICAgICAgXFxuICAvXFxcXC9cXFxcICBcXG4gLyAgICBcXFxcIFxcbi8gL1xcXFwvXFxcXCBcXFxcXFxuXFxcXC8gICAgXFxcXC9cXG4gICAgICAgIFwiLFxuICBcIk5cIjogXCIgICAgIF9fIFxcbiAgL1xcXFwgXFxcXCBcXFxcXFxuIC8gIFxcXFwvIC9cXG4vIC9cXFxcICAvIFxcblxcXFxfXFxcXCBcXFxcLyAgXFxuICAgICAgICBcIixcbiAgXCJPXCI6IFwiICAgX19fIFxcbiAgL19fX1xcXFxcXG4gLy8gIC8vXFxuLyBcXFxcXy8vIFxcblxcXFxfX18vICBcXG4gICAgICAgXCIsXG4gIFwiUFwiOiBcIiAgIF9fXyBcXG4gIC8gXyBcXFxcXFxuIC8gL18pL1xcbi8gX19fLyBcXG5cXFxcLyAgICAgXFxuICAgICAgIFwiLFxuICBcIlFcIjogXCIgICBfX19fIFxcbiAgL19fXyBcXFxcXFxuIC8vICAvIC9cXG4vIFxcXFxfLyAvIFxcblxcXFxfX18sX1xcXFwgXFxuICAgICAgICBcIixcbiAgXCJSXCI6IFwiICAgX18gIFxcbiAgL19fXFxcXCBcXG4gLyBcXFxcLy8gXFxuLyBfICBcXFxcIFxcblxcXFwvIFxcXFxfLyBcXG4gICAgICAgXCIsXG4gIFwiU1wiOiBcIiBfXyAgICBcXG4vIF9cXFxcICAgXFxuXFxcXCBcXFxcICAgIFxcbl9cXFxcIFxcXFwgICBcXG5cXFxcX18vICAgXFxuICAgICAgIFwiLFxuICBcIlRcIjogXCIgX19fX18gXFxuL19fICAgXFxcXFxcbiAgLyAvXFxcXC9cXG4gLyAvICAgXFxuIFxcXFwvICAgIFxcbiAgICAgICBcIixcbiAgXCJVXCI6IFwiICAgICAgIFxcbiAvXFxcXCAvXFxcXCBcXG4vIC8gXFxcXCBcXFxcXFxuXFxcXCBcXFxcXy8gL1xcbiBcXFxcX19fLyBcXG4gICAgICAgXCIsXG4gIFwiVlwiOiBcIiAgICAgICAgIFxcbiAvXFxcXCAgIC9cXFxcIFxcbiBcXFxcIFxcXFwgLyAvIFxcbiAgXFxcXCBWIC8gIFxcbiAgIFxcXFxfLyAgIFxcbiAgICAgICAgIFwiLFxuICBcIldcIjogXCIgX18gICAgX18gXFxuLyAvIC9cXFxcIFxcXFwgXFxcXFxcblxcXFwgXFxcXC8gIFxcXFwvIC9cXG4gXFxcXCAgL1xcXFwgIC8gXFxuICBcXFxcLyAgXFxcXC8gIFxcbiAgICAgICAgICBcIixcbiAgXCJYXCI6IFwiX18gIF9fXFxuXFxcXCBcXFxcLyAvXFxuIFxcXFwgIC8gXFxuIC8gIFxcXFwgXFxuL18vXFxcXF9cXFxcXFxuICAgICAgXCIsXG4gIFwiWVwiOiBcIiAgICAgXFxuL1xcXFxfL1xcXFxcXG5cXFxcXyBfL1xcbiAvIFxcXFwgXFxuIFxcXFxfLyBcXG4gICAgIFwiLFxuICBcIlpcIjogXCIgX19fX19cXG4vIF8gIC9cXG5cXFxcLy8gLyBcXG4gLyAvL1xcXFxcXG4vX19fXy9cXG4gICAgICBcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBPZ3JlIl19