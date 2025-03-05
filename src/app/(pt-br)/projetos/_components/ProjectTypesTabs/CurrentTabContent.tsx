import { Box, Card, Flex, Tabs, Text } from "@chakra-ui/react";

import { MdEast } from "react-icons/md";

import { OutlineButton } from "@portfolio/components/Buttons";
import LargeText from "@portfolio/components/Texts/LargeText";
import useCurrentTabContent from "@portfolio/hooks/pt-br/useProjects/useCurrentTabContent";

import Image, { StaticImageData } from "next/image";

type CurrentTabContentProps = {
  currentTab: string;
};

const CurrentTabContent = (props: CurrentTabContentProps) => {
  const { currentTab } = props;

  const { currentProjects, handleClickViewProjectButton } =
    useCurrentTabContent({ currentTab });

  return (
    <Tabs.Content
      value={currentTab}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      mt={"40px"}
      flexDirection={"column"}
      gap={"30px"}
      p={0}
    >
      {currentProjects.map((project) => (
        <Flex
          key={project?.id}
          width={"100%"}
          flexDirection={"column"}
          gap={5}
          overflow={"auto"}
        >
          <Card.Root width={"100%"} borderColor={"primary"} overflow={"auto"}>
            <Card.Body
              flexWrap={"wrap"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              width={"100%"}
              gap={8}
              padding={{ base: "20px", tablet: "40px" }}
            >
              <Box width={"450px"}>
                <Box width={"100%"} rounded={"md"} overflow={"hidden"} flex={1}>
                  <Image
                    src={project.projectImages[0] as StaticImageData}
                    alt={`${project.projectName
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
                    {project.category}
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
                      {project.projectName}
                    </LargeText>
                  </Card.Title>
                  <OutlineButton
                    fontWeight={"semibold"}
                    fontSize={16}
                    size={"md"}
                    onClick={() => handleClickViewProjectButton(project?.id)}
                  >
                    Ver projeto <MdEast />
                  </OutlineButton>
                </Flex>
                <Flex mt={"20px"} gap={"10px"} flexWrap={"wrap"}>
                  {project.technologies.map((technology) => (
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
                  {project.projectResumeDescription}
                </Card.Description>
              </Flex>
            </Card.Body>
          </Card.Root>
        </Flex>
      ))}
    </Tabs.Content>
  );
};

export default CurrentTabContent;
