import useGetElementWidth from "@portfolio/hooks/useGetElementWidth";

import { useRef } from "react";

import { useRouter } from "next/navigation";

const useResumeAboutMe = () => {
  const outerTextRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { elementWidth: textWidth } = useGetElementWidth({
    elementRef: outerTextRef,
  });

  const handleClickFindOutMoreButton = () => router.push("/about-me");

  return { handleClickFindOutMoreButton, textWidth, outerTextRef };
};

export default useResumeAboutMe;
