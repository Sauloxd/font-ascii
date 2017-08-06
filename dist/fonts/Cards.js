"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Cards = {
  "0": ".------.\n|0.--. |\n| :/\\: |\n| :\\/: |\n| '--'0|\n`------'",
  "1": ".------.\n|1.--. |\n| :/\\: |\n| (__) |\n| '--'1|\n`------'",
  "2": ".------.\n|2.--. |\n| (\\/) |\n| :\\/: |\n| '--'2|\n`------'",
  "3": ".------.\n|3.--. |\n| :(): |\n| ()() |\n| '--'3|\n`------'",
  "4": ".------.\n|4.--. |\n| :/\\: |\n| :\\/: |\n| '--'4|\n`------'",
  "5": ".------.\n|5.--. |\n| :/\\: |\n| (__) |\n| '--'5|\n`------'",
  "6": ".------.\n|6.--. |\n| (\\/) |\n| :\\/: |\n| '--'6|\n`------'",
  "7": ".------.\n|7.--. |\n| :(): |\n| ()() |\n| '--'7|\n`------'",
  "8": ".------.\n|8.--. |\n| :/\\: |\n| :\\/: |\n| '--'8|\n`------'",
  "9": ".------.\n|9.--. |\n| :/\\: |\n| (__) |\n| '--'9|\n`------'",
  "A": ".------.\n|A.--. |\n| (\\/) |\n| :\\/: |\n| '--'A|\n`------'",
  "B": ".------.\n|B.--. |\n| :(): |\n| ()() |\n| '--'B|\n`------'",
  "C": ".------.\n|C.--. |\n| :/\\: |\n| :\\/: |\n| '--'C|\n`------'",
  "D": ".------.\n|D.--. |\n| :/\\: |\n| (__) |\n| '--'D|\n`------'",
  "E": ".------.\n|E.--. |\n| (\\/) |\n| :\\/: |\n| '--'E|\n`------'",
  "F": ".------.\n|F.--. |\n| :(): |\n| ()() |\n| '--'F|\n`------'",
  "G": ".------.\n|G.--. |\n| :/\\: |\n| :\\/: |\n| '--'G|\n`------'",
  "H": ".------.\n|H.--. |\n| :/\\: |\n| (__) |\n| '--'H|\n`------'",
  "I": ".------.\n|I.--. |\n| (\\/) |\n| :\\/: |\n| '--'I|\n`------'",
  "J": ".------.\n|J.--. |\n| :(): |\n| ()() |\n| '--'J|\n`------'",
  "K": ".------.\n|K.--. |\n| :/\\: |\n| :\\/: |\n| '--'K|\n`------'",
  "L": ".------.\n|L.--. |\n| :/\\: |\n| (__) |\n| '--'L|\n`------'",
  "M": ".------.\n|M.--. |\n| (\\/) |\n| :\\/: |\n| '--'M|\n`------'",
  "N": ".------.\n|N.--. |\n| :(): |\n| ()() |\n| '--'N|\n`------'",
  "O": ".------.\n|O.--. |\n| :/\\: |\n| :\\/: |\n| '--'O|\n`------'",
  "P": ".------.\n|P.--. |\n| :/\\: |\n| (__) |\n| '--'P|\n`------'",
  "Q": ".------.\n|Q.--. |\n| (\\/) |\n| :\\/: |\n| '--'Q|\n`------'",
  "R": ".------.\n|R.--. |\n| :(): |\n| ()() |\n| '--'R|\n`------'",
  "S": ".------.\n|S.--. |\n| :/\\: |\n| :\\/: |\n| '--'S|\n`------'",
  "T": ".------.\n|T.--. |\n| :/\\: |\n| (__) |\n| '--'T|\n`------'",
  "U": ".------.\n|U.--. |\n| (\\/) |\n| :\\/: |\n| '--'U|\n`------'",
  "V": ".------.\n|V.--. |\n| :(): |\n| ()() |\n| '--'V|\n`------'",
  "W": ".------.\n|W.--. |\n| :/\\: |\n| :\\/: |\n| '--'W|\n`------'",
  "X": ".------.\n|X.--. |\n| :/\\: |\n| (__) |\n| '--'X|\n`------'",
  "Y": ".------.\n|Y.--. |\n| (\\/) |\n| :\\/: |\n| '--'Y|\n`------'",
  "Z": ".------.\n|Z.--. |\n| :(): |\n| ()() |\n| '--'Z|\n`------'"
};

exports.default = Cards;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9DYXJkcy5qcyJdLCJuYW1lcyI6WyJDYXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxRQUFRO0FBQ1osT0FBSyw4REFETztBQUVaLE9BQUssNkRBRk87QUFHWixPQUFLLDhEQUhPO0FBSVosT0FBSyw0REFKTztBQUtaLE9BQUssOERBTE87QUFNWixPQUFLLDZEQU5PO0FBT1osT0FBSyw4REFQTztBQVFaLE9BQUssNERBUk87QUFTWixPQUFLLDhEQVRPO0FBVVosT0FBSyw2REFWTztBQVdaLE9BQUssOERBWE87QUFZWixPQUFLLDREQVpPO0FBYVosT0FBSyw4REFiTztBQWNaLE9BQUssNkRBZE87QUFlWixPQUFLLDhEQWZPO0FBZ0JaLE9BQUssNERBaEJPO0FBaUJaLE9BQUssOERBakJPO0FBa0JaLE9BQUssNkRBbEJPO0FBbUJaLE9BQUssOERBbkJPO0FBb0JaLE9BQUssNERBcEJPO0FBcUJaLE9BQUssOERBckJPO0FBc0JaLE9BQUssNkRBdEJPO0FBdUJaLE9BQUssOERBdkJPO0FBd0JaLE9BQUssNERBeEJPO0FBeUJaLE9BQUssOERBekJPO0FBMEJaLE9BQUssNkRBMUJPO0FBMkJaLE9BQUssOERBM0JPO0FBNEJaLE9BQUssNERBNUJPO0FBNkJaLE9BQUssOERBN0JPO0FBOEJaLE9BQUssNkRBOUJPO0FBK0JaLE9BQUssOERBL0JPO0FBZ0NaLE9BQUssNERBaENPO0FBaUNaLE9BQUssOERBakNPO0FBa0NaLE9BQUssNkRBbENPO0FBbUNaLE9BQUssOERBbkNPO0FBb0NaLE9BQUs7QUFwQ08sQ0FBZDs7a0JBdUNlQSxLIiwiZmlsZSI6IkNhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FyZHMgPSB7XG4gIFwiMFwiOiBcIi4tLS0tLS0uXFxufDAuLS0uIHxcXG58IDovXFxcXDogfFxcbnwgOlxcXFwvOiB8XFxufCAnLS0nMHxcXG5gLS0tLS0tJ1wiLFxuICBcIjFcIjogXCIuLS0tLS0tLlxcbnwxLi0tLiB8XFxufCA6L1xcXFw6IHxcXG58IChfXykgfFxcbnwgJy0tJzF8XFxuYC0tLS0tLSdcIixcbiAgXCIyXCI6IFwiLi0tLS0tLS5cXG58Mi4tLS4gfFxcbnwgKFxcXFwvKSB8XFxufCA6XFxcXC86IHxcXG58ICctLScyfFxcbmAtLS0tLS0nXCIsXG4gIFwiM1wiOiBcIi4tLS0tLS0uXFxufDMuLS0uIHxcXG58IDooKTogfFxcbnwgKCkoKSB8XFxufCAnLS0nM3xcXG5gLS0tLS0tJ1wiLFxuICBcIjRcIjogXCIuLS0tLS0tLlxcbnw0Li0tLiB8XFxufCA6L1xcXFw6IHxcXG58IDpcXFxcLzogfFxcbnwgJy0tJzR8XFxuYC0tLS0tLSdcIixcbiAgXCI1XCI6IFwiLi0tLS0tLS5cXG58NS4tLS4gfFxcbnwgOi9cXFxcOiB8XFxufCAoX18pIHxcXG58ICctLSc1fFxcbmAtLS0tLS0nXCIsXG4gIFwiNlwiOiBcIi4tLS0tLS0uXFxufDYuLS0uIHxcXG58IChcXFxcLykgfFxcbnwgOlxcXFwvOiB8XFxufCAnLS0nNnxcXG5gLS0tLS0tJ1wiLFxuICBcIjdcIjogXCIuLS0tLS0tLlxcbnw3Li0tLiB8XFxufCA6KCk6IHxcXG58ICgpKCkgfFxcbnwgJy0tJzd8XFxuYC0tLS0tLSdcIixcbiAgXCI4XCI6IFwiLi0tLS0tLS5cXG58OC4tLS4gfFxcbnwgOi9cXFxcOiB8XFxufCA6XFxcXC86IHxcXG58ICctLSc4fFxcbmAtLS0tLS0nXCIsXG4gIFwiOVwiOiBcIi4tLS0tLS0uXFxufDkuLS0uIHxcXG58IDovXFxcXDogfFxcbnwgKF9fKSB8XFxufCAnLS0nOXxcXG5gLS0tLS0tJ1wiLFxuICBcIkFcIjogXCIuLS0tLS0tLlxcbnxBLi0tLiB8XFxufCAoXFxcXC8pIHxcXG58IDpcXFxcLzogfFxcbnwgJy0tJ0F8XFxuYC0tLS0tLSdcIixcbiAgXCJCXCI6IFwiLi0tLS0tLS5cXG58Qi4tLS4gfFxcbnwgOigpOiB8XFxufCAoKSgpIHxcXG58ICctLSdCfFxcbmAtLS0tLS0nXCIsXG4gIFwiQ1wiOiBcIi4tLS0tLS0uXFxufEMuLS0uIHxcXG58IDovXFxcXDogfFxcbnwgOlxcXFwvOiB8XFxufCAnLS0nQ3xcXG5gLS0tLS0tJ1wiLFxuICBcIkRcIjogXCIuLS0tLS0tLlxcbnxELi0tLiB8XFxufCA6L1xcXFw6IHxcXG58IChfXykgfFxcbnwgJy0tJ0R8XFxuYC0tLS0tLSdcIixcbiAgXCJFXCI6IFwiLi0tLS0tLS5cXG58RS4tLS4gfFxcbnwgKFxcXFwvKSB8XFxufCA6XFxcXC86IHxcXG58ICctLSdFfFxcbmAtLS0tLS0nXCIsXG4gIFwiRlwiOiBcIi4tLS0tLS0uXFxufEYuLS0uIHxcXG58IDooKTogfFxcbnwgKCkoKSB8XFxufCAnLS0nRnxcXG5gLS0tLS0tJ1wiLFxuICBcIkdcIjogXCIuLS0tLS0tLlxcbnxHLi0tLiB8XFxufCA6L1xcXFw6IHxcXG58IDpcXFxcLzogfFxcbnwgJy0tJ0d8XFxuYC0tLS0tLSdcIixcbiAgXCJIXCI6IFwiLi0tLS0tLS5cXG58SC4tLS4gfFxcbnwgOi9cXFxcOiB8XFxufCAoX18pIHxcXG58ICctLSdIfFxcbmAtLS0tLS0nXCIsXG4gIFwiSVwiOiBcIi4tLS0tLS0uXFxufEkuLS0uIHxcXG58IChcXFxcLykgfFxcbnwgOlxcXFwvOiB8XFxufCAnLS0nSXxcXG5gLS0tLS0tJ1wiLFxuICBcIkpcIjogXCIuLS0tLS0tLlxcbnxKLi0tLiB8XFxufCA6KCk6IHxcXG58ICgpKCkgfFxcbnwgJy0tJ0p8XFxuYC0tLS0tLSdcIixcbiAgXCJLXCI6IFwiLi0tLS0tLS5cXG58Sy4tLS4gfFxcbnwgOi9cXFxcOiB8XFxufCA6XFxcXC86IHxcXG58ICctLSdLfFxcbmAtLS0tLS0nXCIsXG4gIFwiTFwiOiBcIi4tLS0tLS0uXFxufEwuLS0uIHxcXG58IDovXFxcXDogfFxcbnwgKF9fKSB8XFxufCAnLS0nTHxcXG5gLS0tLS0tJ1wiLFxuICBcIk1cIjogXCIuLS0tLS0tLlxcbnxNLi0tLiB8XFxufCAoXFxcXC8pIHxcXG58IDpcXFxcLzogfFxcbnwgJy0tJ018XFxuYC0tLS0tLSdcIixcbiAgXCJOXCI6IFwiLi0tLS0tLS5cXG58Ti4tLS4gfFxcbnwgOigpOiB8XFxufCAoKSgpIHxcXG58ICctLSdOfFxcbmAtLS0tLS0nXCIsXG4gIFwiT1wiOiBcIi4tLS0tLS0uXFxufE8uLS0uIHxcXG58IDovXFxcXDogfFxcbnwgOlxcXFwvOiB8XFxufCAnLS0nT3xcXG5gLS0tLS0tJ1wiLFxuICBcIlBcIjogXCIuLS0tLS0tLlxcbnxQLi0tLiB8XFxufCA6L1xcXFw6IHxcXG58IChfXykgfFxcbnwgJy0tJ1B8XFxuYC0tLS0tLSdcIixcbiAgXCJRXCI6IFwiLi0tLS0tLS5cXG58US4tLS4gfFxcbnwgKFxcXFwvKSB8XFxufCA6XFxcXC86IHxcXG58ICctLSdRfFxcbmAtLS0tLS0nXCIsXG4gIFwiUlwiOiBcIi4tLS0tLS0uXFxufFIuLS0uIHxcXG58IDooKTogfFxcbnwgKCkoKSB8XFxufCAnLS0nUnxcXG5gLS0tLS0tJ1wiLFxuICBcIlNcIjogXCIuLS0tLS0tLlxcbnxTLi0tLiB8XFxufCA6L1xcXFw6IHxcXG58IDpcXFxcLzogfFxcbnwgJy0tJ1N8XFxuYC0tLS0tLSdcIixcbiAgXCJUXCI6IFwiLi0tLS0tLS5cXG58VC4tLS4gfFxcbnwgOi9cXFxcOiB8XFxufCAoX18pIHxcXG58ICctLSdUfFxcbmAtLS0tLS0nXCIsXG4gIFwiVVwiOiBcIi4tLS0tLS0uXFxufFUuLS0uIHxcXG58IChcXFxcLykgfFxcbnwgOlxcXFwvOiB8XFxufCAnLS0nVXxcXG5gLS0tLS0tJ1wiLFxuICBcIlZcIjogXCIuLS0tLS0tLlxcbnxWLi0tLiB8XFxufCA6KCk6IHxcXG58ICgpKCkgfFxcbnwgJy0tJ1Z8XFxuYC0tLS0tLSdcIixcbiAgXCJXXCI6IFwiLi0tLS0tLS5cXG58Vy4tLS4gfFxcbnwgOi9cXFxcOiB8XFxufCA6XFxcXC86IHxcXG58ICctLSdXfFxcbmAtLS0tLS0nXCIsXG4gIFwiWFwiOiBcIi4tLS0tLS0uXFxufFguLS0uIHxcXG58IDovXFxcXDogfFxcbnwgKF9fKSB8XFxufCAnLS0nWHxcXG5gLS0tLS0tJ1wiLFxuICBcIllcIjogXCIuLS0tLS0tLlxcbnxZLi0tLiB8XFxufCAoXFxcXC8pIHxcXG58IDpcXFxcLzogfFxcbnwgJy0tJ1l8XFxuYC0tLS0tLSdcIixcbiAgXCJaXCI6IFwiLi0tLS0tLS5cXG58Wi4tLS4gfFxcbnwgOigpOiB8XFxufCAoKSgpIHxcXG58ICctLSdafFxcbmAtLS0tLS0nXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHMiXX0=