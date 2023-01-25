module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        printWidth: 100,
        singleQuote: true,
        quoteProps: "preserve",
        jsxSingleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
        requirePragma: true,
        insertPragma: true,
        htmlWhitespaceSensitivity: "strict",
        singleAttributePerLine: true,
      },
    },
  ],
};
