import { toaster } from "@portfolio/components/ui/toaster";
import projectsData from "@portfolio/data/pt-br/projectsData";

import { useRouter } from "next/navigation";

const useProjectsSection = () => {
  const router = useRouter();

  const projectData = projectsData.find((project) => project.featured);

  const handleClickViewProjectButton = (projectId: number | undefined) => {
    if (typeof projectId === "number") {
      router.push(`/projetos/${projectId}`);
      return;
    }

    toaster.error({
      title: `Erro ao acessar projeto destaque. Por favor, tente novamente mais tarde.`,
    });
  };

  const handleClickButtonSeeMoreProjects = () => router.push("/projetos");

  return {
    projectData,
    handleClickViewProjectButton,
    handleClickButtonSeeMoreProjects,
  };
};

export default useProjectsSection;
