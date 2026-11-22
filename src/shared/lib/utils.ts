export { cn } from 'cn';

export const getCommercialExperience = (
  startDate: string,
  now = new Date(),
) => {
  const [startYear, startMonth] = startDate.split('-').map(Number);
  const elapsedMonths =
    (now.getFullYear() - startYear) * 12 + now.getMonth() + 1 - startMonth;
  const completedHalfYearSteps = Math.max(0, Math.ceil(elapsedMonths / 6));

  return (completedHalfYearSteps / 2).toFixed(1).replace('.0', '');
};

export const getOverallProfessionalExperience = (
  startDate: string,
  now = new Date(),
) => {
  const [startYear, startMonth] = startDate.split('-').map(Number);
  const elapsedMonths =
    (now.getFullYear() - startYear) * 12 + now.getMonth() + 1 - startMonth;
  const completedFiveYearSteps = Math.max(0, Math.floor(elapsedMonths / 60));

  return String(completedFiveYearSteps * 5);
};
