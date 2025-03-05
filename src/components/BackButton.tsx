import { useRouter } from "next/navigation";
import { OutlineButton } from "./Buttons";
import { ButtonProps, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdWest } from "react-icons/md";

type BackButtonProps = ButtonProps &
  LinkProps & {
    children?: ReactNode;
    previousRoute?: string;
  };

const BackButton = (props: BackButtonProps) => {
  const { children, previousRoute, ...btnProps } = props;

  const router = useRouter();

  const handleClickButton = () => {
    if (previousRoute) {
      router.push(previousRoute);
      return;
    }

    router.back();
  };

  return (
    <OutlineButton
      size={"md"}
      fontWeight={"semibold"}
      fontSize={16}
      onClick={handleClickButton}
      {...btnProps}
    >
      <MdWest /> {children || "Voltar"}
    </OutlineButton>
  );
};

export default BackButton;
