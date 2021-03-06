module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "sr": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error", "single", {
        "allowTemplateLiterals": true
      }
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": 0
  }
};