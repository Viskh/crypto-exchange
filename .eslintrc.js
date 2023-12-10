module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "only-warn",
    "prettier",
    "simple-import-sort",
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "import/order": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^react", "^@?\\w"],
          [
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
          ],

          ["^"],
          ["^.+\\.?(types)$"],
        ],
      },
    ],
    "no-console": "warn",
    "import/no-unresolved": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
