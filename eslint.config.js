import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import { rules } from "eslint-plugin-react-refresh";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);
