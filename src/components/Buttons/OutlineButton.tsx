import { Button, ButtonProps, LinkProps } from "@chakra-ui/react";
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
        sm: "14px",
        md: "16px",
        lg: "18px",
      }
    : "18px";

  const buttonSize = (
    activeDefaultBreakpoints
      ? { base: "xs", sm: "sm", md: "md", lg: "lg" }
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
