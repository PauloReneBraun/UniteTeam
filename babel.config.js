module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    Plugins: [
      "module-resolver",
      {
        root: ["./src"], // This is root directory
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@theme": "./src/theme",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@navigations": "./src/navigations",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@utils": "./src/utils",
        },
      },
    ],
  };
};
