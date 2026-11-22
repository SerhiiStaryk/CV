import { getSkills } from '@/entities/api/cv';
import { Section } from '@/shared/ui/Section';
import { use } from 'react';
import { SkillCategoryList } from './SkillCategoryList';

export const Skills = () => {
  const skills = use(getSkills());

  return (
    <Section title={skills.title}>
      <SkillCategoryList categories={skills.categories} />
    </Section>
  );
};
