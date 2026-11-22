import type { ReactNode } from 'react';
import { CardContent } from '@/shared/ui/card';

type SkillCategoryGroupProps = {
  children: ReactNode;
};

export const SkillCategoryGroup = ({ children }: SkillCategoryGroupProps) => {
  return (
    <CardContent className="space-y-1 gap-0 px-0 text-muted-foreground">
      {children}
    </CardContent>
  );
};
