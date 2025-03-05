import IconContainer from "./IconContainer";
import { Flex, FlexProps } from "@chakra-ui/react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";

type SocialMediaIconsProps = FlexProps & {
  iconSize?: number;
  iconContainerWidth?: string | number;
};

const SocialMediaIcons = (props: SocialMediaIconsProps) => {
  const { iconSize, iconContainerWidth, ...containerProps } = props;

  return (
    <Flex gap={"16px"} alignItems={"center"} {...containerProps}>
      <IconContainer
        url={"https://www.instagram.com/vitordesenvolvedor/"}
        iconContainerWidth={iconContainerWidth}
      >
        <FaInstagram size={iconSize || defaultIconSize} />
      </IconContainer>
      <IconContainer
        url={"https://github.com/vitiilimaa"}
        iconContainerWidth={iconContainerWidth}
      >
        <VscGithubAlt size={iconSize || defaultIconSize} />
      </IconContainer>
      <IconContainer
        url={"https://www.linkedin.com/in/dev-batista/"}
        iconContainerWidth={iconContainerWidth}
      >
        <FaLinkedinIn size={iconSize || defaultIconSize} />
      </IconContainer>
    </Flex>
  );
};

const defaultIconSize = 18;

export default SocialMediaIcons;
