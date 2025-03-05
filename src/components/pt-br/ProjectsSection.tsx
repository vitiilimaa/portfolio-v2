"use client";
import { Box, Card, Flex, Text } from "@chakra-ui/react";

import { MdEast } from "react-icons/md";

import projectsData from "@portfolio/data/pt-br/projectsData";

import { GeneralContainer, SectionContainer } from "../Containers";
import { OutlineButton, SolidButton } from "../Buttons";
import { toaster } from "../ui/toaster";
import LargeText from "../Texts/LargeText";

import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

const ProjectsSection = () => {
  const router = useRouter();

  const projectData = projectsData.find((project) => project.featured);

  const handleClickViewProjectButton = (projectId: number | undefined) => {
    if (typeof projectId === "number") {
      router.push(`/projetos/${projectId}`);
      return;
    }

    toaster.error({
      title: `Erro ao acessar projeto destaque. Por favor, tente novamente mais tarde.`,
    });
  };

  const handleClickButtonSeeMoreProjects = () => router.push("/projetos");

  return (
    <GeneralContainer minHeight={"100vh"} zIndex={2}>
      <SectionContainer
        flexDirection={"column"}
        display={"flex"}
        py={"80px"}
        rowGap={"20px"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Flex
          width={"100%"}
          columnGap={{ base: 2, sm: 3 }}
          fontWeight={"bold"}
          flexWrap={"wrap"}
        >
          <LargeText>
            Projeto destaque
            <LargeText as={"span"} color={"primary"}>
              .
            </LargeText>
          </LargeText>
        </Flex>

        <Flex width={"100%"} flexDirection={"column"} gap={5} overflow={"auto"}>
          <Card.Root
            key={projectData?.id}
            width={"100%"}
            borderColor={"primary"}
            overflow={"hidden"}
          >
            <Card.Body
              flexWrap={"wrap"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              width={"100%"}
              gap={8}
              padding={{ base: "20px", md: "40px" }}
              overflow={"auto"}
            >
              <Box width={"450px"}>
                <Box width={"100%"} rounded={"md"} overflow={"hidden"} flex={1}>
                  <Image
                    src={projectData?.projectImages[0] as StaticImageData}
                    alt={`${projectData?.projectName
                      .replace(" ", "_")
                      .toLowerCase()}_project`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
              <Flex flex={1} flexDirection={"column"}>
                <Box
                  alignSelf={"self-start"}
                  bgColor="primary"
                  color={"primaryText"}
                  fontWeight={"bold"}
                  borderRadius={"6px"}
                >
                  <Text p={"4px 8px"} fontSize={"12px"}>
                    {projectData?.category}
                  </Text>
                </Box>
                <Flex
                  mt={"15px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  gap={5}
                >
                  <Card.Title>
                    <LargeText lineHeight={"45px"}>
                      {projectData?.projectName}
                    </LargeText>
                  </Card.Title>
                  <OutlineButton
                    fontWeight={"semibold"}
                    fontSize={16}
                    size={"md"}
                    onClick={() =>
                      handleClickViewProjectButton(projectData?.id)
                    }
                  >
                    Ver projeto <MdEast />
                  </OutlineButton>
                </Flex>
                <Flex mt={"20px"} gap={"10px"} flexWrap={"wrap"}>
                  {projectData?.technologies.map((technology) => (
                    <Box
                      key={technology}
                      whiteSpace={"nowrap"}
                      alignSelf={"self-start"}
                      border="1px solid"
                      borderColor="primary"
                      color={"primary"}
                      fontWeight={"bold"}
                      borderRadius={"6px"}
                      cursor={"context-menu"}
                    >
                      <Text p={"4px 8px"} fontSize={"12px"}>
                        {technology}
                      </Text>
                    </Box>
                  ))}
                </Flex>
                <Card.Description
                  mt={"30px"}
                  fontSize={"16px"}
                  color={"secondaryText"}
                  whiteSpace={"break-spaces"}
                >
                  {projectData?.projectDescription}
                </Card.Description>
              </Flex>
            </Card.Body>
          </Card.Root>
        </Flex>

        <Flex justifyContent={"end"}>
          <SolidButton onClick={handleClickButtonSeeMoreProjects}>
            Ver mais projetos <MdEast />
          </SolidButton>
        </Flex>
      </SectionContainer>
    </GeneralContainer>
  );
};

export default ProjectsSection;
