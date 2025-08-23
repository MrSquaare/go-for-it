import config from "@go-for-it/eslint-config";
import configReact from "@go-for-it/eslint-config-react";
import globals from "globals";

export default [
  {
    ignores: ["dist"],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  ...config,
  ...configReact,
];
