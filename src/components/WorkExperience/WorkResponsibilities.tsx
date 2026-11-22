import { CardContent, CardDescription } from '@/shared/ui/card';

type WorkResponsibilitiesProps = {
  responsibilities: string[];
};

export const WorkResponsibilities = ({
  responsibilities,
}: WorkResponsibilitiesProps) => {
  return (
    <CardContent className="gap-1 px-0">
      {responsibilities.map((responsibility) => (
        <CardDescription
          className="text-foreground before:mr-2 before:content-['•']"
          key={responsibility}
        >
          {responsibility}
        </CardDescription>
      ))}
    </CardContent>
  );
};
