"use client";
import { Card, CardRootProps, Flex, Text } from "@chakra-ui/react";

import { LiaGraduationCapSolid } from "react-icons/lia";

import educationData from "@portfolio/data/pt-br/educationData";

import Image from "next/image";

const EducationCard = (props: CardRootProps) => {
  return (
    <Card.Root p={"20px"} {...props}>
      <Card.Body gap={"30px"} p={0}>
        <Card.Title display={"flex"} alignItems={"center"} gap={"8px"}>
          <LiaGraduationCapSolid />
          Educação
        </Card.Title>

        {educationData &&
          educationData.map((education) => (
            <Flex
              key={education.educationId}
              columnGap={"15px"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex gap={"15px"} width={"100%"}>
                <Flex
                  minWidth={"40px"}
                  height={"40px"}
                  background={"primaryIconBg"}
                  alignSelf={"self-start"}
                  borderRadius={"full"}
                  border={"1px solid"}
                  borderColor={"primaryIconBorder"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    src={education.universityLogo}
                    alt={`${education.universityName
                      .replace(" ", "_")
                      .toLowerCase()}_logo`}
                    style={{ width: 24, height: 24 }}
                  />
                </Flex>
                <Flex width={"100%"} rowGap={"8px"} flexDirection={"column"}>
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    fontSize={"12px"}
                    fontWeight={400}
                    rowGap={"10px"}
                  >
                    <Text>{education.course}</Text>
                  </Flex>
                  <Flex
                    fontSize={"12px"}
                    fontWeight={400}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    height={"100%"}
                    rowGap={"8px"}
                    columnGap={"15px"}
                  >
                    <Text color={"#909090"}>{education.universityName}</Text>
                    <Text color={"#909090"}>{education.studyPeriod}</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          ))}
      </Card.Body>
    </Card.Root>
  );
};

export default EducationCard;
