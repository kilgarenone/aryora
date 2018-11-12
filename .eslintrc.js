module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  rules: {
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ]
  },
  settings: {
    "import/core-modules": ["gatsby"]
  },
  env: {
    browser: true,
    es6: true
  }
};
