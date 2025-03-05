import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type IconContainerProps = LinkProps & {
  children: ReactNode;
  url: string;
  iconContainerWidth?: string | number;
};

const IconContainer = (props: IconContainerProps) => {
  const { children, url, iconContainerWidth, ...iconProps } = props;

  return (
    <Link
      href={url}
      target={"_blank"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={iconContainerWidth || defaultIconContainerWidth}
      height={iconContainerWidth || defaultIconContainerWidth}
      fontWeight={"semibold"}
      color={"primary"}
      border={"1px solid"}
      borderColor={"primary"}
      borderRadius={6}
      _hover={{
        backgroundColor: "primary",
        color: "primaryText",
        transition: "0.2s",
      }}
      _focus={{
        outline: "none"
      }}
      {...iconProps}
    >
      {children}
    </Link>
  );
};

const defaultIconContainerWidth = "34px";

export default IconContainer;
