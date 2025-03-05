import { EARLY_CAREER_DATE } from "@portfolio/constants/earlyCareerDate";
import calculateExperienceYears from "@portfolio/utils/calculateExperienceYears";
import { useRouter } from "next/navigation";

const useAboutMe = () => {
  const router = useRouter();

  const handleClickHomeButton = () => router.push("/inicio");

  const handleClickViewProjectsButton = () => router.push("/projetos");

  const experienceYears = calculateExperienceYears(EARLY_CAREER_DATE);

  return {
    handleClickHomeButton,
    handleClickViewProjectsButton,
    experienceYears,
  };
};

export default useAboutMe;
