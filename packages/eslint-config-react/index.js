import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-curly-brace-presence": ["error", { props: "always" }],
      "react/jsx-sort-props": ["error"],
    },
  },
];
