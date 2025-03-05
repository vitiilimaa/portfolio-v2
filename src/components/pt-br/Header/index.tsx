"use client";
import {
  ClientOnly,
  Flex,
  List,
  ListItemProps,
  SelectValueChangeDetails,
  Skeleton,
  useDrawer,
} from "@chakra-ui/react";

import { MdNorthEast } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
} from "@portfolio/components/ui/drawer";
import { SolidButton } from "@portfolio/components/Buttons";
import {
  ColorModeButton,
  useColorMode,
} from "@portfolio/components/ui/color-mode";
import { SectionContainer } from "@portfolio/components/Containers";
import { VitorDarkLogo, VitorLightLogo } from "@portfolio/assets";
import {
  LanguageContext,
  LanguageContextProps,
} from "@portfolio/contexts/LanguageContext";
import { Languages } from "@portfolio/types/Languages";
import Select from "@portfolio/components/Select";
import { LANGUAGES_OPTIONS } from "@portfolio/constants/languagesOptions";

import { ReactNode, useContext } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import "./styles.css";

const Header = () => {
  const { colorMode } = useColorMode();

  const currentRoute = usePathname();

  const { language, handleChangeLanguage } = useContext(
    LanguageContext
  ) as LanguageContextProps;

  const handleChangeSelectLanguageValue = (
    option: SelectValueChangeDetails<{
      label: string;
      value: string;
    }>
  ) => {
    const value = option.value[0] as Languages;
    handleChangeLanguage(value, currentRoute);
  };

  return (
    <SectionContainer
      bg={"transparent"}
      as="header"
      display={"flex"}
      position={"absolute"}
      maxWidth={"1440px"}
      minHeight={"auto"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      zIndex={10}
    >
      <Flex gap={"72px"} alignItems={"center"}>
        <ClientOnly fallback={<Skeleton width={"50px"} height={"50px"} />}>
          <Image
            suppressHydrationWarning
            src={colorMode === "dark" ? VitorDarkLogo : VitorLightLogo}
            alt={"vitor_logo"}
            style={{
              width: "50px",
            }}
          />
        </ClientOnly>
        <List.Root
          flexDirection={"row"}
          alignItems={"center"}
          gap={"72px"}
          listStyle="none"
          display={{ base: "none", wide: "flex" }}
        >
          <ListItem route="/inicio">Início</ListItem>
          <ListItem route="/sobre-mim">Sobre mim</ListItem>
          <ListItem route="/projetos">Projetos</ListItem>
          <ListItem route="/contato">Contato</ListItem>
        </List.Root>
      </Flex>

      <Flex
        alignItems={"center"}
        gap={4}
        display={{ base: "none", tablet: "flex" }}
      >
        <SolidButton as="a" href={"/curriculo.pdf"} target={"_blank"}>
          Visualizar CV <MdNorthEast size={16} />
        </SolidButton>
        <Select
          className="language-select"
          options={LANGUAGES_OPTIONS}
          value={language}
          onValueChange={handleChangeSelectLanguageValue}
        />
        <ColorModeButton display={{ base: "none", wide: "flex" }} />
      </Flex>

      <Flex
        alignItems={"center"}
        gap={4}
        display={{ base: "flex", wide: "none" }}
      >
        <ColorModeButton display={{ base: "flex", wide: "none" }} />
        <MobileMenu
          language={language}
          handleChangeSelectLanguageValue={handleChangeSelectLanguageValue}
        />
      </Flex>
    </SectionContainer>
  );
};

type ListItemProperties = ListItemProps & {
  children: ReactNode;
  route: string;
  closeDrawer?: VoidFunction;
};
const ListItem = (props: ListItemProperties) => {
  const { children, route, closeDrawer, ...listItemProps } = props;

  const router = useRouter();
  const path = usePathname();

  const handleClickItem = () => {
    router.push(route);
    if (closeDrawer) closeDrawer();
  };

  return (
    <List.Item
      cursor={"pointer"}
      fontSize={{ base: "18px" }}
      color={path.includes(route) ? "primary" : "textSecondary"}
      _hover={{
        color: "primary",
        transition: "0.2s",
      }}
      onClick={handleClickItem}
      {...listItemProps}
    >
      {children}
    </List.Item>
  );
};

type MobileMenu = {
  language: Languages;
  handleChangeSelectLanguageValue: (
    option: SelectValueChangeDetails<{
      label: string;
      value: string;
    }>
  ) => void;
};
const MobileMenu = (props: MobileMenu) => {
  const { language, handleChangeSelectLanguageValue } = props;

  const { colorMode } = useColorMode();

  const { open, setOpen } = useDrawer();

  const handleOpenDrawerButton = () => setOpen(true);

  const handleCloseDrawerButton = () => setOpen(false);

  return (
    <DrawerRoot open={open} size={"full"} placement={"top"}>
      <DrawerBackdrop />
      <SolidButton
        onClick={handleOpenDrawerButton}
        display={{ base: "flex", wide: "none" }}
        px={0}
      >
        <RiMenu3Line />
      </SolidButton>

      <DrawerContent bgColor={"primaryBackground"}>
        <DrawerBody
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <List.Root
            flexDirection={"column"}
            alignItems={"center"}
            gap={"72px"}
            listStyle="none"
          >
            <ClientOnly fallback={<Skeleton width={"50px"} height={"50px"} />}>
              <Image
                suppressHydrationWarning
                src={colorMode === "dark" ? VitorDarkLogo : VitorLightLogo}
                alt={"vitor_logo"}
                style={{
                  width: "100px",
                }}
              />
            </ClientOnly>

            <ListItem closeDrawer={handleCloseDrawerButton} route="/inicio">
              Início
            </ListItem>
            <ListItem closeDrawer={handleCloseDrawerButton} route="/sobre-mim">
              Sobre mim
            </ListItem>
            <ListItem closeDrawer={handleCloseDrawerButton} route="/projetos">
              Projetos
            </ListItem>
            <ListItem closeDrawer={handleCloseDrawerButton} route="/contato">
              Contato
            </ListItem>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
              display={{ base: "flex", tablet: "none" }}
              flexWrap={"wrap"}
            >
              <SolidButton as="a" href={"/curriculo.pdf"} target={"_blank"}>
                CV <MdNorthEast size={16} />
              </SolidButton>
              <Select
                className="language-select"
                options={LANGUAGES_OPTIONS}
                value={language}
                onValueChange={handleChangeSelectLanguageValue}
              />
            </Flex>
          </List.Root>
        </DrawerBody>
        <DrawerCloseTrigger
          m={3}
          bg={"secondaryBackground"}
          color={"primaryText"}
          onClick={handleCloseDrawerButton}
        />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default Header;
