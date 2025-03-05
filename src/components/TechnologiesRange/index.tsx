import { Box, Flex, List, BoxProps } from "@chakra-ui/react";

import "./styles.css";

type TechnologiesRangeProps = BoxProps;
const TechnologiesRange = (props: TechnologiesRangeProps) => {
  const { ...technoloriesRangeProps } = props;

  return (
    <Box
      position={"relative"}
      width={"100%"}
      pb={"86px"}
      bottom={"85px"}
      {...technoloriesRangeProps}
    >
      {/* Faixa frontal com o texto passando */}
      <Flex
        className="technologies-range"
        width={"102%"}
        bgColor={"primary"}
        userSelect={"none"}
        fontSize="24px"
        fontWeight="bold"
        color="#000"
        position={"absolute"}
        top={1}
        left={"-2px"}
        zIndex={2}
      >
        <List.Root
          listStyle={"none"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexShrink={0}
          minWidth={"100%"}
          color={"primaryText"}
        >
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
        </List.Root>
        <List.Root
          listStyle={"none"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"1rem"}
          flexShrink={0}
          minWidth={"100%"}
          color={"primaryText"}
        >
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ React }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ Next }"}</List.Item>
          <List.Item textWrap={"nowrap"}>{"{ TypeScript }"}</List.Item>
        </List.Root>
      </Flex>

      {/* Faixa traseira vazia */}
      <Flex
        border={"none"}
        rotate={"-2deg"}
        filter={"brightness(0.8)"}
        width={"102%"}
        bgColor={"primary"}
        overflow={"hidden"}
        userSelect={"none"}
        fontWeight="bold"
        color="#000"
        gap={"1rem"}
        height={"50px"}
        position={"absolute"}
        top={1}
        left={"-2px"}
        zIndex={1}
      />
    </Box>
  );
};

export default TechnologiesRange;
