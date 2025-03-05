"use client";
import { Flex } from "@chakra-ui/react";

import { MdEast, MdWest } from "react-icons/md";

import { SectionContainer } from "@portfolio/components/Containers";
import { OutlineButton } from "@portfolio/components/Buttons";
import LargeText from "@portfolio/components/Texts/LargeText";
import useProjects from "@portfolio/hooks/en-us/useProjects";
import ProjectTypesTabs from "../ProjectTypesTabs";

const Projects = () => {
  const { handleClickAboutMeButton, handleClickGetInTouchButton } =
    useProjects();

  return (
    <SectionContainer minHeight={"100%"} pt={0} pb={"120px"}>
      <Flex mt={{ base: "150px", md: "184px" }} width={"100%"}>
        <LargeText fontWeight={"bold"}>
          Projects
          <LargeText as={"span"} color={"primary"}>
            .
          </LargeText>
        </LargeText>
      </Flex>
      <Flex
        mt={"40px"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ProjectTypesTabs />
      </Flex>

      <OutlineButton
        size={"md"}
        fontWeight={"semibold"}
        fontSize={16}
        mt={"20px"}
        onClick={handleClickAboutMeButton}
      >
        <MdWest /> About
      </OutlineButton>

      <OutlineButton
        size={"md"}
        fontWeight={"semibold"}
        fontSize={16}
        mt={"20px"}
        float={"right"}
        onClick={handleClickGetInTouchButton}
      >
        Contact <MdEast />
      </OutlineButton>
    </SectionContainer>
  );
};

export default Projects;
