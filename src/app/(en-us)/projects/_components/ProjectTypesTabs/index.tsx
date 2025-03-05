"use client";

import { Tabs, useTabs } from "@chakra-ui/react";
import { PROJECT_TYPES } from "@portfolio/constants/en-us/projectTypes";
import CurrentTabContent from "./CurrentTabContent";

const ProjectTypesTabs = () => {
  const tabs = useTabs({
    defaultValue: "all",
  });

  return (
    <Tabs.RootProvider
      value={tabs}
      size={"lg"}
      defaultValue="all"
      variant={"plain"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
    >
      <Tabs.List
        bgColor={"primary"}
        border={"1px solid"}
        borderColor={"primary"}
        borderRadius={"6px"}
        overflow={"hidden"}
      >
        {PROJECT_TYPES.map((projectType, index) => (
          <Tabs.Trigger
            key={projectType.value}
            value={projectType.value}
            borderLeft={getTabBorder(index)}
            borderRight={getTabBorder(index)}
            borderRadius={"none"}
            backgroundColor={
              tabs.value === projectType.value ? "primary" : "primaryBackground"
            }
            color={tabs.value === projectType.value ? "primaryText" : "primary"}
            fontWeight={"bold"}
          >
            {projectType.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <CurrentTabContent currentTab={tabs.value || ""} />
    </Tabs.RootProvider>
  );
};

const getTabBorder = (index: number) => {
  const IsNotFirstOrLastTab = !(
    index === 0 || index === PROJECT_TYPES.length - 1
  );

  if (IsNotFirstOrLastTab) {
    return "1px solid";
  }

  return "none";
};

export default ProjectTypesTabs;
