import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js, "@typescript-eslint": tseslint },
    extends: ["js/recommended", "plugin:@typescript-eslint/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },

  tseslint.configs.recommended,
]);
