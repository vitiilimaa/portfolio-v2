import { RefObject, useEffect, useState } from "react";

type GetElementWidthHook = {
  elementRef: RefObject<HTMLDivElement | null>;
};

const useGetElementWidth = (props: GetElementWidthHook) => {
  const { elementRef } = props;

  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    const updateElementWidth = () => {
      if (elementRef.current) {
        const width = elementRef.current.getBoundingClientRect().width;
        setElementWidth(width);
      }
    };

    updateElementWidth();

    window.addEventListener("resize", updateElementWidth);

    return () => {
      window.removeEventListener("resize", updateElementWidth);
    };
  }, [elementRef]);

  return { elementWidth };
};

export default useGetElementWidth;
