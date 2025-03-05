import { EARLY_CAREER_DATE } from "@portfolio/constants/earlyCareerDate";
import calculateExperienceYears from "@portfolio/utils/calculateExperienceYears";
import { useRouter } from "next/navigation";

const useAboutMe = () => {
  const router = useRouter();

  const handleClickHomeButton = () => router.push("/home");

  const handleClickViewProjectsButton = () => router.push("/projects");

  const experienceYears = calculateExperienceYears(EARLY_CAREER_DATE);

  return {
    handleClickHomeButton,
    handleClickViewProjectsButton,
    experienceYears,
  };
};

export default useAboutMe;
