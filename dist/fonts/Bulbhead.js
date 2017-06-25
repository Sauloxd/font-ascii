"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Bulbhead = {
  "0": "  ___  \n / _ \\ \n( (_) )\n \\___/ ",
  "1": "  __ \n /  )\n  )( \n (__)",
  "2": " ___  \n(__ \\ \n / _/ \n(____)",
  "3": " ___ \n(__ )\n (_ \\\n(___/",
  "4": "  __  \n /. | \n(_  _)\n  (_) ",
  "5": " ___ \n| __)\n|__ \\\n(___/",
  "6": "  _  \n / ) \n/ _ \\\n\\___/",
  "7": " ___ \n(__ )\n / / \n(_/  ",
  "8": " ___ \n( _ )\n/ _ \\\n\\___/",
  "9": " ___ \n/ _ \\\n\\_  /\n (_/ ",
  "A": "   __   \n  /__\\  \n /(__)\\ \n(__)(__)",
  "B": " ____ \n(  _ \\\n ) _ <\n(____/",
  "C": "  ___ \n / __)\n( (__ \n \\___)",
  "D": " ____  \n(  _ \\ \n )(_) )\n(____/ ",
  "E": " ____ \n( ___)\n )__) \n(____)",
  "F": " ____ \n( ___)\n )__) \n(__)  ",
  "G": "  ___ \n / __)\n( (_-.\n \\___/",
  "H": " _   _ \n( )_( )\n ) _ ( \n(_) (_)",
  "I": " ____ \n(_  _)\n _)(_ \n(____)",
  "J": "  ____ \n (_  _)\n.-_)(  \n\\____) ",
  "K": " _  _ \n( )/ )\n )  ( \n(_)\\_)",
  "L": " __   \n(  )  \n )(__ \n(____)",
  "M": " __  __ \n(  \\/  )\n )    ( \n(_/\\/\\_)",
  "N": " _  _ \n( \\( )\n )  ( \n(_)\\_)",
  "O": " _____ \n(  _  )\n )(_)( \n(_____)",
  "P": " ____ \n(  _ \\\n )___/\n(__)  ",
  "Q": " _____ \n(  _  )\n )(_)( \n(___/\\\\",
  "R": " ____ \n(  _ \\\n )   /\n(_)\\_)",
  "S": " ___ \n/ __)\n\\__ \\\n(___/",
  "T": " ____ \n(_  _)\n  )(  \n (__) ",
  "U": " __  __ \n(  )(  )\n )(__)( \n(______)",
  "V": " _  _ \n( \\/ )\n \\  / \n  \\/  ",
  "W": " _    _ \n( \\/\\/ )\n )    ( \n(__/\\__)",
  "X": " _  _ \n( \\/ )\n )  ( \n(_/\\_)",
  "Y": " _  _ \n( \\/ )\n \\  / \n (__) ",
  "Z": " ____ \n(_   )\n / /_ \n(____)"
};

exports.default = Bulbhead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9CdWxiaGVhZC5qcyJdLCJuYW1lcyI6WyJCdWxiaGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBQ2YsT0FBSyxzQ0FEVTtBQUVmLE9BQUssNEJBRlU7QUFHZixPQUFLLGlDQUhVO0FBSWYsT0FBSyw2QkFKVTtBQUtmLE9BQUssZ0NBTFU7QUFNZixPQUFLLDZCQU5VO0FBT2YsT0FBSyw4QkFQVTtBQVFmLE9BQUssNEJBUlU7QUFTZixPQUFLLDhCQVRVO0FBVWYsT0FBSyw4QkFWVTtBQVdmLE9BQUssMENBWFU7QUFZZixPQUFLLGlDQVpVO0FBYWYsT0FBSyxpQ0FiVTtBQWNmLE9BQUsscUNBZFU7QUFlZixPQUFLLGdDQWZVO0FBZ0JmLE9BQUssZ0NBaEJVO0FBaUJmLE9BQUssaUNBakJVO0FBa0JmLE9BQUssb0NBbEJVO0FBbUJmLE9BQUssZ0NBbkJVO0FBb0JmLE9BQUsscUNBcEJVO0FBcUJmLE9BQUssaUNBckJVO0FBc0JmLE9BQUssZ0NBdEJVO0FBdUJmLE9BQUssMkNBdkJVO0FBd0JmLE9BQUssa0NBeEJVO0FBeUJmLE9BQUssb0NBekJVO0FBMEJmLE9BQUssaUNBMUJVO0FBMkJmLE9BQUssc0NBM0JVO0FBNEJmLE9BQUssa0NBNUJVO0FBNkJmLE9BQUssOEJBN0JVO0FBOEJmLE9BQUssZ0NBOUJVO0FBK0JmLE9BQUssd0NBL0JVO0FBZ0NmLE9BQUssbUNBaENVO0FBaUNmLE9BQUssMkNBakNVO0FBa0NmLE9BQUssa0NBbENVO0FBbUNmLE9BQUssa0NBbkNVO0FBb0NmLE9BQUs7QUFwQ1UsQ0FBakI7O2tCQXVDZUEsUSIsImZpbGUiOiJCdWxiaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1bGJoZWFkID0ge1xuICBcIjBcIjogXCIgIF9fXyAgXFxuIC8gXyBcXFxcIFxcbiggKF8pIClcXG4gXFxcXF9fXy8gXCIsXG4gIFwiMVwiOiBcIiAgX18gXFxuIC8gIClcXG4gICkoIFxcbiAoX18pXCIsXG4gIFwiMlwiOiBcIiBfX18gIFxcbihfXyBcXFxcIFxcbiAvIF8vIFxcbihfX19fKVwiLFxuICBcIjNcIjogXCIgX19fIFxcbihfXyApXFxuIChfIFxcXFxcXG4oX19fL1wiLFxuICBcIjRcIjogXCIgIF9fICBcXG4gLy4gfCBcXG4oXyAgXylcXG4gIChfKSBcIixcbiAgXCI1XCI6IFwiIF9fXyBcXG58IF9fKVxcbnxfXyBcXFxcXFxuKF9fXy9cIixcbiAgXCI2XCI6IFwiICBfICBcXG4gLyApIFxcbi8gXyBcXFxcXFxuXFxcXF9fXy9cIixcbiAgXCI3XCI6IFwiIF9fXyBcXG4oX18gKVxcbiAvIC8gXFxuKF8vICBcIixcbiAgXCI4XCI6IFwiIF9fXyBcXG4oIF8gKVxcbi8gXyBcXFxcXFxuXFxcXF9fXy9cIixcbiAgXCI5XCI6IFwiIF9fXyBcXG4vIF8gXFxcXFxcblxcXFxfICAvXFxuIChfLyBcIixcbiAgXCJBXCI6IFwiICAgX18gICBcXG4gIC9fX1xcXFwgIFxcbiAvKF9fKVxcXFwgXFxuKF9fKShfXylcIixcbiAgXCJCXCI6IFwiIF9fX18gXFxuKCAgXyBcXFxcXFxuICkgXyA8XFxuKF9fX18vXCIsXG4gIFwiQ1wiOiBcIiAgX19fIFxcbiAvIF9fKVxcbiggKF9fIFxcbiBcXFxcX19fKVwiLFxuICBcIkRcIjogXCIgX19fXyAgXFxuKCAgXyBcXFxcIFxcbiApKF8pIClcXG4oX19fXy8gXCIsXG4gIFwiRVwiOiBcIiBfX19fIFxcbiggX19fKVxcbiApX18pIFxcbihfX19fKVwiLFxuICBcIkZcIjogXCIgX19fXyBcXG4oIF9fXylcXG4gKV9fKSBcXG4oX18pICBcIixcbiAgXCJHXCI6IFwiICBfX18gXFxuIC8gX18pXFxuKCAoXy0uXFxuIFxcXFxfX18vXCIsXG4gIFwiSFwiOiBcIiBfICAgXyBcXG4oIClfKCApXFxuICkgXyAoIFxcbihfKSAoXylcIixcbiAgXCJJXCI6IFwiIF9fX18gXFxuKF8gIF8pXFxuIF8pKF8gXFxuKF9fX18pXCIsXG4gIFwiSlwiOiBcIiAgX19fXyBcXG4gKF8gIF8pXFxuLi1fKSggIFxcblxcXFxfX19fKSBcIixcbiAgXCJLXCI6IFwiIF8gIF8gXFxuKCApLyApXFxuICkgICggXFxuKF8pXFxcXF8pXCIsXG4gIFwiTFwiOiBcIiBfXyAgIFxcbiggICkgIFxcbiApKF9fIFxcbihfX19fKVwiLFxuICBcIk1cIjogXCIgX18gIF9fIFxcbiggIFxcXFwvICApXFxuICkgICAgKCBcXG4oXy9cXFxcL1xcXFxfKVwiLFxuICBcIk5cIjogXCIgXyAgXyBcXG4oIFxcXFwoIClcXG4gKSAgKCBcXG4oXylcXFxcXylcIixcbiAgXCJPXCI6IFwiIF9fX19fIFxcbiggIF8gIClcXG4gKShfKSggXFxuKF9fX19fKVwiLFxuICBcIlBcIjogXCIgX19fXyBcXG4oICBfIFxcXFxcXG4gKV9fXy9cXG4oX18pICBcIixcbiAgXCJRXCI6IFwiIF9fX19fIFxcbiggIF8gIClcXG4gKShfKSggXFxuKF9fXy9cXFxcXFxcXFwiLFxuICBcIlJcIjogXCIgX19fXyBcXG4oICBfIFxcXFxcXG4gKSAgIC9cXG4oXylcXFxcXylcIixcbiAgXCJTXCI6IFwiIF9fXyBcXG4vIF9fKVxcblxcXFxfXyBcXFxcXFxuKF9fXy9cIixcbiAgXCJUXCI6IFwiIF9fX18gXFxuKF8gIF8pXFxuICApKCAgXFxuIChfXykgXCIsXG4gIFwiVVwiOiBcIiBfXyAgX18gXFxuKCAgKSggIClcXG4gKShfXykoIFxcbihfX19fX18pXCIsXG4gIFwiVlwiOiBcIiBfICBfIFxcbiggXFxcXC8gKVxcbiBcXFxcICAvIFxcbiAgXFxcXC8gIFwiLFxuICBcIldcIjogXCIgXyAgICBfIFxcbiggXFxcXC9cXFxcLyApXFxuICkgICAgKCBcXG4oX18vXFxcXF9fKVwiLFxuICBcIlhcIjogXCIgXyAgXyBcXG4oIFxcXFwvIClcXG4gKSAgKCBcXG4oXy9cXFxcXylcIixcbiAgXCJZXCI6IFwiIF8gIF8gXFxuKCBcXFxcLyApXFxuIFxcXFwgIC8gXFxuIChfXykgXCIsXG4gIFwiWlwiOiBcIiBfX19fIFxcbihfICAgKVxcbiAvIC9fIFxcbihfX19fKVwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bGJoZWFkIl19