import projectsData from "@portfolio/data/pt-br/projectsData";
import { useRouter } from "next/navigation";

type CurrentTabContentHook = {
  currentTab: string;
};

const useCurrentTabContent = (props: CurrentTabContentHook) => {
  const { currentTab } = props;

  const router = useRouter();

  const getCurrentProjects = () => {
    if (currentTab === "all") return projectsData;

    return projectsData.filter(
      (project) => project.category.toUpperCase() === currentTab.toUpperCase()
    );
  };
  const currentProjects = getCurrentProjects();

  const handleClickViewProjectButton = (projectId: number) =>
    router.push(`/projetos/${projectId}`);

  return { currentProjects, handleClickViewProjectButton }
};

export default useCurrentTabContent;
