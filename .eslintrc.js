module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    // Internal rules
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "no-trailing-spaces": "error",
    // React Native Plugin
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    // React
    "react/prop-types": 0,
  },
};
