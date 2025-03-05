import { Box, BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type SectionContainerProps = BoxProps &
  FlexProps & {
    children: ReactNode;
  };

const SectionContainer = (props: SectionContainerProps) => {
  const { children, ...containerProps } = props;

  return (
    <Box
      px={{ base: "2rem", tablet: "4rem" }}
      bg={"primaryBackground"}
      width={"100%"}
      maxWidth={"1440px"}
      minHeight={"100vh"}
      py={"40px"}
      {...containerProps}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
