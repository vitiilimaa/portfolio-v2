import { useColorMode } from "@portfolio/components/ui/color-mode";
import { semanticTokens } from "@portfolio/configs/theme";

import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

import { useCallback, useEffect, useMemo, useState } from "react";

const useParticles = () => {
  const [primaryColor, setPrimaryColor] = useState("");

  const { colorMode } = useColorMode();

  const getModePrimaryColor = useCallback(
    () =>
      colorMode === "dark"
        ? semanticTokens.colors.primary.value._dark
        : semanticTokens.colors.primary.value.base,
    [colorMode]
  );

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        color: {
          value: primaryColor,
        },
        links: {
          color: primaryColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 25,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    }),
    [primaryColor]
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  useEffect(() => {
    setPrimaryColor(getModePrimaryColor());
  }, [getModePrimaryColor]);

  return { options };
};

export default useParticles;
