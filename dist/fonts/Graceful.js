"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Graceful = {
  "0": "  __  \n /  \\ \n(  0 )\n \\__/ ",
  "1": "  __  \n /  \\ \n(_/ / \n (__) ",
  "2": " ____ \n(___ \\\n / __/\n(____)",
  "3": " ____ \n( __ \\\n (__ (\n(____/",
  "4": "  ___ \n / _ \\\n(__  (\n  (__/",
  "5": "  ___ \n / __)\n(___ \\\n(____/",
  "6": "  ___ \n / __)\n(  _ \\\n \\___/",
  "7": " ____ \n(__  )\n  / / \n (_/  ",
  "8": " ____ \n/ _  \\\n) _  (\n\\____/",
  "9": " ___  \n/ _ \\ \n\\__  )\n(___/ ",
  "A": "  __  \n / _\\ \n/    \\\n\\_/\\_/",
  "B": " ____ \n(  _ \\\n ) _ (\n(____/",
  "C": "  ___ \n / __)\n( (__ \n \\___)",
  "D": " ____ \n(    \\\n ) D (\n(____/",
  "E": " ____ \n(  __)\n ) _) \n(____)",
  "F": " ____ \n(  __)\n ) _) \n(__)  ",
  "G": "  ___ \n / __)\n( (_ \\\n \\___/",
  "H": " _  _ \n/ )( \\\n) __ (\n\\_)(_/",
  "I": "  __  \n (  ) \n  )(  \n (__) ",
  "J": "   __ \n _(  )\n/ \\) \\\n\\____/",
  "K": " __ _ \n(  / )\n )  ( \n(__\\_)",
  "L": " __   \n(  )  \n/ (_/\\\n\\____/",
  "M": " _  _ \n( \\/ )\n/ \\/ \\\n\\_)(_/",
  "N": " __ _ \n(  ( \\\n/    /\n\\_)__)",
  "O": "  __  \n /  \\ \n(  O )\n \\__/ ",
  "P": " ____ \n(  _ \\\n ) __/\n(__)  ",
  "Q": "  __  \n /  \\ \n(  O )\n \\__\\)",
  "R": " ____ \n(  _ \\\n )   /\n(__\\_)",
  "S": " ____ \n/ ___)\n\\___ \\\n(____/",
  "T": " ____ \n(_  _)\n  )(  \n (__) ",
  "U": " _  _ \n/ )( \\\n) \\/ (\n\\____/",
  "V": " _  _ \n/ )( \\\n\\ \\/ /\n \\__/ ",
  "W": " _  _ \n/ )( \\\n\\ /\\ /\n(_/\\_)",
  "X": " _  _ \n( \\/ )\n )  ( \n(_/\\_)",
  "Y": " _  _ \n( \\/ )\n )  / \n(__/  ",
  "Z": " ____ \n(__  )\n / _/ \n(____)"
};

exports.default = Graceful;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9HcmFjZWZ1bC5qcyJdLCJuYW1lcyI6WyJHcmFjZWZ1bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBQ2YsT0FBSyxrQ0FEVTtBQUVmLE9BQUssaUNBRlU7QUFHZixPQUFLLGlDQUhVO0FBSWYsT0FBSyxpQ0FKVTtBQUtmLE9BQUssaUNBTFU7QUFNZixPQUFLLGlDQU5VO0FBT2YsT0FBSyxrQ0FQVTtBQVFmLE9BQUssZ0NBUlU7QUFTZixPQUFLLGtDQVRVO0FBVWYsT0FBSyxrQ0FWVTtBQVdmLE9BQUssb0NBWFU7QUFZZixPQUFLLGlDQVpVO0FBYWYsT0FBSyxpQ0FiVTtBQWNmLE9BQUssaUNBZFU7QUFlZixPQUFLLGdDQWZVO0FBZ0JmLE9BQUssZ0NBaEJVO0FBaUJmLE9BQUssa0NBakJVO0FBa0JmLE9BQUssa0NBbEJVO0FBbUJmLE9BQUssZ0NBbkJVO0FBb0JmLE9BQUssbUNBcEJVO0FBcUJmLE9BQUssaUNBckJVO0FBc0JmLE9BQUssa0NBdEJVO0FBdUJmLE9BQUssb0NBdkJVO0FBd0JmLE9BQUssa0NBeEJVO0FBeUJmLE9BQUssa0NBekJVO0FBMEJmLE9BQUssaUNBMUJVO0FBMkJmLE9BQUssbUNBM0JVO0FBNEJmLE9BQUssa0NBNUJVO0FBNkJmLE9BQUssa0NBN0JVO0FBOEJmLE9BQUssZ0NBOUJVO0FBK0JmLE9BQUssbUNBL0JVO0FBZ0NmLE9BQUssb0NBaENVO0FBaUNmLE9BQUssb0NBakNVO0FBa0NmLE9BQUssa0NBbENVO0FBbUNmLE9BQUssaUNBbkNVO0FBb0NmLE9BQUs7QUFwQ1UsQ0FBakI7O2tCQXVDZUEsUSIsImZpbGUiOiJHcmFjZWZ1bC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdyYWNlZnVsID0ge1xuICBcIjBcIjogXCIgIF9fICBcXG4gLyAgXFxcXCBcXG4oICAwIClcXG4gXFxcXF9fLyBcIixcbiAgXCIxXCI6IFwiICBfXyAgXFxuIC8gIFxcXFwgXFxuKF8vIC8gXFxuIChfXykgXCIsXG4gIFwiMlwiOiBcIiBfX19fIFxcbihfX18gXFxcXFxcbiAvIF9fL1xcbihfX19fKVwiLFxuICBcIjNcIjogXCIgX19fXyBcXG4oIF9fIFxcXFxcXG4gKF9fIChcXG4oX19fXy9cIixcbiAgXCI0XCI6IFwiICBfX18gXFxuIC8gXyBcXFxcXFxuKF9fICAoXFxuICAoX18vXCIsXG4gIFwiNVwiOiBcIiAgX19fIFxcbiAvIF9fKVxcbihfX18gXFxcXFxcbihfX19fL1wiLFxuICBcIjZcIjogXCIgIF9fXyBcXG4gLyBfXylcXG4oICBfIFxcXFxcXG4gXFxcXF9fXy9cIixcbiAgXCI3XCI6IFwiIF9fX18gXFxuKF9fICApXFxuICAvIC8gXFxuIChfLyAgXCIsXG4gIFwiOFwiOiBcIiBfX19fIFxcbi8gXyAgXFxcXFxcbikgXyAgKFxcblxcXFxfX19fL1wiLFxuICBcIjlcIjogXCIgX19fICBcXG4vIF8gXFxcXCBcXG5cXFxcX18gIClcXG4oX19fLyBcIixcbiAgXCJBXCI6IFwiICBfXyAgXFxuIC8gX1xcXFwgXFxuLyAgICBcXFxcXFxuXFxcXF8vXFxcXF8vXCIsXG4gIFwiQlwiOiBcIiBfX19fIFxcbiggIF8gXFxcXFxcbiApIF8gKFxcbihfX19fL1wiLFxuICBcIkNcIjogXCIgIF9fXyBcXG4gLyBfXylcXG4oIChfXyBcXG4gXFxcXF9fXylcIixcbiAgXCJEXCI6IFwiIF9fX18gXFxuKCAgICBcXFxcXFxuICkgRCAoXFxuKF9fX18vXCIsXG4gIFwiRVwiOiBcIiBfX19fIFxcbiggIF9fKVxcbiApIF8pIFxcbihfX19fKVwiLFxuICBcIkZcIjogXCIgX19fXyBcXG4oICBfXylcXG4gKSBfKSBcXG4oX18pICBcIixcbiAgXCJHXCI6IFwiICBfX18gXFxuIC8gX18pXFxuKCAoXyBcXFxcXFxuIFxcXFxfX18vXCIsXG4gIFwiSFwiOiBcIiBfICBfIFxcbi8gKSggXFxcXFxcbikgX18gKFxcblxcXFxfKShfL1wiLFxuICBcIklcIjogXCIgIF9fICBcXG4gKCAgKSBcXG4gICkoICBcXG4gKF9fKSBcIixcbiAgXCJKXCI6IFwiICAgX18gXFxuIF8oICApXFxuLyBcXFxcKSBcXFxcXFxuXFxcXF9fX18vXCIsXG4gIFwiS1wiOiBcIiBfXyBfIFxcbiggIC8gKVxcbiApICAoIFxcbihfX1xcXFxfKVwiLFxuICBcIkxcIjogXCIgX18gICBcXG4oICApICBcXG4vIChfL1xcXFxcXG5cXFxcX19fXy9cIixcbiAgXCJNXCI6IFwiIF8gIF8gXFxuKCBcXFxcLyApXFxuLyBcXFxcLyBcXFxcXFxuXFxcXF8pKF8vXCIsXG4gIFwiTlwiOiBcIiBfXyBfIFxcbiggICggXFxcXFxcbi8gICAgL1xcblxcXFxfKV9fKVwiLFxuICBcIk9cIjogXCIgIF9fICBcXG4gLyAgXFxcXCBcXG4oICBPIClcXG4gXFxcXF9fLyBcIixcbiAgXCJQXCI6IFwiIF9fX18gXFxuKCAgXyBcXFxcXFxuICkgX18vXFxuKF9fKSAgXCIsXG4gIFwiUVwiOiBcIiAgX18gIFxcbiAvICBcXFxcIFxcbiggIE8gKVxcbiBcXFxcX19cXFxcKVwiLFxuICBcIlJcIjogXCIgX19fXyBcXG4oICBfIFxcXFxcXG4gKSAgIC9cXG4oX19cXFxcXylcIixcbiAgXCJTXCI6IFwiIF9fX18gXFxuLyBfX18pXFxuXFxcXF9fXyBcXFxcXFxuKF9fX18vXCIsXG4gIFwiVFwiOiBcIiBfX19fIFxcbihfICBfKVxcbiAgKSggIFxcbiAoX18pIFwiLFxuICBcIlVcIjogXCIgXyAgXyBcXG4vICkoIFxcXFxcXG4pIFxcXFwvIChcXG5cXFxcX19fXy9cIixcbiAgXCJWXCI6IFwiIF8gIF8gXFxuLyApKCBcXFxcXFxuXFxcXCBcXFxcLyAvXFxuIFxcXFxfXy8gXCIsXG4gIFwiV1wiOiBcIiBfICBfIFxcbi8gKSggXFxcXFxcblxcXFwgL1xcXFwgL1xcbihfL1xcXFxfKVwiLFxuICBcIlhcIjogXCIgXyAgXyBcXG4oIFxcXFwvIClcXG4gKSAgKCBcXG4oXy9cXFxcXylcIixcbiAgXCJZXCI6IFwiIF8gIF8gXFxuKCBcXFxcLyApXFxuICkgIC8gXFxuKF9fLyAgXCIsXG4gIFwiWlwiOiBcIiBfX19fIFxcbihfXyAgKVxcbiAvIF8vIFxcbihfX19fKVwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYWNlZnVsIl19