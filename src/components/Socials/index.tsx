import { getSocials } from '@/entities/api/cv';
import { Button } from '@/shared/ui/button';
import { CardContent } from '@/shared/ui/card';
import { Section } from '@/shared/ui/Section';
import { ExternalLink } from 'lucide-react';
import { use } from 'react';

export const Socials = () => {
  const data = use(getSocials());

  return (
    <Section title={data.title}>
      <CardContent className="flex flex-col items-start gap-2 px-0">
        {data.list.map((social) => (
          <Button
            render={<a href={social.url} target="_blank" rel="noreferrer" />}
            variant="link"
            size="sm"
            className="h-auto flex-col items-start gap-0 px-0 text-sm font-semibold text-title"
            key={social.title}
          >
            <span className="inline-flex items-center gap-1">
              {social.title}
              <ExternalLink
                className="print:hidden"
                size={13}
                aria-hidden="true"
              />
            </span>
            <span className="hidden text-xs font-normal text-foreground print:block">
              {social.url}
            </span>
          </Button>
        ))}
      </CardContent>
    </Section>
  );
};
