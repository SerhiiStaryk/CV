import { Card, CardContent } from '@/shared/ui/card';
import { Additional } from '@/components/Additional';
import { Education } from '@/components/Education';
import { NotableProjects } from '@/components/NotableProjects';
import { PageTitle } from '@/components/PageTitle';
import { Skills } from '@/components/Skills';
import { Socials } from '@/components/Socials';
import { Summary } from '@/components/Summary';
import { WorkExperience } from '@/components/WorkExperience';
import { Suspense } from 'react';

const App = () => {
  return (
    <Card className="cv-page gap-0 rounded-none border-0 py-0 shadow-none ring-0">
      <Suspense fallback={null}>
        <PageTitle />
        <CardContent className="cv-content">
          <Summary />
          <Skills />
          <WorkExperience />
          <NotableProjects />
          <Education />
          <Additional />
          <Socials />
        </CardContent>
      </Suspense>
    </Card>
  );
};

export default App;
