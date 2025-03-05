import { Flex, FlexProps } from "@chakra-ui/react";

import { ReactNode } from "react";

type ContainerProps = FlexProps & {
  children: ReactNode;
};

const GeneralContainer = (props: ContainerProps) => {
  const { children, ...containerProps } = props;

  return (
    <Flex
      flexDirection={"column"}
      width={"100%"}
      alignItems={"center"}
      bg={"primaryBackground"}
      {...containerProps}
    >
      {children}
    </Flex>
  );
};

export default GeneralContainer;
