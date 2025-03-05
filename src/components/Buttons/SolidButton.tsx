import { Button, ButtonProps, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type SolidButtonProps = ButtonProps &
  LinkProps & {
    children: ReactNode;
  };

const SolidButton = (props: SolidButtonProps) => {
  const { children, ...btnProps } = props;

  return (
    <Button
      fontWeight={"bold"}
      background={"primary"}
      fontSize={18}
      size={"lg"}
      _hover={{
        bgColor: "secondaryBackground",
        transition: "0.2s",
      }}
      {...btnProps}
    >
      {children}
    </Button>
  );
};

export default SolidButton;
