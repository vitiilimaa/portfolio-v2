"use client";
import { Card, CardRootProps, Flex, Link, Text } from "@chakra-ui/react";

import { MdNorthEast, MdOutlinePlayLesson } from "react-icons/md";

import coursesData from "@portfolio/data/en-us/coursesData";

import Image from "next/image";

const CoursesCard = (props: CardRootProps) => {
  return (
    <Card.Root p={"20px"} {...props}>
      <Card.Body gap={"30px"} p={0}>
        <Card.Title display={"flex"} alignItems={"center"} gap={"8px"}>
          <MdOutlinePlayLesson />
          Courses and Certifications
        </Card.Title>

        <Flex
          rowGap={"30px"}
          columnGap={"20px"}
          width={"100%"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {coursesData &&
            coursesData.map((course) => (
              <Flex
                key={course.courseId}
                width={{ base: "100%", ultrawide: "400px" }}
                columnGap={"20px"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Flex rowGap={"8px"} columnGap={"15px"} width={"100%"}>
                  <Flex
                    minWidth={"40px"}
                    height={"40px"}
                    background={"primaryIconBg"}
                    borderRadius={"full"}
                    border={"1px solid"}
                    borderColor={"primaryIconBorder"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    overflow={"hidden"}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={course.courseLogo}
                      alt={`${course.courseName
                        .replace(" ", "_")
                        .toLowerCase()}_logo`}
                      style={{ ...course.logoStyle }}
                    />
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    rowGap={"8px"}
                    columnGap={"15px"}
                    width={"100%"}
                  >
                    <Flex
                      justifyContent={"space-between"}
                      fontSize={"12px"}
                      fontWeight={400}
                      rowGap={"8px"}
                      columnGap={"15px"}
                      flexDirection={{ base: "column", tablet: "row" }}
                    >
                      <Text>{course.courseName}</Text>
                      {course?.file && (
                        <Link
                          href={`certificates/${course.file}`}
                          target="_blank"
                          fontSize={"12px"}
                          border={"none"}
                          color={"primary"}
                          fontWeight={400}
                          p={0}
                          height={"18px"}
                          textWrap={"nowrap"}
                          _hover={{
                            textDecoration: "none",
                          }}
                          _focus={{ outline: "none" }}
                        >
                          View certificate <MdNorthEast />
                        </Link>
                      )}
                    </Flex>

                    <Flex
                      fontSize={"12px"}
                      fontWeight={400}
                      justifyContent={"space-between"}
                      height={"100%"}
                      rowGap={"8px"}
                      columnGap={"15px"}
                      flexWrap={"wrap"}
                      flexDirection={{ base: "column", tablet: "row" }}
                    >
                      <Text color={"#909090"}>{course.companyName}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            ))}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default CoursesCard;
