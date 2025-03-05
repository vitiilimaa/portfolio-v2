"use client";

import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type LargeText = TextProps & {
  children: ReactNode;
};
const LargeText = (props: LargeText) => {
  const { children, ...textProps } = props;

  return (
    <Text
      fontSize={{ base: "32px", sm: "36px", md: "42px", xl: "48px" }}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default LargeText;
