"use client";

import { Text, TextProps } from "@chakra-ui/react";
import { forwardRef, ReactNode } from "react";

type ExtraLargeText = TextProps & {
  children: ReactNode;
};
const ExtraLargeText = forwardRef<HTMLDivElement, ExtraLargeText>(
  (props, ref) => {
    const { children, ...textProps } = props;

    return (
      <Text
        ref={ref}
        fontSize={{
          base: "32px",
          mobile: "36px",
          tablet: "42px",
          wide: "64px",
        }}
        {...textProps}
      >
        {children}
      </Text>
    );
  }
);

ExtraLargeText.displayName = "ExtraLargeText";

export default ExtraLargeText;
