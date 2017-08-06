"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const JSBracketLetters = {
  "0": "\n\n",
  "1": "\n\n",
  "2": "\n\n",
  "3": "\n\n",
  "4": "\n\n",
  "5": "\n\n",
  "6": "\n\n",
  "7": "\n\n",
  "8": "\n\n",
  "9": "\n\n",
  "A": "  .--.  \n / {} \\ \n/  /\\  \\\n`-'  `-'",
  "B": ".----. \n| {}  }\n| {}  }\n`----' ",
  "C": " .---. \n/  ___}\n\\     }\n `---' ",
  "D": ".----. \n| {}  \\\n|     /\n`----' ",
  "E": ".----.\n| {_  \n| {__ \n`----'",
  "F": ".----.\n| {_  \n| |   \n`-'   ",
  "G": " .---. \n/   __}\n\\  {_ }\n `---' ",
  "H": ".-. .-.\n| {_} |\n| { } |\n`-' `-'",
  "I": ".-.\n| |\n| |\n`-'",
  "J": "   .-.\n.-.| |\n| {} |\n`----'",
  "K": ".-. .-.\n| |/ / \n| |\\ \\ \n`-' `-'",
  "L": ".-.   \n| |   \n| `--.\n`----'",
  "M": ".-.   .-.\n|  `.'  |\n| |\\ /| |\n`-' ` `-'",
  "N": ".-. .-.\n|  `| |\n| |\\  |\n`-' `-'",
  "O": " .----. \n/  {}  \\\n\\      /\n `----' ",
  "P": ".----. \n| {}  }\n| .--' \n`-'    ",
  "Q": " .----. \n/  {}  \\\n\\      /\n `-----`",
  "R": ".----. \n| {}  }\n| .-. \\\n`-' `-'",
  "S": " .----.\n{ {__  \n.-._} }\n`----' ",
  "T": " .---. \n{_   _}\n  | |  \n  `-'  ",
  "U": ".-. .-.\n| { } |\n| {_} |\n`-----'",
  "V": ".-. .-.\n| | | |\n\\ \\_/ /\n `---' ",
  "W": ".-. . .-.\n| |/ \\| |\n|  .'.  |\n`-'   `-'",
  "X": ".-.  .-.\n \\ \\/ / \n / /\\ \\ \n`-'  `-'",
  "Y": ".-.  .-.\n \\ \\/ / \n  }  {  \n  `--'  ",
  "Z": " .---. \n{_   / \n /    }\n `---' "

};

exports.default = JSBracketLetters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9KU0JyYWNrZXRMZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkpTQnJhY2tldExldHRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsbUJBQW1CO0FBQ3ZCLE9BQUssTUFEa0I7QUFFdkIsT0FBSyxNQUZrQjtBQUd2QixPQUFLLE1BSGtCO0FBSXZCLE9BQUssTUFKa0I7QUFLdkIsT0FBSyxNQUxrQjtBQU12QixPQUFLLE1BTmtCO0FBT3ZCLE9BQUssTUFQa0I7QUFRdkIsT0FBSyxNQVJrQjtBQVN2QixPQUFLLE1BVGtCO0FBVXZCLE9BQUssTUFWa0I7QUFXdkIsT0FBSywyQ0FYa0I7QUFZdkIsT0FBSyxvQ0Faa0I7QUFhdkIsT0FBSyxxQ0Fia0I7QUFjdkIsT0FBSyxxQ0Fka0I7QUFldkIsT0FBSyxnQ0Fma0I7QUFnQnZCLE9BQUssZ0NBaEJrQjtBQWlCdkIsT0FBSyxxQ0FqQmtCO0FBa0J2QixPQUFLLG9DQWxCa0I7QUFtQnZCLE9BQUssb0JBbkJrQjtBQW9CdkIsT0FBSyxnQ0FwQmtCO0FBcUJ2QixPQUFLLHNDQXJCa0I7QUFzQnZCLE9BQUssZ0NBdEJrQjtBQXVCdkIsT0FBSyw2Q0F2QmtCO0FBd0J2QixPQUFLLHFDQXhCa0I7QUF5QnZCLE9BQUssMENBekJrQjtBQTBCdkIsT0FBSyxvQ0ExQmtCO0FBMkJ2QixPQUFLLDBDQTNCa0I7QUE0QnZCLE9BQUsscUNBNUJrQjtBQTZCdkIsT0FBSyxvQ0E3QmtCO0FBOEJ2QixPQUFLLG9DQTlCa0I7QUErQnZCLE9BQUssb0NBL0JrQjtBQWdDdkIsT0FBSyxzQ0FoQ2tCO0FBaUN2QixPQUFLLDZDQWpDa0I7QUFrQ3ZCLE9BQUssNENBbENrQjtBQW1DdkIsT0FBSywwQ0FuQ2tCO0FBb0N2QixPQUFLOztBQXBDa0IsQ0FBekI7O2tCQXdDZUEsZ0IiLCJmaWxlIjoiSlNCcmFja2V0TGV0dGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEpTQnJhY2tldExldHRlcnMgPSB7XG4gIFwiMFwiOiBcIlxcblxcblwiLFxuICBcIjFcIjogXCJcXG5cXG5cIixcbiAgXCIyXCI6IFwiXFxuXFxuXCIsXG4gIFwiM1wiOiBcIlxcblxcblwiLFxuICBcIjRcIjogXCJcXG5cXG5cIixcbiAgXCI1XCI6IFwiXFxuXFxuXCIsXG4gIFwiNlwiOiBcIlxcblxcblwiLFxuICBcIjdcIjogXCJcXG5cXG5cIixcbiAgXCI4XCI6IFwiXFxuXFxuXCIsXG4gIFwiOVwiOiBcIlxcblxcblwiLFxuICBcIkFcIjogXCIgIC4tLS4gIFxcbiAvIHt9IFxcXFwgXFxuLyAgL1xcXFwgIFxcXFxcXG5gLScgIGAtJ1wiLFxuICBcIkJcIjogXCIuLS0tLS4gXFxufCB7fSAgfVxcbnwge30gIH1cXG5gLS0tLScgXCIsXG4gIFwiQ1wiOiBcIiAuLS0tLiBcXG4vICBfX199XFxuXFxcXCAgICAgfVxcbiBgLS0tJyBcIixcbiAgXCJEXCI6IFwiLi0tLS0uIFxcbnwge30gIFxcXFxcXG58ICAgICAvXFxuYC0tLS0nIFwiLFxuICBcIkVcIjogXCIuLS0tLS5cXG58IHtfICBcXG58IHtfXyBcXG5gLS0tLSdcIixcbiAgXCJGXCI6IFwiLi0tLS0uXFxufCB7XyAgXFxufCB8ICAgXFxuYC0nICAgXCIsXG4gIFwiR1wiOiBcIiAuLS0tLiBcXG4vICAgX199XFxuXFxcXCAge18gfVxcbiBgLS0tJyBcIixcbiAgXCJIXCI6IFwiLi0uIC4tLlxcbnwge199IHxcXG58IHsgfSB8XFxuYC0nIGAtJ1wiLFxuICBcIklcIjogXCIuLS5cXG58IHxcXG58IHxcXG5gLSdcIixcbiAgXCJKXCI6IFwiICAgLi0uXFxuLi0ufCB8XFxufCB7fSB8XFxuYC0tLS0nXCIsXG4gIFwiS1wiOiBcIi4tLiAuLS5cXG58IHwvIC8gXFxufCB8XFxcXCBcXFxcIFxcbmAtJyBgLSdcIixcbiAgXCJMXCI6IFwiLi0uICAgXFxufCB8ICAgXFxufCBgLS0uXFxuYC0tLS0nXCIsXG4gIFwiTVwiOiBcIi4tLiAgIC4tLlxcbnwgIGAuJyAgfFxcbnwgfFxcXFwgL3wgfFxcbmAtJyBgIGAtJ1wiLFxuICBcIk5cIjogXCIuLS4gLi0uXFxufCAgYHwgfFxcbnwgfFxcXFwgIHxcXG5gLScgYC0nXCIsXG4gIFwiT1wiOiBcIiAuLS0tLS4gXFxuLyAge30gIFxcXFxcXG5cXFxcICAgICAgL1xcbiBgLS0tLScgXCIsXG4gIFwiUFwiOiBcIi4tLS0tLiBcXG58IHt9ICB9XFxufCAuLS0nIFxcbmAtJyAgICBcIixcbiAgXCJRXCI6IFwiIC4tLS0tLiBcXG4vICB7fSAgXFxcXFxcblxcXFwgICAgICAvXFxuIGAtLS0tLWBcIixcbiAgXCJSXCI6IFwiLi0tLS0uIFxcbnwge30gIH1cXG58IC4tLiBcXFxcXFxuYC0nIGAtJ1wiLFxuICBcIlNcIjogXCIgLi0tLS0uXFxueyB7X18gIFxcbi4tLl99IH1cXG5gLS0tLScgXCIsXG4gIFwiVFwiOiBcIiAuLS0tLiBcXG57XyAgIF99XFxuICB8IHwgIFxcbiAgYC0nICBcIixcbiAgXCJVXCI6IFwiLi0uIC4tLlxcbnwgeyB9IHxcXG58IHtffSB8XFxuYC0tLS0tJ1wiLFxuICBcIlZcIjogXCIuLS4gLi0uXFxufCB8IHwgfFxcblxcXFwgXFxcXF8vIC9cXG4gYC0tLScgXCIsXG4gIFwiV1wiOiBcIi4tLiAuIC4tLlxcbnwgfC8gXFxcXHwgfFxcbnwgIC4nLiAgfFxcbmAtJyAgIGAtJ1wiLFxuICBcIlhcIjogXCIuLS4gIC4tLlxcbiBcXFxcIFxcXFwvIC8gXFxuIC8gL1xcXFwgXFxcXCBcXG5gLScgIGAtJ1wiLFxuICBcIllcIjogXCIuLS4gIC4tLlxcbiBcXFxcIFxcXFwvIC8gXFxuICB9ICB7ICBcXG4gIGAtLScgIFwiLFxuICBcIlpcIjogXCIgLi0tLS4gXFxue18gICAvIFxcbiAvICAgIH1cXG4gYC0tLScgXCJcblxufVxuXG5leHBvcnQgZGVmYXVsdCBKU0JyYWNrZXRMZXR0ZXJzIl19