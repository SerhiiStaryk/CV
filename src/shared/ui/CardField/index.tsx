import { CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import type { ReactNode } from 'react';

type CardFieldProps = {
  title: string;
  children: ReactNode;
};

export const CardField = ({ title, children }: CardFieldProps) => {
  return (
    <CardHeader className="px-0">
      <CardTitle className="text-sm font-bold text-title">{title}</CardTitle>
      <CardDescription className="text-sm leading-relaxed text-foreground">
        {children}
      </CardDescription>
    </CardHeader>
  );
};
