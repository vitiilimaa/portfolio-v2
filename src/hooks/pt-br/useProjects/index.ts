import { useRouter } from "next/navigation";

const useProjects = () => {
  const router = useRouter();

  const handleClickAboutMeButton = () => router.push("/sobre-mim");
  
  const handleClickGetInTouchButton = () => router.push("/contato");

  return { handleClickAboutMeButton, handleClickGetInTouchButton };
};

export default useProjects;
