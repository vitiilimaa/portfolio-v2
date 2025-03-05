"use client";
import { Box, Flex, Text } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";

import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { MdNorthEast } from "react-icons/md";

import { SectionContainer } from "@portfolio/components/Containers";
import BackButton from "@portfolio/components/BackButton";
import { OutlineButton } from "@portfolio/components/Buttons";
import LargeText from "@portfolio/components/Texts/LargeText";
import MediumText from "@portfolio/components/Texts/MediumText";
import useProject from "@portfolio/hooks/pt-br/useProjects/useProject";

import "./styles.css";

const Project = () => {
  const { id } = useParams() as { id: string };

  const { project } = useProject({ id: +id });

  if (!project) {
    return (
      <SectionContainer pt={0} pb={"120px"}>
        <Box
          mt={"184px"}
          justifyContent={"space-between"}
          alignItems={"start"}
          gap={"100px"}
          columnGap={"100px"}
        >
          <LargeText fontWeight={"bold"}>
            Projeto não encontrado
            <LargeText as="span" color={"primary"}>
              .
            </LargeText>
          </LargeText>

          <BackButton previousRoute={"/projects"} mt={"40px"}>
            Ver outros projetos
          </BackButton>
        </Box>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer pt={0} pb={"120px"}>
      <Flex
        mt={"184px"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap={"100px"}
        columnGap={"100px"}
      >
        <Box>
          <Flex
            flexDirection={"column"}
            rowGap={"40px"}
            fontWeight={"bold"}
            flexWrap={"wrap"}
          >
            <Flex flexDirection={"column"} rowGap={"12px"}>
              <Flex
                alignSelf={"self-start"}
                bgColor="primary"
                color={"primaryText"}
                borderRadius={"6px"}
              >
                <Text p={"4px 8px"} fontSize={"12px"}>
                  {project?.category}
                </Text>
              </Flex>
              <Flex
                lineHeight={"60px"}
                width={"100%"}
                flexWrap={"wrap"}
                gap={3}
              >
                <LargeText fontWeight={"bold"}>
                  {project?.projectName}
                  <LargeText as="span" color={"primary"}>
                    .
                  </LargeText>
                </LargeText>
              </Flex>
              <Flex gap={"10px"} flexWrap={"wrap"}>
                {project?.technologies.map((technology) => (
                  <Box
                    key={technology}
                    alignSelf={"self-start"}
                    whiteSpace={"nowrap"}
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
            </Flex>

            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              display={{ base: "flex", ultrawide: "none" }}
            >
              {project?.projectImages && project.projectImages.length > 0 && (
                <Box
                  width={{ base: "250px", mobile: "320px", tablet: "600px" }}
                >
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    containerClass="project-carousel-container"
                    dotListClass="project-carousel-dot-list"
                    focusOnSelect={false}
                    infinite
                    draggable={false}
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024,
                        },
                        items: 1,
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0,
                        },
                        items: 1,
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 464,
                        },
                        items: 1,
                      },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    slidesToSlide={1}
                    swipeable
                    ssr
                  >
                    {project.projectImages.map((image, key) => (
                      <Image
                        key={key}
                        src={image}
                        alt={`${project.projectName
                          .replace(" ", "_")
                          .toLowerCase()}_project`}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          borderRadius: 6,
                        }}
                      />
                    ))}
                  </Carousel>
                </Box>
              )}

              <Flex
                width={"100%"}
                mt={"30px"}
                gap={"20px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {project?.pageUrl && (
                  <OutlineButton
                    as="a"
                    target={"_blank"}
                    href={project.pageUrl}
                    fontWeight={"semibold"}
                    fontSize={16}
                    size={"md"}
                  >
                    Abrir site <MdNorthEast />
                  </OutlineButton>
                )}
                {project?.repositoryUrl && (
                  <OutlineButton
                    as="a"
                    target={"_blank"}
                    href={project.repositoryUrl}
                    fontWeight={"semibold"}
                    fontSize={16}
                    size={"md"}
                  >
                    Repositório <MdNorthEast />
                  </OutlineButton>
                )}
              </Flex>
            </Flex>

            <MediumText
              fontWeight={400}
              textAlign={"justify"}
              whiteSpace={"break-spaces"}
            >
              {project?.projectDescription}
            </MediumText>

            {project && project.customerTestimonial && (
              <Box alignSelf={"self-start"}>
                <Text
                  mb={"20px"}
                  fontWeight={"bold"}
                  fontSize={"16px"}
                  textAlign={"justify"}
                >
                  Depoimento do Cliente
                </Text>
                <Box
                  border={"1px solid"}
                  borderColor={"primary"}
                  borderRadius={"6px"}
                  overflow={"hidden"}
                >
                  <Image
                    src={project.customerTestimonial as StaticImageData}
                    alt={"customer_testimonial"}
                  />
                </Box>
              </Box>
            )}
          </Flex>

          <BackButton previousRoute={"/projetos"} mt={"40px"}>
            Ver outros projetos
          </BackButton>
        </Box>

        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          display={{ base: "none", ultrawide: "flex" }}
        >
          {project?.projectImages && project.projectImages.length > 0 && (
            <Box width={{ base: "250px", mobile: "320px", tablet: "600px" }}>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                containerClass="project-carousel-container"
                dotListClass="project-carousel-dot-list"
                focusOnSelect={false}
                infinite
                draggable={false}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                slidesToSlide={1}
                swipeable
                ssr
              >
                {project.projectImages.map((image, key) => (
                  <Image
                    key={key}
                    src={image}
                    alt={`${project.projectName
                      .replace(" ", "_")
                      .toLowerCase()}_project`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: 6,
                    }}
                  />
                ))}
              </Carousel>
            </Box>
          )}

          <Flex
            width={"100%"}
            mt={"30px"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {project?.pageUrl && (
              <OutlineButton
                as="a"
                target={"_blank"}
                href={project.pageUrl}
                fontWeight={"semibold"}
                fontSize={16}
                size={"md"}
              >
                Abrir site <MdNorthEast />
              </OutlineButton>
            )}
            {project?.repositoryUrl && (
              <OutlineButton
                as="a"
                target={"_blank"}
                href={project.repositoryUrl}
                fontWeight={"semibold"}
                fontSize={16}
                size={"md"}
              >
                Repositório <MdNorthEast />
              </OutlineButton>
            )}
          </Flex>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default Project;
