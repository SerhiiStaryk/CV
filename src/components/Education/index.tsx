import { getEducation } from '@/entities/api/cv';
import { Card } from '@/shared/ui/card';
import { Section } from '@/shared/ui/Section';
import { use } from 'react';
import { EducationItem } from './EducationItem';

export const Education = () => {
  const data = use(getEducation());

  return (
    <Section title={data.title}>
      <Card className="gap-0 divide-y divide-border rounded-none border-0 bg-transparent py-0 shadow-none ring-0">
        {data.list.map((item) => (
          <EducationItem
            key={`${item.degree}-${item.duration.start}`}
            education={item}
          />
        ))}
      </Card>
    </Section>
  );
};
