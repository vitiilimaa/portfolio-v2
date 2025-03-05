import { Flex, FlexProps, Text } from "@chakra-ui/react";

import { SocialMediaIcons } from "../SocialMediaIcons";
import { SectionContainer } from "../Containers";

type FooterProps = FlexProps;

const Footer = (props: FooterProps) => {
  return (
    <SectionContainer
      as={"footer"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"start"}
      bgColor={"transparent"}
      position={"absolute"}
      bottom={0}
      width={"100%"}
      maxWidth={"1440px"}
      minHeight={"auto"}
      pb={"40px"}
      zIndex={10}
      gap={4}
      {...props}
    >
      <Flex flexWrap={"wrap"} gap={1.5}>
        <Text fontSize={"12px"}>Designed and developed by</Text>
        <Text
          as={"span"}
          fontSize={"12px"}
          fontWeight={"semibold"}
          color={"primaryText"}
          bgColor={"primary"}
          borderRadius={"6px"}
          px={"6px"}
        >
          Vitor Batista
        </Text>
      </Flex>
      <SocialMediaIcons
        gap={"10px"}
        iconContainerWidth={"20px"}
        iconSize={12}
      />
    </SectionContainer>
  );
};

export default Footer;
