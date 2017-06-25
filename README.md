![fontascii](http://i.imgur.com/xXBkyTE.png)

# Font Ascii
An Awesome Logger That will log an ASCII phrase for you!
Import and use it in your code, or just use the CLI (command line interface)

# How to use
![fontascii](https://media.giphy.com/media/l0Iy5KrlroP0MSqiI/giphy.gif "How to Use")

## Installing
Easy! Just type this in your project
``` bash
npm i --save font-ascii
```
or
``` bash
npm i -g font-ascii
```

## Using - CLI
If you installed globally, just:
`font-ascii 'Hello World'`

Otherwise, use it like:
`$(npm bin)/font-ascii 'Hello World'`

## Using - Importing
You can import it on your project like this:

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

## Typeface
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
## Color
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

## Object
``` javascript

const config = {
  typeface: STRING,
  color: STRING,
  verbose: BOOLEAN,
}

```

## Contributing
It's a random idea I had and done in my free time, so probably it contains a lot of bugs, but feel free to open a PR with any optimization! Anything would be awesome!

And [ISSUES](https://github.com/sauloxd/font-ascii/issues), open them if you find anything wrong.

LOTS AND LOTS of kudos to this guys, and his awesome site:

[Patorjk](http://patorjk.com/software/taag/#p=display&f=Alpha&t=A)

There you'll find shit ton of other fonts.


