/** @type {import("prettier").Config} */
module.exports = {
  // semi: false,
  // singleQuote: true,
  // tabWidth: 2,
  // useTabs: false,
  ...require('prettier-config-standard'),
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  // override: [
  //   {
  //     files: "**/*astro",
  //     options: {
  //       parser: "astro",
  //     }
  //   }
  // ]
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
