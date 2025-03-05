import projectsData from "@portfolio/data/pt-br/projectsData";

type ProjectHook = {
  id: number;
};
const useProject = (props: ProjectHook) => {
  const { id } = props;

  const project = projectsData.find((project) => project.id === id);

  return { project };
};

export default useProject;
