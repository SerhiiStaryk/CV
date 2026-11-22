import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

type ProjectCardProps = {
  title: string;
  description: string;
};

export const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Card className="gap-0 rounded-none border-0 bg-transparent py-1 shadow-none ring-0">
      <CardHeader className="px-0">
        <CardTitle className="mb-1 text-base font-bold uppercase text-title leading-snug">
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-sm leading-relaxed text-foreground">
        {description}
      </CardDescription>
    </Card>
  );
};
