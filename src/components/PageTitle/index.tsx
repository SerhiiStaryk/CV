import { getMainInfo, type MainInfo } from '@/entities/api/cv';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { use } from 'react';

export const PageTitle = () => {
  const mainInfo: MainInfo = use(getMainInfo());
  const fullName = `${mainInfo.firstName} ${mainInfo.lastName}`.toUpperCase();
  const location =
    `${mainInfo.address.country}, ${mainInfo.address.city}`.toUpperCase();

  return (
    <Card className="w-full rounded-none border-0 bg-card px-4 py-7 text-center shadow-none ring-0 pb-0 print:px-0 print:pb-0">
      <CardHeader className="items-center gap-1 px-0">
        <CardTitle className="text-3xl leading-tight font-black tracking-tight text-title sm:text-4xl print:text-2xl">
          {fullName}
        </CardTitle>
        <CardDescription className="text-base leading-snug text-title sm:text-xl print:text-sm">
          {`${mainInfo.contactNo} | ${mainInfo.email} | ${location}`}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
