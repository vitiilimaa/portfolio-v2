const calculateExperienceYears = (startDate: string) => {
  const currentDate = new Date();
  const start = new Date(startDate);

  let experienceYears = currentDate.getFullYear() - start.getFullYear();
  const currentMonth = currentDate.getMonth();
  const startMonth = start.getMonth();

  if (
    currentMonth < startMonth ||
    (currentMonth === startMonth && currentDate.getDate() < start.getDate())
  ) {
    experienceYears--;
  }

  return experienceYears;
};

export default calculateExperienceYears;