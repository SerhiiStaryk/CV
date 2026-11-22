import type { WorkExperience } from '@/entities/api/cv';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { WorkResponsibilities } from './WorkResponsibilities';
import { WorkTechStack } from './WorkTechStack';

type WorkPlaceData = WorkExperience['workPlaces'][number];

type WorkPlaceProps = {
  workPlace: WorkPlaceData;
};

export const WorkPlace = ({ workPlace }: WorkPlaceProps) => {
  return (
    <Card className="cv-workplace gap-3 rounded-none border-0 bg-transparent py-0 shadow-none ring-0">
      <CardHeader className="grid grid-cols-1 gap-x-4 gap-y-0 px-0 sm:grid-cols-2">
        <CardTitle className="col-start-1 row-start-1 text-base font-bold uppercase text-title">
          {workPlace.companyName}
        </CardTitle>
        <CardDescription className="col-start-1 row-start-2 text-sm font-medium text-foreground">
          {workPlace.position}
        </CardDescription>
        <CardDescription className="col-start-1 row-start-3 text-sm text-foreground sm:col-start-2 sm:row-start-1 sm:justify-self-end sm:text-right">
          {workPlace.address.country}, {workPlace.address.city}
        </CardDescription>
        <CardDescription className="col-start-1 row-start-4 text-sm text-foreground sm:col-start-2 sm:row-start-2 sm:justify-self-end sm:text-right">
          {workPlace.duration.start} – {workPlace.duration.finish}
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-3 px-0">
        <WorkResponsibilities responsibilities={workPlace.responsibilities} />
        <WorkTechStack techStack={workPlace.techStack} />
      </CardContent>
    </Card>
  );
};
