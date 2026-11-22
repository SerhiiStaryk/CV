import { getNotableProjects } from '@/entities/api/cv';
import { Section } from '@/shared/ui/Section';
import { CardContent } from '@/shared/ui/card';
import { use } from 'react';
import { ProjectCard } from './ProjectCard';

export const NotableProjects = () => {
  const data = use(getNotableProjects());

  return (
    <Section title={data.title}>
      <CardContent className="flex flex-col px-0">
        {data.projects.map((project) => (
          <ProjectCard
            key={`${project.title}-${project.description}`}
            title={project.title}
            description={project.description}
          />
        ))}
      </CardContent>
    </Section>
  );
};
