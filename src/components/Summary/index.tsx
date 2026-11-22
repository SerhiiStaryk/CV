import { getMainInfo, getSummary } from '@/entities/api/cv';
import {
  getCommercialExperience,
  getOverallProfessionalExperience,
} from '@/shared/lib/utils';
import { CardDescription } from '@/shared/ui/card';
import { Section } from '@/shared/ui/Section';
import { use } from 'react';

export const Summary = () => {
  const summary = use(getSummary());
  const mainInfo = use(getMainInfo());
  const commercialExperience = getCommercialExperience(mainInfo.itStartDate);
  const professionalExperience = getOverallProfessionalExperience(
    mainInfo.professionalStartDate,
  );
  const summaryText = summary
    .replace('{commercialExperience}', commercialExperience)
    .replace('{professionalExperience}', professionalExperience);

  return (
    <Section title="Summary">
      <CardDescription className="text-foreground text-base">
        {summaryText}
      </CardDescription>
    </Section>
  );
};
