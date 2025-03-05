import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";
import { defineAnimationStyles } from "@chakra-ui/react";

export const semanticTokens = {
  colors: {
    primary: {
      value: { base: "#007acc", _dark: "#ffff00" },
    },
    secondary: {
      value: { base: "#ffff00", _dark: "#f8f9fa" },
    },

    primaryHover: {
      value: { base: "#005bb5", _dark: "#c7c700" },
    },

    primaryBackground: {
      value: {
        base: "#f8f9fa",
        _dark: "#121212",
      },
    },
    secondaryBackground: {
      value: {
        base: "#121212",
        _dark: "#f8f9fa",
      },
    },

    scrollbarBackground: {
      value: { base: "#e3e3e3", _dark: "#202020" },
    },

    primaryText: {
      value: { base: "#ffffff", _dark: "#121212" },
    },
    secondaryText: {
      value: { base: "#121212", _dark: "#ffffff" },
    },

    primaryIconBg: {
      value: { base: "#f0f0f0", _dark: "#353535" },
    },
    primaryIcon: {
      value: { base: "#121212", _dark: "#ffffff" },
    },
    primaryIconHover: {
      value: { base: "#ffffff", _dark: "#121212" },
    },
    primaryIconBorder: {
      value: { base: "#C9C9C9", _dark: "#4F4F4F" },
    },
  },
};

const breakpoints = {
  mobile: "380px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1200px",
  ultrawide: "1400px",
};

const animationStyles = defineAnimationStyles({
  bounceFadeIn: {
    value: {
      animationName: "bounce, fade-in",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    },
  },
});

const customConfig = defineConfig({
  globalCss: {
    "*": {
      fontFamily: "montserrat",
    },
    body: {
      backgroundColor: "primaryBackground",
    },
  },
  theme: {
    semanticTokens,
    breakpoints,
    animationStyles,
  },
});

const config = mergeConfigs(defaultConfig, customConfig);

const theme = createSystem(config);

export default theme;
