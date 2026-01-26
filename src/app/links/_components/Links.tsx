"use client";

import Image from "next/image";
import { AvatarInsta } from "@portfolio/assets";
import { GeneralContainer } from "@portfolio/components/Containers";
import { Box, ButtonProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { FaHeadphones, FaMicrophone } from "react-icons/fa6";
import { OutlineButton } from "@portfolio/components/Buttons";
import { SocialMediaIcons } from "@portfolio/components/SocialMediaIcons";
import MediumText from "@portfolio/components/Texts/MediumText";
// import { QRCodeSVG } from "qrcode.react";

const Links = () => {
  return (
    <GeneralContainer
      width={"100%"}
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"2rem"}
      gap={"1rem"}
      maxWidth={"500px"}
    >
      <Image
        width={150}
        height={150}
        suppressHydrationWarning
        src={AvatarInsta}
        alt={"vitor_logo"}
        style={{
          borderRadius: "150px",
          border: "2px solid var(--chakra-colors-primary)",
        }}
      />

      <Box textAlign={"center"}>
        <MediumText fontWeight={600}>Vitor Batista</MediumText>
        <Text fontSize={"14px"} opacity={0.5}>
          Desenvolvedor de Software
        </Text>
      </Box>
      <SocialMediaIcons
        gap={"10px"}
        iconContainerWidth={"30px"}
        iconSize={18}
      />
      <Flex mt={"1rem"} flexDir={"column"} gap={"1rem"} width={"100%"}>
        <LinkButton link={"https://www.vitordesenvolvedor.com.br/"}>
          <AiOutlineGlobal
            fill="var(--chakra-colors-primary)"
            style={{
              borderRadius: "6px",
              backgroundColor: "var(--chakra-colors-primary-background)",
              padding: 5,
              width: 35,
              height: 35,
            }}
          />
          Confira o meu portfólio
        </LinkButton>
        <LinkButton
          link={
            "https://api.whatsapp.com/send/?phone=55991525363&text=Opa%21+Tudo+bem%3F+Vim+do+instagram+e+estou+interessado%28a%29+em+contratar+o+seu+servi%C3%A7o.&type=phone_number&app_absent=0"
          }
        >
          <MdAttachMoney
            fill="var(--chakra-colors-primary)"
            style={{
              borderRadius: "6px",
              backgroundColor: "var(--chakra-colors-primary-background)",
              padding: 5,
              width: 35,
              height: 35,
            }}
          />
          Solicite um orçamento
        </LinkButton>
        {/* <LinkButton link={"https://amzn.to/43v609P"}>
          <FaMicrophone
            fill="var(--chakra-colors-primary)"
            style={{
              borderRadius: "6px",
              backgroundColor: "var(--chakra-colors-primary-background)",
              padding: 5,
              width: 35,
              height: 35,
            }}
          />
          MAONO PD100X
        </LinkButton>
        <LinkButton link={"https://amzn.to/4ky5jDr"}>
          <FaHeadphones
            fill="var(--chakra-colors-primary)"
            style={{
              borderRadius: "6px",
              backgroundColor: "var(--chakra-colors-primary-background)",
              padding: 5,
              width: 35,
              height: 35,
            }}
          />
          W800BT PRO EDIFIER
        </LinkButton> */}

        {/* <Flex alignItems={"center"} gap={"0.8rem"}>
          <QRCodeSVG value="00020126580014br.gov.bcb.pix0136d3df1888-b814-46d0-9fd6-31b2294202cf5204000053039865802BR5925VITOR HUGO BATISTA DE LIM6009Sao Paulo62290525REC6848CF2C7590403226580663047697" />
          <Text>Pague o meu café 😃</Text>
        </Flex> */}
      </Flex>
    </GeneralContainer>
  );
};

type LinkButtonType = ButtonProps & {
  children: ReactNode;
  link: string;
};
const LinkButton = (props: LinkButtonType) => {
  const { children, link } = props;

  return (
    <OutlineButton
      as={"a"}
      href={link}
      target="_blank"
      columnGap={"1.5rem"}
      py={{ base: "1rem", sm: "auto" }}
      justifyContent={{ base: "center", sm: "start" }}
      height={{ base: "auto", sm: "initial" }}
      width={"100%"}
      flexWrap={{ base: "wrap", sm: "nowrap" }}
      size={"2xl"}
      textWrap={"wrap"}
    >
      {children}
    </OutlineButton>
  );
};

export default Links;
