module.exports = {
    printWidth: 100,
    tabWidth: 4,
    singleQuote: true,
    bracketSpacing: true,
    semi: true,
    arrowParens: 'always',
    proseWrap: 'always',
    trailingComma: 'es5',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.jsx',
            options: {
                printWidth: 150,
            },
        },
    ],
  };
  