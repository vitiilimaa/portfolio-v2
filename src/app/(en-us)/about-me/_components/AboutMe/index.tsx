"use client";
import { Box, Flex, Link, Separator, Text } from "@chakra-ui/react";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { MdEast, MdMailOutline, MdWest } from "react-icons/md";

import { SectionContainer } from "@portfolio/components/Containers";
import LargeText from "@portfolio/components/Texts/LargeText";
import MediumText from "@portfolio/components/Texts/MediumText";
import useAboutMe from "@portfolio/hooks/en-us/useAboutMe";
import { OutlineButton } from "@portfolio/components/Buttons";
import { VitorPhoto } from "@portfolio/assets";
import CareerCard from "../Cards/CareerCard";
import EducationCard from "../Cards/EducationCard";
import TechnologiesCard from "../Cards/TechnologiesCard";
import CoursesCard from "../Cards/CoursesCard";

import Image from "next/image";

import { ReactNode } from "react";

const AboutMe = () => {
  const {
    handleClickHomeButton,
    handleClickViewProjectsButton,
    experienceYears,
  } = useAboutMe();

  return (
    <SectionContainer minHeight={"100%"} pt={0} pb={"120px"}>
      <Flex
        mt={"184px"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap={"100px"}
        columnGap={"100px"}
      >
        <Box
          minWidth={{ base: "auto", md: "510px" }}
          width={{ base: "100%", md: "1020px" }}
        >
          <Flex rowGap={"40px"} fontWeight={"bold"} flexWrap={"wrap"}>
            <Flex
              width={"100%"}
              flexWrap={"wrap"}
              columnGap={1}
              position={"relative"}
            >
              <LargeText>
                Transforming ideas into lines of code
                <LargeText as={"span"} color={"primary"}>
                  .
                </LargeText>
              </LargeText>
            </Flex>
            <MediumText fontWeight={400} textAlign={"justify"}>
              My name is Vitor, I am{" "}
              <MediumText as="span">{experienceYears}</MediumText> years old,
              and I have been working as a developer for 3 years, creating
              modern and innovative experiences. I work with several
              technologies, but I highlight Next, React, and TypeScript as my
              preferences. I am always improving myself to grow in my career and
              become a better professional. My goal is to transform ideas that
              make a difference into lines of code, creating solutions that
              impact and improve people&apos;s lives.
            </MediumText>
          </Flex>

          <Flex
            mt={"40px"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={{ base: 5, xl: 0 }}
            width={"100%"}
            display={{ base: "flex", lg: "none" }}
            justifyContent={"center"}
          >
            <Box flex={1} minWidth={"250px"} maxWidth={"250px"}>
              <Image
                src={VitorPhoto}
                alt="vitor_photo"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
            <Flex
              flex={1}
              minWidth={"235px"}
              mt={{ base: 0, xl: 5 }}
              flexDirection={"column"}
              rowGap={5}
            >
              <SocialMedia url={"https://www.instagram.com/vitordesenvolvedor"}>
                <FaInstagram />
                <Text>Follow on Instagram</Text>
              </SocialMedia>
              <SocialMedia url={"https://github.com/vitiilimaa"}>
                <VscGithubAlt />
                <Text>Follow on GitHub</Text>
              </SocialMedia>
              <SocialMedia url={"https://www.linkedin.com/in/dev-batista"}>
                <FaLinkedin />
                <Text>Follow on LinkedIn</Text>
              </SocialMedia>

              <Separator />

              <SocialMedia
                url={
                  "https://api.whatsapp.com/send/?phone=55991525363&text=Hi!+How+are+you?+I+saw+your+portfolio+and+I+am+interested+in+hiring+your+services.&type=phone_number&app_absent=0"
                }
              >
                <FaWhatsapp />
                <Text>Message on WhatsApp</Text>
              </SocialMedia>
              <SocialMedia url={"mailto:vitiilimaa@gmail.com"}>
                <MdMailOutline />
                <Text>Send Email</Text>
              </SocialMedia>
            </Flex>
          </Flex>

          <Flex
            gap={"20px"}
            width={"100%"}
            maxWidth={"1020px"}
            mt={"40px"}
            flexWrap={{ base: "wrap", "2xl": "nowrap" }}
          >
            <CareerCard />

            <Flex width={"100%"} flexDirection={"column"} gap={"20px"}>
              <TechnologiesCard />
              <EducationCard />
            </Flex>
          </Flex>

          <CoursesCard mt={"20px"} />

          <OutlineButton
            me={1}
            size={"md"}
            fontWeight={"semibold"}
            fontSize={16}
            mt={"20px"}
            onClick={handleClickHomeButton}
          >
            <MdWest /> Home
          </OutlineButton>

          <OutlineButton
            size={"md"}
            fontWeight={"semibold"}
            fontSize={16}
            mt={"20px"}
            float={"right"}
            onClick={handleClickViewProjectsButton}
          >
            Projects <MdEast />
          </OutlineButton>
        </Box>

        <Flex
          minWidth={"300px"}
          maxWidth={"300px"}
          width={"100%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={{ base: 5, xl: 0 }}
          display={{ base: "none", lg: "flex" }}
        >
          <Box width={"100%"}>
            <Image
              src={VitorPhoto}
              alt="vitor_photo"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Box>
          <Flex
            width={{ base: "100%", xl: "auto" }}
            mt={{ base: 0, xl: 5 }}
            flexDirection={"column"}
            rowGap={5}
          >
            <SocialMedia url={"https://www.instagram.com/vitordesenvolvedor"}>
              <FaInstagram />
              <Text>Follow on Instagram</Text>
            </SocialMedia>
            <SocialMedia url={"https://github.com/vitiilimaa"}>
              <VscGithubAlt />
              <Text>Follow on GitHub</Text>
            </SocialMedia>
            <SocialMedia url={"https://www.linkedin.com/in/dev-batista"}>
              <FaLinkedin />
              <Text>Follow on LinkedIn</Text>
            </SocialMedia>

            <Separator />

            <SocialMedia
              url={
                "https://api.whatsapp.com/send/?phone=55991525363&text=Hi!+How+are+you?+I+saw+your+portfolio+and+I+am+interested+in+hiring+your+services.&type=phone_number&app_absent=0"
              }
            >
              <FaWhatsapp />
              <Text>Message on WhatsApp</Text>
            </SocialMedia>
            <SocialMedia url={"mailto:vitiilimaa@gmail.com"}>
              <MdMailOutline />
              <Text>Send Email</Text>
            </SocialMedia>
          </Flex>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

type SocialMediaProps = {
  url: string;
  children: ReactNode;
};

const SocialMedia = (props: SocialMediaProps) => {
  const { url, children } = props;

  return (
    <Link
      href={url}
      alignSelf="flex-start"
      _hover={{ color: "primary", transition: "0.2s" }}
      alignItems={"center"}
      cursor={"pointer"}
      gap={"8px"}
      textDecoration={"none"}
      target={"_blank"}
      _focus={{ outline: "none" }}
    >
      {children}
    </Link>
  );
};

export default AboutMe;
