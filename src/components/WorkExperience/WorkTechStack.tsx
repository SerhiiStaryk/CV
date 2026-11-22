import { CardContent, CardDescription, CardTitle } from '@/shared/ui/card';

type WorkTechStackProps = {
  techStack: string[];
};

export const WorkTechStack = ({ techStack }: WorkTechStackProps) => {
  if (techStack.length === 0) {
    return null;
  }

  return (
    <CardContent className="px-0">
      <CardDescription className="text-foreground">
        <CardTitle className="inline text-sm font-bold italic">
          Tech stack:
        </CardTitle>{' '}
        {techStack.join(', ')}
      </CardDescription>
    </CardContent>
  );
};
