import { getWorkExperience } from '@/entities/api/cv';
import { Section } from '@/shared/ui/Section';
import { CardContent } from '@/shared/ui/card';
import { use } from 'react';
import { WorkPlace } from './WorkPlace';

export const WorkExperience = () => {
  const experience = use(getWorkExperience());

  return (
    <Section title={experience.title}>
      <CardContent className="gap-6 px-0">
        {experience.workPlaces.map((workPlace) => (
          <WorkPlace
            key={`${workPlace.companyName}-${workPlace.duration.start}`}
            workPlace={workPlace}
          />
        ))}
      </CardContent>
    </Section>
  );
};
