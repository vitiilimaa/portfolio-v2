"use client";
import { Card, CardRootProps, Collapsible, Flex, Text } from "@chakra-ui/react";

import { IoBriefcaseOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import useCareerCard from "@portfolio/hooks/en-us/useAboutMe/cards/useCareerCard";
import careerData from "@portfolio/data/en-us/careerData";

import Image from "next/image";

const CareerCard = (props: CardRootProps) => {
  const { openedCollapsibleIds, handleClickShowActivitiesButton } =
    useCareerCard();

  return (
    <Card.Root p={"20px"} columnGap={"20px"} width={"100%"} {...props}>
      <Card.Body gap={"30px"} p={0}>
        <Card.Title display={"flex"} alignItems={"center"} gap={"8px"}>
          <IoBriefcaseOutline />
          Career
        </Card.Title>

        {careerData &&
          careerData.map((career) => (
            <Collapsible.Root
              display={"flex"}
              justifyContent={"space-between"}
              columnGap={"15px"}
              key={career.careerId}
            >
              <Flex
                minWidth={"40px"}
                height={"40px"}
                background={"primaryIconBg"}
                borderRadius={"full"}
                border={"1px solid"}
                borderColor={"primaryIconBorder"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={career.companyLogo}
                  alt={`${career.companyName
                    .replace(" ", "_")
                    .toLowerCase()}_logo`}
                  style={{ width: 24, height: 24, ...career.logoStyle }}
                />
              </Flex>
              <Flex
                width={"100%"}
                rowGap={"8px"}
                columnGap={"15px"}
                justifyContent={"space-between"}
                flexDirection={"column"}
              >
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  width={"100%"}
                  justifyContent={"space-between"}
                  fontSize={"12px"}
                  fontWeight={400}
                  rowGap={"8px"}
                  columnGap={"15px"}
                >
                  <Text>{career.position}</Text>
                  <Collapsible.Trigger
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                    color={"primary"}
                    verticalAlign={"top"}
                    height={"18px"}
                    cursor={"pointer"}
                    onClick={() =>
                      handleClickShowActivitiesButton(career.careerId)
                    }
                    fontSize={"12px"}
                    textWrap={"nowrap"}
                  >
                    <ActivitiesButton
                      openedCollapsibleIds={openedCollapsibleIds}
                      careerId={career.careerId}
                    />
                  </Collapsible.Trigger>
                </Flex>
                <Collapsible.Content
                  overflow={"initial"}
                  fontSize={"12px"}
                  whiteSpace={"break-spaces"}
                >
                  {career.jobDescription}
                </Collapsible.Content>
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  columnGap={"15px"}
                  rowGap={"8px"}
                  fontSize={"12px"}
                  fontWeight={400}
                  justifyContent={"space-between"}
                  alignItems={{ base: "start", md: "end" }}
                  height={"100%"}
                  textWrap={"nowrap"}
                  color={"#909090"}
                >
                  <Text>{career.companyName}</Text>
                  <Text>{career.workPeriod}</Text>
                </Flex>
              </Flex>
            </Collapsible.Root>
          ))}
      </Card.Body>
    </Card.Root>
  );
};

type ActivitiesButtonProps = {
  openedCollapsibleIds: number[];
  careerId: number;
};

const ActivitiesButton = (props: ActivitiesButtonProps) => {
  const { openedCollapsibleIds, careerId } = props;

  return openedCollapsibleIds && openedCollapsibleIds.includes(careerId) ? (
    <>
      <IoIosArrowUp /> Hide activities
    </>
  ) : (
    <>
      <IoIosArrowDown /> View activities
    </>
  );
};

export default CareerCard;
