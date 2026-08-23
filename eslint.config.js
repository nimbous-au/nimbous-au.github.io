import pluginAstro from "eslint-plugin-astro";

export default [
  ...pluginAstro.configs.recommended,
  {
    rules: {
      // Dynamic class additions (JS, :global) cause false positives
      "astro/no-unused-css-selector": "off",
    },
  },
];
