import {
  Button,
  ButtonProps,
  LinkProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type OutlineButtonProps = ButtonProps &
  LinkProps & {
    children: ReactNode;
    activeDefaultBreakpoints?: boolean;
  };

const OutlineButton = (props: OutlineButtonProps) => {
  const { children, activeDefaultBreakpoints, ...btnProps } = props;

  const fontSize = activeDefaultBreakpoints
    ? {
        base: "12px",
        mobile: "14px",
        tablet: "16px",
        desktop: "18px",
      }
    : "18px";

  const buttonSize = (
    activeDefaultBreakpoints
      ? { base: "xs", mobile: "sm", tablet: "md", desktop: "lg" }
      : "lg"
  ) as ButtonProps["size"];

  return (
    <Button
      fontWeight={"bold"}
      fontSize={fontSize}
      variant={"outline"}
      color={"primary"}
      borderColor={"primary"}
      size={buttonSize}
      _hover={{
        backgroundColor: "primary",
        color: "primaryText",
        transition: "0.2s",
      }}
      {...btnProps}
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
