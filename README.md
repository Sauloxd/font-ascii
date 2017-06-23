# Font Ascii

An Awesome Logger That will log a ASCII phrase for you!

# How to use
You can import it on your project like this:

## Importing
``` javascript

//ES6 Flavour
import formPhrase from 'font-ascii'

//Old fashioned
var formPhrase = require('font-ascii').default

```

## Using
``` javascript
formPhrase('Awesome Phrase')
```

# Configuration
Per default, it will use a random font, but you can choose one of the following:

 - Acrobatic
 - Alpha
 - Avatar
 - Big
 - BigMoneyne
 - BigMoneynw
 - BigMoneyse
 - BigMoneysw
 - Blocks
 - Bulbhead
 - Cards
 - Chiseled
 - Crawford2
 - Crazy
 - DancingFont
 - Diagonal3d
 - Doh
 - Doom
 - EftiWall
 - Epic
 - Firefontk
 - FireFonts
 - FlowerPower
 - FunFace
 - FunFaces
 - Ghost
 - Graceful
 - Graffiti
 - Impossible
 - Isometric1
 - Isometric2
 - Isometric3
 - Isometric4
 - JSBracketLetters
 - LilDevil
 - Merlin1
 - Modular
 - Ogre
 - PatorjkCheese
 - PatorjkHeX
 - Rectangles
 - Slant
 - SlantRelief
 - Small
 - SmallIsometric1
 - SmallSlant
 - Soft
 - Standard
 - StarWars
 - SubZero
 - SwampLand
 - Sweet
 - Train
 - Twisted
 - Varsity
 - WetLetts

And pass it like:

``` javascript
formPhrase('Hello', { typeface: 'Diagonal3d' })
```

You can choose one of these defaults color. Otherwise it's always random:

 - 'red'
 - 'green'
 - 'yellow'
 - 'blue'
 - 'magenta'
 - 'cyan'
 - 'white'
 - 'gray'
 - 'grey'

``` javascript
formPhrase('Hello', { typeface: 'Diagonal3d', color: 'red' })
```

# Cloning

If you clone this repo, you'll have to use babel to transpile the source code.
But when you do, you can use the simple CLI, just for lolz, that will output phrases. Just run:

``` bash
babel-node src/cli.js
```

## Contributing

It's a random idea I had and done in my free time, so probably it contains a lot of bugs, but feel free to open a PR with any optimization! Anything would be awesome!

And **ISSUES**, open them if you find anything wrong.

LOTS AND LOTS of kudos to this guys, and his awesome site:

[Patorjk](http://patorjk.com/software/taag/#p=display&f=Alpha&t=A)

There you'll find shit ton of other fonts.
