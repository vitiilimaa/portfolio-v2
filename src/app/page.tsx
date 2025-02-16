import { Box, Button, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "@portfolio/components/ui/color-mode";
import { MdNorthEast } from "react-icons/md";

export default function Home() {
  return (
    <Box>
      <Flex gap={4} alignItems={"center"}>
        <Button
          fontWeight={"bold"}
          background={"primary"}
          fontSize={18}
          size={"lg"}
        >
          Visualizar CV <MdNorthEast size={16} />
        </Button>
        <Button
          fontWeight={"bold"}
          fontSize={18}
          variant={"outline"}
          color={"primary"}
          borderColor={"primary"}
          size={"lg"}
        >
          PT-BR
        </Button>
        <ColorModeButton />
      </Flex>
    </Box>
  );
}
