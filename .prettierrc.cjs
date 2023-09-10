module.exports = {
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'],
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
};
