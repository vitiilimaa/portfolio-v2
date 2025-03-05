import { Flex } from "@chakra-ui/react";

import { MdNorthEast } from "react-icons/md";

import { SectionContainer } from "@portfolio/components/Containers";
import { OutlineButton } from "../Buttons";
import ExtraLargeText from "../Texts/ExtraLargeText";

const ContactSection = () => {
  return (
    <SectionContainer
      bg={"transparent"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      zIndex={1}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        gap={4}
      >
        <Flex
          fontWeight={"bold"}
          fontSize={"64px"}
          width={"100%"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={{ base: 2, sm: 3 }}
        >
          <ExtraLargeText textAlign={"center"}>
            Let&apos;s create something amazing
            <ExtraLargeText as={"span"} color={"primary"}>
              .
            </ExtraLargeText>
          </ExtraLargeText>
        </Flex>

        <Flex
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
          position={"relative"}
          display={{ base: "none", md: "flex" }}
        >
          <OutlineButton
            as={"a"}
            href={
              "https://api.whatsapp.com/send/?phone=55991525363&text=Hi!+How+are+you?+I+saw+your+portfolio+and+I+am+interested+in+hiring+your+services.&type=phone_number&app_absent=0"
            }
            minWidth={{ base: "180px", sm: "220px", md: "auto" }}
          >
            Call on WhatsApp <MdNorthEast />
          </OutlineButton>
          <OutlineButton
            as={"a"}
            href={"mailto:vitiilimaa@gmail.com"}
            minWidth={{ base: "180px", sm: "220px", md: "auto" }}
          >
            Send an email <MdNorthEast />
          </OutlineButton>
        </Flex>
        <Flex
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
          position={"relative"}
          display={{ base: "flex", md: "none" }}
        >
          <OutlineButton minWidth={{ base: "180px", sm: "220px", md: "auto" }}>
            WhatsApp <MdNorthEast />
          </OutlineButton>
          <OutlineButton minWidth={{ base: "180px", sm: "220px", md: "auto" }}>
            Email <MdNorthEast />
          </OutlineButton>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default ContactSection;
