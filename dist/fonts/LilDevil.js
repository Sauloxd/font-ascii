"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const LilDevil = {
  "0": "           \n           \n  .----.   \n /  ..  \\  \n|  /  \\  . \n'  \\  /  ' \n \\  `'  /  \n  `---''   ",
  "1": "      \n      \n .--. \n/_  | \n |  | \n |  | \n |  | \n `--' ",
  "2": "         \n         \n .----.  \n\\_,-.  | \n   .' .' \n .'  /_  \n|      | \n`------' ",
  "3": "         \n         \n .----.  \n\\_.-,  | \n  |_  <  \n.-. \\  | \n\\ `-'  / \n `---''  ",
  "4": "          \n          \n   .---.  \n  / .  |  \n / /|  |  \n/ '-'  || \n`---|  |' \n    `--'  ",
  "5": "         \n         \n.-----.  \n|   __|  \n`--.  '. \n.-  |  | \n| `-'  / \n `---''  ",
  "6": "         \n         \n  ,--.   \n /  .'   \n.  / -.  \n'  .-. \\ \n\\  `-' / \n `----'  ",
  "7": "          \n          \n.-------. \n|   _   ' \n`-' /  /  \n   .  /   \n  /  /    \n `--'     ",
  "8": "         \n         \n .----.  \n/ .-.  \\ \n\\ '-'  / \n/ /`.  \\ \n\\ '-'  / \n `---''  ",
  "9": "          \n          \n .----.   \n/ ,-.  \\  \n\\ '-'   . \n `- /  .' \n  .'  /   \n  `--'    ",
  "A": " (`-')  _  \n (OO ).-/  \n / ,---.   \n | \\ /`.\\  \n '-'|_.' | \n(|  .-.  | \n |  | |  | \n `--' `--' ",
  "B": "<-.(`-')  \n __( OO)  \n'-'---.\\  \n| .-. (/  \n| '-' `.) \n| /`'.  | \n| '--'  / \n`------'  ",
  "C": "           \n _         \n \\-,-----. \n  |  .--./ \n /_) (`-') \n ||  |OO ) \n(_'  '--'\\ \n   `-----' ",
  "D": " _(`-')    \n( (OO ).-> \n \\    .'_  \n '`'-..__) \n |  |  ' | \n |  |  / : \n |  '-'  / \n `------'  ",
  "E": " (`-')  _ \n ( OO).-/ \n(,------. \n |  .---' \n(|  '--.  \n |  .--'  \n |  `---. \n `------' ",
  "F": "           \n   <-.     \n(`-')-----.\n(OO|(_\\---'\n / |  '--. \n \\_)  .--' \n  `|  |_)  \n   `--'    ",
  "G": "           \n    .->    \n ,---(`-') \n'  .-(OO ) \n|  | .-, \\ \n|  | '.(_/ \n|  '-'  |  \n `-----'   ",
  "H": " (`-').-> \n (OO )__  \n,--. ,'-' \n|  | |  | \n|  `-'  | \n|  .-.  | \n|  | |  | \n`--' `--' ",
  "I": "  _      \n (_)     \n ,-(`-') \n | ( OO) \n |  |  ) \n(|  |_/  \n |  |'-> \n `--'    ",
  "J": "          \n          \n   <-.--. \n (`-'| ,| \n (OO |(_| \n,--. |  | \n|  '-'  / \n `-----'  ",
  "K": "<-.(`-')  \n __( OO)  \n'-'. ,--. \n|  .'   / \n|      /) \n|  .   '  \n|  |\\   \\ \n`--' '--' ",
  "L": "          \n   <-.    \n ,--. )   \n |  (`-') \n |  |OO ) \n(|  '__ | \n |     |' \n `-----'  ",
  "M": "<-. (`-')  \n   \\(OO )_ \n,--./  ,-.)\n|   `.'   |\n|  |'.'|  |\n|  |   |  |\n|  |   |  |\n`--'   `--'",
  "N": "<-. (`-')_ \n   \\( OO) )\n,--./ ,--/ \n|   \\ |  | \n|  . '|  |)\n|  |\\    | \n|  | \\   | \n`--'  `--' ",
  "O": "           \n     .->   \n(`-')----. \n( OO).-.  '\n( _) | |  |\n \\|  |)|  |\n  '  '-'  '\n   `-----' ",
  "P": " _  (`-') \n \\-.(OO ) \n _.'    \\ \n(_...--'' \n|  |_.' | \n|  .___.' \n|  |      \n`--'      ",
  "Q": " <-.(`-')  \n  __( OO)  \n '-'---\\_) \n|  .-.  |  \n|  | | <-' \n|  | |  |  \n'  '-'  '-.\n `-----'--'",
  "R": "   (`-')  \n<-.(OO )  \n,------,) \n|   /`. ' \n|  |_.' | \n|  .   .' \n|  |\\  \\  \n`--' '--' ",
  "S": " (`-').-> \n ( OO)_   \n(_)--\\_)  \n/    _ /  \n\\_..`--.  \n.-._)   \\ \n\\       / \n `-----'  ",
  "T": "(`-')      \n( OO).->   \n/    '._   \n|'--...__) \n`--.  .--' \n   |  |    \n   |  |    \n   `--'    ",
  "U": "           \n     .->   \n,--.(,--.  \n|  | |(`-')\n|  | |(OO )\n|  | | |  \\\n\\  '-'(_ .'\n `-----'   ",
  "V": "      (`-')\n     _(OO )\n,--.(_/,-.\\\n\\   \\ / (_/\n \\   /   / \n_ \\     /_)\n\\-'\\   /   \n    `-'    ",
  "W": "     .->   \n (`(`-')/`)\n,-`( OO).',\n|  |\\  |  |\n|  | '.|  |\n|  |.'.|  |\n|   ,'.   |\n`--'   '--'",
  "X": " (`-')     \n (OO )_.-> \n (_| \\_)--.\n \\  `.'  / \n  \\    .') \n  .'    \\  \n /  .'.  \\ \n`--'   '--'",
  "Y": "           \n     .->   \n ,--.'  ,-.\n(`-')'.'  /\n(OO \\    / \n |  /   /) \n `-/   /`  \n   `--'    ",
  "Z": "  (`-')    \n  ( OO).-> \n,(_/----.  \n|__,    |  \n (_/   /   \n .'  .'_   \n|       |  \n`-------'  "
};

exports.default = LilDevil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9MaWxEZXZpbC5qcyJdLCJuYW1lcyI6WyJMaWxEZXZpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBQ2YsT0FBSyw0R0FEVTtBQUVmLE9BQUssZ0VBRlU7QUFHZixPQUFLLHlGQUhVO0FBSWYsT0FBSywyRkFKVTtBQUtmLE9BQUssZ0dBTFU7QUFNZixPQUFLLHdGQU5VO0FBT2YsT0FBSywwRkFQVTtBQVFmLE9BQUssZ0dBUlU7QUFTZixPQUFLLDRGQVRVO0FBVWYsT0FBSyxrR0FWVTtBQVdmLE9BQUssMEdBWFU7QUFZZixPQUFLLGlHQVpVO0FBYWYsT0FBSywwR0FiVTtBQWNmLE9BQUsseUdBZFU7QUFlZixPQUFLLGdHQWZVO0FBZ0JmLE9BQUssMEdBaEJVO0FBaUJmLE9BQUsseUdBakJVO0FBa0JmLE9BQUssZ0dBbEJVO0FBbUJmLE9BQUssd0ZBbkJVO0FBb0JmLE9BQUssZ0dBcEJVO0FBcUJmLE9BQUssa0dBckJVO0FBc0JmLE9BQUssZ0dBdEJVO0FBdUJmLE9BQUsseUdBdkJVO0FBd0JmLE9BQUssNEdBeEJVO0FBeUJmLE9BQUsseUdBekJVO0FBMEJmLE9BQUssa0dBMUJVO0FBMkJmLE9BQUsseUdBM0JVO0FBNEJmLE9BQUssa0dBNUJVO0FBNkJmLE9BQUssb0dBN0JVO0FBOEJmLE9BQUssd0dBOUJVO0FBK0JmLE9BQUssMEdBL0JVO0FBZ0NmLE9BQUssK0dBaENVO0FBaUNmLE9BQUsseUdBakNVO0FBa0NmLE9BQUssNkdBbENVO0FBbUNmLE9BQUsseUdBbkNVO0FBb0NmLE9BQUs7QUFwQ1UsQ0FBakI7O2tCQXVDZUEsUSIsImZpbGUiOiJMaWxEZXZpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpbERldmlsID0ge1xuICBcIjBcIjogXCIgICAgICAgICAgIFxcbiAgICAgICAgICAgXFxuICAuLS0tLS4gICBcXG4gLyAgLi4gIFxcXFwgIFxcbnwgIC8gIFxcXFwgIC4gXFxuJyAgXFxcXCAgLyAgJyBcXG4gXFxcXCAgYCcgIC8gIFxcbiAgYC0tLScnICAgXCIsXG4gIFwiMVwiOiBcIiAgICAgIFxcbiAgICAgIFxcbiAuLS0uIFxcbi9fICB8IFxcbiB8ICB8IFxcbiB8ICB8IFxcbiB8ICB8IFxcbiBgLS0nIFwiLFxuICBcIjJcIjogXCIgICAgICAgICBcXG4gICAgICAgICBcXG4gLi0tLS0uICBcXG5cXFxcXywtLiAgfCBcXG4gICAuJyAuJyBcXG4gLicgIC9fICBcXG58ICAgICAgfCBcXG5gLS0tLS0tJyBcIixcbiAgXCIzXCI6IFwiICAgICAgICAgXFxuICAgICAgICAgXFxuIC4tLS0tLiAgXFxuXFxcXF8uLSwgIHwgXFxuICB8XyAgPCAgXFxuLi0uIFxcXFwgIHwgXFxuXFxcXCBgLScgIC8gXFxuIGAtLS0nJyAgXCIsXG4gIFwiNFwiOiBcIiAgICAgICAgICBcXG4gICAgICAgICAgXFxuICAgLi0tLS4gIFxcbiAgLyAuICB8ICBcXG4gLyAvfCAgfCAgXFxuLyAnLScgIHx8IFxcbmAtLS18ICB8JyBcXG4gICAgYC0tJyAgXCIsXG4gIFwiNVwiOiBcIiAgICAgICAgIFxcbiAgICAgICAgIFxcbi4tLS0tLS4gIFxcbnwgICBfX3wgIFxcbmAtLS4gICcuIFxcbi4tICB8ICB8IFxcbnwgYC0nICAvIFxcbiBgLS0tJycgIFwiLFxuICBcIjZcIjogXCIgICAgICAgICBcXG4gICAgICAgICBcXG4gICwtLS4gICBcXG4gLyAgLicgICBcXG4uICAvIC0uICBcXG4nICAuLS4gXFxcXCBcXG5cXFxcICBgLScgLyBcXG4gYC0tLS0nICBcIixcbiAgXCI3XCI6IFwiICAgICAgICAgIFxcbiAgICAgICAgICBcXG4uLS0tLS0tLS4gXFxufCAgIF8gICAnIFxcbmAtJyAvICAvICBcXG4gICAuICAvICAgXFxuICAvICAvICAgIFxcbiBgLS0nICAgICBcIixcbiAgXCI4XCI6IFwiICAgICAgICAgXFxuICAgICAgICAgXFxuIC4tLS0tLiAgXFxuLyAuLS4gIFxcXFwgXFxuXFxcXCAnLScgIC8gXFxuLyAvYC4gIFxcXFwgXFxuXFxcXCAnLScgIC8gXFxuIGAtLS0nJyAgXCIsXG4gIFwiOVwiOiBcIiAgICAgICAgICBcXG4gICAgICAgICAgXFxuIC4tLS0tLiAgIFxcbi8gLC0uICBcXFxcICBcXG5cXFxcICctJyAgIC4gXFxuIGAtIC8gIC4nIFxcbiAgLicgIC8gICBcXG4gIGAtLScgICAgXCIsXG4gIFwiQVwiOiBcIiAoYC0nKSAgXyAgXFxuIChPTyApLi0vICBcXG4gLyAsLS0tLiAgIFxcbiB8IFxcXFwgL2AuXFxcXCAgXFxuICctJ3xfLicgfCBcXG4ofCAgLi0uICB8IFxcbiB8ICB8IHwgIHwgXFxuIGAtLScgYC0tJyBcIixcbiAgXCJCXCI6IFwiPC0uKGAtJykgIFxcbiBfXyggT08pICBcXG4nLSctLS0uXFxcXCAgXFxufCAuLS4gKC8gIFxcbnwgJy0nIGAuKSBcXG58IC9gJy4gIHwgXFxufCAnLS0nICAvIFxcbmAtLS0tLS0nICBcIixcbiAgXCJDXCI6IFwiICAgICAgICAgICBcXG4gXyAgICAgICAgIFxcbiBcXFxcLSwtLS0tLS4gXFxuICB8ICAuLS0uLyBcXG4gL18pIChgLScpIFxcbiB8fCAgfE9PICkgXFxuKF8nICAnLS0nXFxcXCBcXG4gICBgLS0tLS0nIFwiLFxuICBcIkRcIjogXCIgXyhgLScpICAgIFxcbiggKE9PICkuLT4gXFxuIFxcXFwgICAgLidfICBcXG4gJ2AnLS4uX18pIFxcbiB8ICB8ICAnIHwgXFxuIHwgIHwgIC8gOiBcXG4gfCAgJy0nICAvIFxcbiBgLS0tLS0tJyAgXCIsXG4gIFwiRVwiOiBcIiAoYC0nKSAgXyBcXG4gKCBPTykuLS8gXFxuKCwtLS0tLS0uIFxcbiB8ICAuLS0tJyBcXG4ofCAgJy0tLiAgXFxuIHwgIC4tLScgIFxcbiB8ICBgLS0tLiBcXG4gYC0tLS0tLScgXCIsXG4gIFwiRlwiOiBcIiAgICAgICAgICAgXFxuICAgPC0uICAgICBcXG4oYC0nKS0tLS0tLlxcbihPT3woX1xcXFwtLS0nXFxuIC8gfCAgJy0tLiBcXG4gXFxcXF8pICAuLS0nIFxcbiAgYHwgIHxfKSAgXFxuICAgYC0tJyAgICBcIixcbiAgXCJHXCI6IFwiICAgICAgICAgICBcXG4gICAgLi0+ICAgIFxcbiAsLS0tKGAtJykgXFxuJyAgLi0oT08gKSBcXG58ICB8IC4tLCBcXFxcIFxcbnwgIHwgJy4oXy8gXFxufCAgJy0nICB8ICBcXG4gYC0tLS0tJyAgIFwiLFxuICBcIkhcIjogXCIgKGAtJykuLT4gXFxuIChPTyApX18gIFxcbiwtLS4gLCctJyBcXG58ICB8IHwgIHwgXFxufCAgYC0nICB8IFxcbnwgIC4tLiAgfCBcXG58ICB8IHwgIHwgXFxuYC0tJyBgLS0nIFwiLFxuICBcIklcIjogXCIgIF8gICAgICBcXG4gKF8pICAgICBcXG4gLC0oYC0nKSBcXG4gfCAoIE9PKSBcXG4gfCAgfCAgKSBcXG4ofCAgfF8vICBcXG4gfCAgfCctPiBcXG4gYC0tJyAgICBcIixcbiAgXCJKXCI6IFwiICAgICAgICAgIFxcbiAgICAgICAgICBcXG4gICA8LS4tLS4gXFxuIChgLSd8ICx8IFxcbiAoT08gfChffCBcXG4sLS0uIHwgIHwgXFxufCAgJy0nICAvIFxcbiBgLS0tLS0nICBcIixcbiAgXCJLXCI6IFwiPC0uKGAtJykgIFxcbiBfXyggT08pICBcXG4nLScuICwtLS4gXFxufCAgLicgICAvIFxcbnwgICAgICAvKSBcXG58ICAuICAgJyAgXFxufCAgfFxcXFwgICBcXFxcIFxcbmAtLScgJy0tJyBcIixcbiAgXCJMXCI6IFwiICAgICAgICAgIFxcbiAgIDwtLiAgICBcXG4gLC0tLiApICAgXFxuIHwgIChgLScpIFxcbiB8ICB8T08gKSBcXG4ofCAgJ19fIHwgXFxuIHwgICAgIHwnIFxcbiBgLS0tLS0nICBcIixcbiAgXCJNXCI6IFwiPC0uIChgLScpICBcXG4gICBcXFxcKE9PIClfIFxcbiwtLS4vICAsLS4pXFxufCAgIGAuJyAgIHxcXG58ICB8Jy4nfCAgfFxcbnwgIHwgICB8ICB8XFxufCAgfCAgIHwgIHxcXG5gLS0nICAgYC0tJ1wiLFxuICBcIk5cIjogXCI8LS4gKGAtJylfIFxcbiAgIFxcXFwoIE9PKSApXFxuLC0tLi8gLC0tLyBcXG58ICAgXFxcXCB8ICB8IFxcbnwgIC4gJ3wgIHwpXFxufCAgfFxcXFwgICAgfCBcXG58ICB8IFxcXFwgICB8IFxcbmAtLScgIGAtLScgXCIsXG4gIFwiT1wiOiBcIiAgICAgICAgICAgXFxuICAgICAuLT4gICBcXG4oYC0nKS0tLS0uIFxcbiggT08pLi0uICAnXFxuKCBfKSB8IHwgIHxcXG4gXFxcXHwgIHwpfCAgfFxcbiAgJyAgJy0nICAnXFxuICAgYC0tLS0tJyBcIixcbiAgXCJQXCI6IFwiIF8gIChgLScpIFxcbiBcXFxcLS4oT08gKSBcXG4gXy4nICAgIFxcXFwgXFxuKF8uLi4tLScnIFxcbnwgIHxfLicgfCBcXG58ICAuX19fLicgXFxufCAgfCAgICAgIFxcbmAtLScgICAgICBcIixcbiAgXCJRXCI6IFwiIDwtLihgLScpICBcXG4gIF9fKCBPTykgIFxcbiAnLSctLS1cXFxcXykgXFxufCAgLi0uICB8ICBcXG58ICB8IHwgPC0nIFxcbnwgIHwgfCAgfCAgXFxuJyAgJy0nICAnLS5cXG4gYC0tLS0tJy0tJ1wiLFxuICBcIlJcIjogXCIgICAoYC0nKSAgXFxuPC0uKE9PICkgIFxcbiwtLS0tLS0sKSBcXG58ICAgL2AuICcgXFxufCAgfF8uJyB8IFxcbnwgIC4gICAuJyBcXG58ICB8XFxcXCAgXFxcXCAgXFxuYC0tJyAnLS0nIFwiLFxuICBcIlNcIjogXCIgKGAtJykuLT4gXFxuICggT08pXyAgIFxcbihfKS0tXFxcXF8pICBcXG4vICAgIF8gLyAgXFxuXFxcXF8uLmAtLS4gIFxcbi4tLl8pICAgXFxcXCBcXG5cXFxcICAgICAgIC8gXFxuIGAtLS0tLScgIFwiLFxuICBcIlRcIjogXCIoYC0nKSAgICAgIFxcbiggT08pLi0+ICAgXFxuLyAgICAnLl8gICBcXG58Jy0tLi4uX18pIFxcbmAtLS4gIC4tLScgXFxuICAgfCAgfCAgICBcXG4gICB8ICB8ICAgIFxcbiAgIGAtLScgICAgXCIsXG4gIFwiVVwiOiBcIiAgICAgICAgICAgXFxuICAgICAuLT4gICBcXG4sLS0uKCwtLS4gIFxcbnwgIHwgfChgLScpXFxufCAgfCB8KE9PIClcXG58ICB8IHwgfCAgXFxcXFxcblxcXFwgICctJyhfIC4nXFxuIGAtLS0tLScgICBcIixcbiAgXCJWXCI6IFwiICAgICAgKGAtJylcXG4gICAgIF8oT08gKVxcbiwtLS4oXy8sLS5cXFxcXFxuXFxcXCAgIFxcXFwgLyAoXy9cXG4gXFxcXCAgIC8gICAvIFxcbl8gXFxcXCAgICAgL18pXFxuXFxcXC0nXFxcXCAgIC8gICBcXG4gICAgYC0nICAgIFwiLFxuICBcIldcIjogXCIgICAgIC4tPiAgIFxcbiAoYChgLScpL2ApXFxuLC1gKCBPTykuJyxcXG58ICB8XFxcXCAgfCAgfFxcbnwgIHwgJy58ICB8XFxufCAgfC4nLnwgIHxcXG58ICAgLCcuICAgfFxcbmAtLScgICAnLS0nXCIsXG4gIFwiWFwiOiBcIiAoYC0nKSAgICAgXFxuIChPTyApXy4tPiBcXG4gKF98IFxcXFxfKS0tLlxcbiBcXFxcICBgLicgIC8gXFxuICBcXFxcICAgIC4nKSBcXG4gIC4nICAgIFxcXFwgIFxcbiAvICAuJy4gIFxcXFwgXFxuYC0tJyAgICctLSdcIixcbiAgXCJZXCI6IFwiICAgICAgICAgICBcXG4gICAgIC4tPiAgIFxcbiAsLS0uJyAgLC0uXFxuKGAtJyknLicgIC9cXG4oT08gXFxcXCAgICAvIFxcbiB8ICAvICAgLykgXFxuIGAtLyAgIC9gICBcXG4gICBgLS0nICAgIFwiLFxuICBcIlpcIjogXCIgIChgLScpICAgIFxcbiAgKCBPTykuLT4gXFxuLChfLy0tLS0uICBcXG58X18sICAgIHwgIFxcbiAoXy8gICAvICAgXFxuIC4nICAuJ18gICBcXG58ICAgICAgIHwgIFxcbmAtLS0tLS0tJyAgXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlsRGV2aWwiXX0=