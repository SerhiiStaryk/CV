import { getAdditional } from '@/entities/api/cv';
import { CardField } from '@/shared/ui/CardField';
import { Section } from '@/shared/ui/Section';
import { use } from 'react';

export const Additional = () => {
  const data = use(getAdditional());

  return (
    <Section title={data.title}>
      <CardField title="Languages">{data.languages.join('; ')}</CardField>
      <CardField title="Training">{data.trainings.join('; ')}</CardField>
    </Section>
  );
};
