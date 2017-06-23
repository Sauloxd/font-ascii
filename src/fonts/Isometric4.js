const Isometric4 = {
  '0': '\n\n\n\n\n\n\n\n\n',
  '1': '\n\n\n\n\n\n\n\n\n',
  '2': '\n\n\n\n\n\n\n\n\n',
  '3': '\n\n\n\n\n\n\n\n\n',
  '4': '\n\n\n\n\n\n\n\n\n',
  '5': '\n\n\n\n\n\n\n\n\n',
  '6': '\n\n\n\n\n\n\n\n\n',
  '7': '\n\n\n\n\n\n\n\n\n',
  '8': '\n\n\n\n\n\n\n\n\n',
  '9': '\n\n\n\n\n\n\n\n\n',
  'A': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /::\\ \\:\\ \n /__/:/\\:\\_\\:\\\n \\__\\/  \\:\\/:/\n      \\__\\::/ \n      /  /:/  \n     /__/:/   \n     \\__\\/    ',
  'B': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /::\\ \\:\\ \n /__/:/\\:\\_\\:|\n \\  \\:\\ \\:\\/:/\n  \\  \\:\\_\\::/ \n   \\  \\:\\/:/  \n    \\__\\::/   \n        ~~    ',
  'C': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /:/  \\:\\ \n /__/:/ \\  \\:\\\n \\  \\:\\  \\__\\/\n  \\  \\:\\      \n   \\  \\:\\     \n    \\  \\:\\    \n     \\__\\/    ',
  'D': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /:/  \\:\\ \n /__/:/ \\__\\:|\n \\  \\:\\ /  /:/\n  \\  \\:\\  /:/ \n   \\  \\:\\/:/  \n    \\__\\::/   \n        ~~    ',
  'E': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /::\\ \\:\\ \n /__/:/\\:\\ \\:\\\n \\  \\:\\ \\:\\_\\/\n  \\  \\:\\ \\:\\  \n   \\  \\:\\_\\/  \n    \\  \\:\\    \n     \\__\\/    ',
  'F': '              \n      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /::\\ \\:\\ \n /__/:/\\:\\ \\:\\\n \\__\\/  \\:\\_\\/\n      \\  \\:\\  \n       \\__\\/  \n              ',
  'G': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /:/  \\:\\ \n /__/:/_\\_ \\:\\\n \\  \\:\\__/\\_\\/\n  \\  \\:\\ \\:\\  \n   \\  \\:\\/:/  \n    \\  \\::/   \n     \\__\\/    ',
  'H': '      ___     \n     /  /\\    \n    /  /:/    \n   /  /:/     \n  /  /::\\ ___ \n /__/:/\\:\\  /\\\n \\__\\/  \\:\\/:/\n      \\__\\::/ \n      /  /:/  \n     /__/:/   \n     \\__\\/    ',
  'I': '             \n       ___   \n      /__/\\  \n      \\__\\:\\ \n      /  /::\\\n   __/  /:/\\/\n  /__/\\/:/~~ \n  \\  \\::/    \n   \\  \\:\\    \n    \\__\\/    \n             ',
  'J': '             \n       ___   \n      /__/\\  \n      \\__\\:\\ \n  ___ /  /::\\\n /__/\\  /:/\\/\n \\  \\:\\/:/~~ \n  \\  \\::/    \n   \\__\\/     \n             \n             ',
  'K': '      ___     \n     /  /\\    \n    /  /:/    \n   /  /:/     \n  /  /::\\____ \n /__/:/\\:::::\\\n \\__\\/~|:|~~~~\n    |  |:|    \n    |  |:|    \n    |__|:|    \n     \\__\\|    ',
  'L': '      ___ \n     /  /\\\n    /  /:/\n   /  /:/ \n  /  /:/  \n /__/:/   \n \\  \\:\\   \n  \\  \\:\\  \n   \\  \\:\\ \n    \\  \\:\\\n     \\__\\/',
  'M': '      ___     \n     /  /\\    \n    /  /::|   \n   /  /:|:|   \n  /  /:/|:|__ \n /__/:/_|::::\\\n \\__\\/  /~~/:/\n       /  /:/ \n      /  /:/  \n     /__/:/   \n     \\__\\/    ',
  'N': '      ___     \n     /  /\\    \n    /  /::|   \n   /  /:|:|   \n  /  /:/|:|__ \n /__/:/ |:| /\\\n \\__\\/  |:|/:/\n     |  |:/:/ \n     |__|::/  \n     /__/:/   \n     \\__\\/    ',
  'O': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /:/  \\:\\ \n /__/:/ \\__\\:\\\n \\  \\:\\ /  /:/\n  \\  \\:\\  /:/ \n   \\  \\:\\/:/  \n    \\  \\::/   \n     \\__\\/    ',
  'P': '              \n      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /::\\ \\:\\ \n /__/:/\\:\\_\\:\\\n \\__\\/  \\:\\/:/\n      \\  \\::/ \n       \\__\\/  \n              ',
  'Q': '      ___     \n     /  /\\    \n    /  /::\\   \n   /__/:/\\:\\  \n   \\  \\:\\ \\:\\ \n    \\  \\:\\ \\:\\\n     \\  \\:\\/:/\n      \\__\\::/ \n      /  /:/  \n     /__/:/   \n     \\__\\/    ',
  'R': '      ___     \n     /  /\\    \n    /  /::\\   \n   /  /:/\\:\\  \n  /  /::\\ \\:\\ \n /__/:/\\:\\_\\:\\\n \\__\\/~|::\\/:/\n    |  |:|::/ \n    |  |:|\\/  \n    |__|:|~   \n     \\__\\|    ',
  'S': '      ___     \n     /  /\\    \n    /  /::\\   \n   /__/:/\\:\\  \n  _\\_ \\:\\ \\:\\ \n /__/\\ \\:\\ \\:\\\n \\  \\:\\ \\:\\_\\/\n  \\  \\:\\_\\:\\  \n   \\  \\:\\/:/  \n    \\  \\::/   \n     \\__\\/    ',
  'T': '              \n      ___     \n     /__/\\    \n     \\  \\:\\   \n      \\__\\:\\  \n      /  /::\\ \n     /  /:/\\:\\\n    /  /:/__\\/\n   /__/:/     \n   \\__\\/      \n              ',
  'U': '      ___     \n     /  /\\    \n    /  /:/    \n   /  /:/     \n  /  /:/      \n /__/:/     /\\\n \\  \\:\\    /:/\n  \\  \\:\\  /:/ \n   \\  \\:\\/:/  \n    \\  \\::/   \n     \\__\\/    ',
  'V': '              \n      ___     \n     /  /\\    \n    /  /:/    \n   /  /:/     \n  /__/:/  ___ \n  |  |:| /  /\\\n  |  |:|/  /:/\n  |__|:|__/:/ \n   \\__\\::::/  \n       ~~~~   ',
  'W': '      ___     \n     /  /\\    \n    /  /:/_   \n   /  /:/ /\\  \n  /  /:/ /:/_ \n /__/:/ /:/ /\\\n \\  \\:\\/:/ /:/\n  \\  \\::/ /:/ \n   \\  \\:\\/:/  \n    \\  \\::/   \n     \\__\\/    ',
  'X': '      __      \n     |  |\\    \n     |  |:|   \n     |  |:|   \n     |__|:|__ \n ____/__/::::\\\n \\__\\::::/~~~~\n    |~~|:|    \n    |  |:|    \n    |__|:|    \n     \\__\\|    ',
  'Y': '              \n      __      \n     |  |\\    \n     |  |:|   \n     |  |:|   \n     |__|:|__ \n     /  /::::\\\n    /  /:/~~~~\n   /__/:/     \n   \\__\\/      \n              ',
  'Z': '      ___     \n     /__/\\    \n     \\  \\:\\   \n      \\  \\:\\  \n       \\  \\:\\ \n  ______\\__\\:\\\n \\  \\::::::::/\n  \\  \\:\\~~~~~ \n   \\  \\:\\     \n    \\  \\:\\    \n     \\__\\/    '
}

export default Isometric4