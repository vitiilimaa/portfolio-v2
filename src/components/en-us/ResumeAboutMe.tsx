"use client";
import { Box, Flex, Text } from "@chakra-ui/react";

import useParticles from "@portfolio/hooks/useParticles";
import useResumeAboutMe from "@portfolio/hooks/en-us/useResumeAboutMe";
import { GeneralContainer, SectionContainer } from "../Containers";
import OutlineButton from "../Buttons/OutlineButton";
import { SocialMediaIcons } from "../SocialMediaIcons";
import ExtraLargeText from "../Texts/ExtraLargeText";
import MediumText from "../Texts/MediumText";
import TechnologiesRange from "../TechnologiesRange";

import Particles from "@tsparticles/react";

import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const ResumeAboutMe = () => {
  const { options } = useParticles();

  const { textWidth, outerTextRef, handleClickFindOutMoreButton } =
    useResumeAboutMe();

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
        <Flex gap={2}>
          <Text
            opacity={0}
            fontSize={{ base: "20px", sm: "30px", md: "36px" }}
            data-state="open"
            _open={{
              animation:
                "slide-from-top 1000ms ease-out 500ms forwards, fade-in 1000ms ease-out 500ms forwards, hey 300ms ease-out 1200ms 3",
            }}
          >
            👋
          </Text>
          <Text
            opacity={0}
            fontSize={{ base: "20px", sm: "30px", md: "36px" }}
            data-state="open"
            _open={{
              animation: "slide-from-top, fade-in",
              animationDuration: "1000ms",
              animationFillMode: "forwards",
              animationStyle: "ease-out",
              animationDelay: "500ms",
            }}
          >
            Hey!
          </Text>
        </Flex>
        <ExtraLargeText
          opacity={0}
          data-state="open"
          _open={{
            animation: "slide-from-top, fade-in",
            animationDuration: "1000ms",
            animationFillMode: "forwards",
            animationStyle: "ease-out",
            animationDelay: "1000ms",
          }}
          mt={"20px"}
          fontWeight={"bold"}
          color="primary"
        >
          I&apos;m Vitor,
        </ExtraLargeText>
        <Flex columnGap={5} rowGap={3} flexWrap={"wrap"}>
          <ExtraLargeText
            opacity={0}
            fontWeight={"bold"}
            color="primary"
            data-state="open"
            _open={{
              animation: "slide-from-top, fade-in",
              animationDuration: "1000ms",
              animationFillMode: "forwards",
              animationStyle: "ease-out",
              animationDelay: "1500ms",
            }}
          >
            a
          </ExtraLargeText>

          <Flex alignSelf={"self-start"} position={"relative"}>
            <MotionBox
              zIndex={1}
              position="absolute"
              top="0"
              left="0"
              width="0%"
              height="100%"
              bgColor={"primary"}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
              overflow={"hidden"}
              borderRadius={"6px"}
            >
              <ExtraLargeText
                position="absolute"
                px={{ base: "8px", sm: "16px" }}
                fontWeight={"bold"}
                color="primaryText"
                width={textWidth}
              >
                Front-End Developer
              </ExtraLargeText>
            </MotionBox>
            <ExtraLargeText
              ref={outerTextRef}
              position="relative"
              opacity={0}
              px={{ base: "8px", sm: "16px" }}
              fontWeight={"bold"}
              color="primary"
              data-state="open"
              _open={{
                animation: "slide-from-top, fade-in",
                animationDuration: "1000ms",
                animationFillMode: "forwards",
                animationStyle: "ease-out",
                animationDelay: "1500ms",
              }}
            >
              Front-End Developer
            </ExtraLargeText>
          </Flex>
        </Flex>
        <MediumText
          opacity={0}
          mt={"30px"}
          textAlign={"justify"}
          maxWidth={"986px"}
          data-state="open"
          _open={{
            animation: "slide-from-top, fade-in",
            animationDuration: "1000ms",
            animationFillMode: "forwards",
            animationStyle: "ease-out",
            animationDelay: "2000ms",
          }}
        >
          I transform impactful ideas into lines of code, creating solutions
          that make a difference in people&apos;s lives.
        </MediumText>
        <Flex mt={"50px"} alignItems={"center"} gap={"30px"} flexWrap={"wrap"}>
          <OutlineButton
            opacity={0}
            onClick={handleClickFindOutMoreButton}
            data-state="open"
            _open={{
              animation: "slide-from-top, fade-in",
              animationDuration: "1000ms",
              animationFillMode: "forwards",
              animationStyle: "ease-out",
              animationDelay: "2500ms",
            }}
          >
            Learn more
          </OutlineButton>
          <SocialMediaIcons
            opacity={0}
            data-state="open"
            _open={{
              animation: "slide-from-top, fade-in",
              animationDuration: "1000ms",
              animationFillMode: "forwards",
              animationStyle: "ease-out",
              animationDelay: "2500ms",
            }}
          />
        </Flex>
      </SectionContainer>

      <Particles id="tsparticles" options={options} />

      <TechnologiesRange bottom={"85px"} />
    </GeneralContainer>
  );
};

export default ResumeAboutMe;
