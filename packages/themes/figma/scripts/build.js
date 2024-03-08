const StyleDictionaryPackage = require('style-dictionary');

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `../figma/tokens/themes/${brand}/*.json`,
      // `tokens/platforms/${platform}/*.json`
    ],
    platforms: {
      /**
       * Available platforms: https://amzn.github.io/style-dictionary/#/config?id=platform
       */
      cssDefaultTheme: {
        transforms: [`attribute/cti`, `name/cti/kebab`, `color/css`],
        buildPath: `dist/css/${brand}/`,
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
          },
        ],
      },
    },
  }
}

/**
 * Build the tokens for each theme.
 * Default theme is blue-jeans.
 * {@see - Example based on https://github.com/amzn/style-dictionary/tree/main/examples/advanced/multi-brand-multi-platform}
 */
['blue-jeans'].map(function (brand) {
  ['cssDefaultTheme'].map(function (platform) {
    console.log(`Processing: [${platform}] [${brand}]`);
    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform),
    )

    StyleDictionary.buildPlatform(platform)
  })
})
