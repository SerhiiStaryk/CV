import type { Skills as SkillsData } from '@/entities/api/cv';
import { SkillCategory } from './SkillCategory';
import { SkillCategoryGroup } from './SkillCategoryGroup';

type SkillCategoryListProps = {
  categories: SkillsData['categories'];
};

export const SkillCategoryList = ({ categories }: SkillCategoryListProps) => {
  return (
    <SkillCategoryGroup>
      {categories.map(({ title, skills }, index) => (
        <SkillCategory
          key={`${title}-${index}`}
          title={title}
          skills={skills}
        />
      ))}
    </SkillCategoryGroup>
  );
};
