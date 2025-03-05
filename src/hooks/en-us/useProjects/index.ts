import { useRouter } from "next/navigation";

const useProjects = () => {
  const router = useRouter();

  const handleClickAboutMeButton = () => router.push("/about-me");

  const handleClickGetInTouchButton = () => router.push("/contact");

  return { handleClickAboutMeButton, handleClickGetInTouchButton };
};

export default useProjects;
