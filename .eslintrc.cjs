module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    quotes: "off",
    semi: "off",
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "comma-dangle": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error"
    ],
  },
}
