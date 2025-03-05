import { BIRTHDAY_DATE, EARLY_CAREER_DATE } from "@portfolio/constants/dates";
import calculateYearsDifference from "@portfolio/utils/calculateYearsDifference";

import { useRouter } from "next/navigation";

const useAboutMe = () => {
  const router = useRouter();

  const handleClickHomeButton = () => router.push("/home");

  const handleClickViewProjectsButton = () => router.push("/projects");

  const yearsOld = calculateYearsDifference(BIRTHDAY_DATE);

  const experienceYears = calculateYearsDifference(EARLY_CAREER_DATE);

  return {
    handleClickHomeButton,
    handleClickViewProjectsButton,
    yearsOld,
    experienceYears,
  };
};

export default useAboutMe;
