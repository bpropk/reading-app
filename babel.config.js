module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
      },
    ],
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".js", ".ts", ".tsx", ".json"],
        alias: {
          "@src": "./src",
          "@assets": "./assets",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
