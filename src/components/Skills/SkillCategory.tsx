import type { Skills as SkillsData } from '@/entities/api/cv';
import { CardDescription, CardTitle } from '@/shared/ui/card';

type SkillCategoryProps = SkillsData['categories'][number];

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <CardDescription className="leading-normal text-foreground">
      <CardTitle className="inline leading-normal font-semibold text-foreground">
        {title}:
      </CardTitle>{' '}
      {skills.join(', ')}
    </CardDescription>
  );
};
