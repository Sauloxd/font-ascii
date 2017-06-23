const Twisted = {
  '0': '   _____    \n  / ___ \\   \n / /\\_/\\ \\  \n/ /_/ (_\\ \\ \n\\ \\ )_/ / / \n \\ \\/_\\/ /  \n  \\ ____/   \n            ',
  '1': ' _ __     \n/_ \\ \\    \n  ) ) )   \n / / /    \n \\ \\ \\_   \n  ) )__/\\ \n  \\/___\\/ \n          ',
  '2': '  _ __     \n /_ \\ \\    \n(/_) ) )   \n  / / /    \n  \\ \\ \\_   \n   ) )__/\\ \n   \\/___\\/ \n           ',
  '3': '  _____    \n /\\__  /\\  \n(_( _)( (  \n    __ \\ \\ \n __ _  / / \n( (__)( (  \n \\/____\\/  \n           ',
  '4': '   ____    \n  /\\__/\\   \n / /_ \\ \\  \n/ /(_)/ /  \n\\/___ \\ \\  \n     )_) ) \n     \\_\\/  \n           ',
  '5': ' __ ____   \n/ /  __/\\  \n) ) ( _\\/  \n\\_\\____ (  \n   __\\ \\ \\ \n /\\__/ / / \n \\/____\\/  \n           ',
  '6': '     _    \n    /_/\\  \n    )_) ) \n _ _// /  \n/\\(_)\\ \\  \n\\ \\__/ /  \n \\/__\\/   \n          ',
  '7': ' ___ __   \n/___ \\ \\  \n    ) ) ) \n   / / /  \n   \\ \\ \\  \n    ) ) ) \n    \\/_/  \n          ',
  '8': '  ____    \n /\\___/\\  \n/ / _ \\ \\ \n\\ \\( )/ / \n/ /(_)\\ \\ \n\\ \\___/ / \n \\/___\\/  \n          ',
  '9': '  _____    \n /\\___/\\   \n/ / _ \\ \\  \n\\ \\( )/ /  \n \\/_/ \\ \\  \n     )_) ) \n     \\_\\/  \n           ',
  'A': '   _____    \n  /\\___/\\   \n / / _ \\ \\  \n \\ \\(_)/ /  \n / / _ \\ \\  \n( (_( )_) ) \n \\/_/ \\_\\/  \n            ',
  'B': '   _____   \n /\\  __/\\  \n ) )(_ ) ) \n/ / __/ /  \n\\ \\  _\\ \\  \n ) )(__) ) \n \\/____\\/  \n           ',
  'C': '  _____  \n /\\ __/\\ \n ) )__\\/ \n/ / /    \n\\ \\ \\_   \n ) )__/\\ \n \\/___\\/ \n         ',
  'D': '  _____    \n /\\ __/\\   \n ) )  \\ \\  \n/ / /\\ \\ \\ \n\\ \\ \\/ / / \n ) )__/ /  \n \\/___\\/   \n           ',
  'E': '   _____  \n /\\_____\\ \n( (_____/ \n \\ \\__\\   \n / /__/_  \n( (_____\\ \n \\/_____/ \n          ',
  'F': '   _____  \n /\\_____\\ \n( (  ___/ \n \\ \\ \\_   \n / / /_\\  \n/ /____/  \n\\/_/      \n          ',
  'G': '  ______    \n /_/\\___\\   \n ) ) ___/   \n/_/ /  ___  \n\\ \\ \\_/\\__\\ \n )_)  \\/ _/ \n \\_\\____/   \n            ',
  'H': '  __   __   \n /\\_\\ /_/\\  \n( ( (_) ) ) \n \\ \\___/ /  \n / / _ \\ \\  \n( (_( )_) ) \n \\/_/ \\_\\/  \n            ',
  'I': '  __   \n /\\_\\  \n \\/_/  \n  /\\_\\ \n / / / \n( (_(  \n \\/_/  \n       ',
  'J': '     __   \n    /_/\\  \n    ) ) ) \n _ /_/ /  \n/_/\\ \\ \\  \n)_) ) ) ) \n\\_\\___\\/  \n          ',
  'K': '  __  __   \n /\\_\\\\  /\\ \n( ( (/ / / \n \\ \\_ / /  \n / /  \\ \\  \n( (_(\\ \\ \\ \n \\/_//__\\/ \n           ',
  'L': '  __      \n /\\_\\     \n( ( (     \n \\ \\_\\    \n / / /__  \n( (_____( \n \\/_____/ \n          ',
  'M': '  __    __   \n /_/\\  /\\_\\  \n ) ) \\/ ( (  \n/_/ \\  / \\_\\ \n\\ \\ \\\\// / / \n )_) )( (_(  \n \\_\\/  \\/_/  \n             ',
  'N': '  __   __   \n /_/\\ /\\_\\  \n ) ) \\ ( (  \n/_/   \\ \\_\\ \n\\ \\ \\   / / \n )_) \\ (_(  \n \\_\\/ \\/_/  \n            ',
  'O': '   _____    \n  ) ___ (   \n / /\\_/\\ \\  \n/ /_/ (_\\ \\ \n\\ \\ )_/ / / \n \\ \\/_\\/ /  \n  )_____(   \n            ',
  'P': '  __ __    \n /_/\\__/\\  \n ) ) ) ) ) \n/_/ /_/ /  \n\\ \\ \\_\\/   \n )_) )     \n \\_\\/      \n           ',
  'Q': '   _____     \n  / ___ (    \n / /\\_/\\ \\   \n/ /_/ (_\\ \\  \n\\ \\ )_/ / (  \n \\ \\/_\\/ \\_\\ \n  \\_____\\/_/ \n             ',
  'R': '  __ __    \n /_/\\__/\\  \n ) ) ) ) ) \n/_/ /_/_/  \n\\ \\ \\ \\ \\  \n )_) ) \\ \\ \n \\_\\/ \\_\\/ \n           ',
  'S': ' ______  \n/ ____/\\ \n) ) __\\/ \n \\ \\ \\   \n _\\ \\ \\  \n)____) ) \n\\____\\/  \n         ',
  'T': '  _______   \n/\\_______)\\ \n\\(___  __\\/ \n  / / /     \n ( ( (      \n  \\ \\ \\     \n  /_/_/     \n            ',
  'U': '  __    __   \n /\\_\\  /_/\\  \n( ( (  ) ) ) \n \\ \\ \\/ / /  \n  \\ \\  / /   \n  ( (__) )   \n   \\/__\\/    \n             ',
  'V': '  _     _   \n /_/\\ /\\_\\  \n ) ) ) ( (  \n/_/ / \\ \\_\\ \n\\ \\ \\_/ / / \n \\ \\   / /  \n  \\_\\_/_/   \n            ',
  'W': '  _      _   \n /_/\\  /\\_\\  \n ) ) )( ( (  \n/_/ //\\\\ \\_\\ \n\\ \\ /  \\ / / \n )_) /\\ (_(  \n \\_\\/  \\/_/  \n             ',
  'X': '  __  __   \n/\\  /\\  /\\ \n\\ \\ \\/ / / \n \\ \\  / /  \n / /  \\ \\  \n/ / /\\ \\ \\ \n\\/__\\/__\\/ \n           ',
  'Y': '  __  __   \n/\\  /\\  /\\ \n\\ \\ \\/ / / \n \\ \\__/ /  \n  \\__/ /   \n  / / /    \n  \\/_/     \n           ',
  'Z': ' _____     \n/\\____\\    \n\\/_ ( (    \n   \\ \\_\\   \n   / / /__ \n  ( (____( \n   \\/____/ \n           '
}

export default Twisted