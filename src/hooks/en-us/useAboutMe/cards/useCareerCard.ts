import { useState } from "react";

const useCareerCard = () => {
  const [openedCollapsibleIds, setOpenedCollapsibleIds] = useState<number[]>(
    []
  );

  const handleClickShowActivitiesButton = (careerId: number) => {
    const isCollapsibleOpenForCurrentId =
      openedCollapsibleIds.includes(careerId);

    if (isCollapsibleOpenForCurrentId) {
      const filteredIds = openedCollapsibleIds.filter((id) => id !== careerId);
      setOpenedCollapsibleIds(filteredIds);
    } else {
      setOpenedCollapsibleIds((prevIds) => [...prevIds, careerId]);
    }
  };

  return { openedCollapsibleIds, handleClickShowActivitiesButton };
};

export default useCareerCard;
