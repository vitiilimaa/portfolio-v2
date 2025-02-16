import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "*": {
      fontFamily: "montserrat",
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        primary: {
          value: { base: "#007acc", _dark: "#ffff00" },
        },
        secondary: {
          value: { base: "#ffff00", _dark: "#323330" },
        },
      },
    },
  },
});

const config = mergeConfigs(defaultConfig, customConfig);

const theme = createSystem(config);

export default theme;
