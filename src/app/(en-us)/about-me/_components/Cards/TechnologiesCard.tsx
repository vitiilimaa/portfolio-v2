"use client";
import { Card, CardRootProps, Flex } from "@chakra-ui/react";

import { MdOutlineMonitor } from "react-icons/md";

import { Tooltip } from "@portfolio/components/ui/tooltip";
import technologiesData from "@portfolio/data/pt-br/technologiesData";

const TechnologiesCard = (props: CardRootProps) => {
  return (
    <Card.Root p={"20px"} {...props}>
      <Card.Body gap={"30px"} p={0}>
        <Card.Title display={"flex"} alignItems={"center"} gap={"8px"}>
          <MdOutlineMonitor />
          Technologies
        </Card.Title>

        <Flex alignItems={"center"} flexWrap={"wrap"} gap={"10px"}>
          {technologiesData &&
            technologiesData.map(({ name, Icon }, index) => (
              <Tooltip
                key={index}
                showArrow
                content={name}
                openDelay={0}
                closeDelay={0}
              >
                <Flex
                  minWidth={"40px"}
                  height={"40px"}
                  background={"primaryIconBg"}
                  color={"iconColor"}
                  borderRadius={"full"}
                  border={"1px solid"}
                  borderColor={"primaryIconBorder"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  _hover={{
                    bgColor: "primary",
                    color: "primaryIconHover",
                    transition: "0.2s",
                  }}
                >
                  {<Icon size={24} />}
                </Flex>
              </Tooltip>
            ))}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default TechnologiesCard;
