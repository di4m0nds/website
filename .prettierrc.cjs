module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  plugins: [
    require("prettier-plugin-astro"),
  ],
  override: [
    {
      files: "**/*astro",
      options: {
        parser: "astro",
      }
    }
  ]
};