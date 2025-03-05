import { toaster } from "@portfolio/components/ui/toaster";
import projectsData from "@portfolio/data/en-us/projectsData";

import { useRouter } from "next/navigation";

const useProjectsSection = () => {
  const router = useRouter();

  const projectData = projectsData.find((project) => project.featured);

  const handleClickViewProjectButton = (projectId: number | undefined) => {
    if (typeof projectId === "number") {
      router.push(`/projects/${projectId}`);
      return;
    }

    toaster.error({
      title: `Error accessing featured project. Please try again later.`,
    });
  };

  const handleClickButtonSeeMoreProjects = () => router.push("/projects");

  return {
    projectData,
    handleClickViewProjectButton,
    handleClickButtonSeeMoreProjects,
  };
};

export default useProjectsSection;
