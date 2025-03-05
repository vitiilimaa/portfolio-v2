"use client";
import { Box, Center, Flex } from "@chakra-ui/react";

import { VLogoPart } from "@portfolio/assets";

import Image from "next/image";

import "./styles.css";

const LoadingScreen = () => {
  return (
    <Center
      width={"100%"}
      h="100vh"
      bg="black"
      top={0}
      overflow={"hidden"}
      zIndex={9999}
      position={"fixed"}
      transition="opacity 0.5s ease-in-out"
      pointerEvents={"none"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        w="200px"
        h="200px"
      >
        <Flex
          position={"absolute"}
          bottom={"23px"}
          w="220px"
          h="220px"
          animation={"pulse 2s infinite"}
          animationDelay={"0.8s"}
          boxShadow={"0 0 0 0 rgba(255, 255, 0, 0.5)"}
          borderRadius={"250px"}
        />
        <Image
          src={VLogoPart}
          alt="Logo V"
          style={{ width: "60%", height: "60%", marginBottom: 20, zIndex: -1 }}
        />

        <Box
          className="spin-ball"
          position={"absolute"}
          w="20px"
          h="20px"
          bg="#ffff00"
          borderRadius="full"
          top={"-55px"}
          left={"50%"}
          transform="translate(-50%, -50%)"
          style={{
            transformOrigin: "0px 120px",
          }}
        />
      </Flex>
    </Center>
  );
};

export default LoadingScreen;
