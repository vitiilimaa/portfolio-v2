"use client";
import { Flex, Text } from "@chakra-ui/react";

import { MdWest } from "react-icons/md";

import {
  GeneralContainer,
  SectionContainer,
} from "@portfolio/components/Containers";
import OutlineButton from "@portfolio/components/Buttons/OutlineButton";
import LargeText from "@portfolio/components/Texts/ExtraLargeText";
import useParticles from "@portfolio/hooks/useParticles";

import Particles from "@tsparticles/react";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const { options } = useParticles();

  const router = useRouter();

  const handleClickBackToHomeButton = () => router.push("/inicio");

  return (
    <GeneralContainer height={"100vh"} overflow={"hidden"}>
      <SectionContainer
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        minHeight={"100%"}
        width={"100%"}
        maxWidth={"1440px"}
        zIndex={1}
        bgColor={"transparent"}
      >
        <Text color={"primary"} fontSize={{ base: "24px", md: "36px" }}>
          404
        </Text>
        <LargeText mt={"20px"} fontWeight={"bold"} color="secondaryText">
          A página que você tentou acessar não foi encontrada :(
        </LargeText>
        <Flex mt={"50px"} alignItems={"center"} gap={"30px"} flexWrap={"wrap"}>
          <OutlineButton onClick={handleClickBackToHomeButton}>
            <MdWest /> Voltar para o início
          </OutlineButton>
        </Flex>
      </SectionContainer>

      <Particles id="tsparticles" options={options} />
    </GeneralContainer>
  );
};

export default NotFound;
