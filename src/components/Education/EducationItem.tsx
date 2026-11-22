import type { Education } from '@/entities/api/cv';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

type EducationItemData = Education['list'][number];

type EducationItemProps = {
  education: EducationItemData;
};

export const EducationItem = ({ education }: EducationItemProps) => {
  return (
    <Card className="gap-0 rounded-none border-0 bg-transparent py-3 first:pt-0 shadow-none ring-0">
      <CardHeader className="grid grid-cols-1 gap-x-4 gap-y-0 px-0 sm:grid-cols-2">
        <CardTitle className="col-start-1 row-start-1 text-sm font-bold uppercase text-title">
          {education.educationalInstitution}
        </CardTitle>
        <CardDescription className="col-start-1 row-start-2 text-sm font-semibold text-foreground">
          {education.degree}
        </CardDescription>
        <CardDescription className="col-start-1 row-start-3 text-sm text-foreground">
          {education.specialty}
        </CardDescription>
        <CardDescription className="col-start-1 row-start-4 text-sm text-foreground sm:col-start-2 sm:row-start-1 sm:justify-self-end sm:text-right">
          {education.address.country}, {education.address.city}
        </CardDescription>
        <CardDescription className="col-start-1 row-start-5 text-sm text-foreground sm:col-start-2 sm:row-start-2 sm:justify-self-end sm:text-right">
          {education.duration.start} – {education.duration.finish}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
