import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type MediumText = TextProps & {
  children: ReactNode;
};
const MediumText = (props: MediumText) => {
  const { children, ...textProps } = props;

  return (
    <Text fontSize={{ base: "16px", md: "20px", xl: "24px" }} {...textProps}>
      {children}
    </Text>
  );
};

export default MediumText;
