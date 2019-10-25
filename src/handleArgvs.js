const type = {
  '-t': 'typeface',
  '-s': 'sentence',
  '-c': 'color',
  '-v': 'verbose',
  '--typeface': 'typeface',
  '--sentence': 'sentence',
  '--color': 'color',
  '--verbose': 'verbose',
};

const handlers = {
  input: (argv, matcher, config, index) => {
    if (!matcher[argv]) throw new Error('INVALID_INPUT: ' + argv);

    return Object.assign({}, config, {
      [matcher[argv]]: index,
    });
  },
};

function removeNumber(obj) {
  return Object.keys(obj)
    .filter(key => !(typeof obj[key] === 'number'))
    .reduce((acc, key) => Object.assign({}, acc, { [key]: obj[key] }), {});
}

function isExpectingInput(config, lastInputIndex) {
  var expectingInput = Object.keys(config).filter(function(key) {
    return config[key] === lastInputIndex;
  });

  return expectingInput.length !== 0 && expectingInput[0];
}

export default function handleArgvs(argvs) {
  return removeNumber(
    argvs.reduce((config, argv, index) => {
      if (argv[0] === '-') return handlers.input(argv, type, config, index);
      // Expecting Input
      const expectingInput = isExpectingInput(config, index - 1);
      if (expectingInput)
        return Object.assign({}, config, {
          [expectingInput]: argv,
        });

      return Object.assign({}, config, {
        sentence: argv,
      });
    }, {}),
  );
}
