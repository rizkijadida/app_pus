import { format } from 'date-fns';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  title: string;
  category: string;
  imageUrl: string;
  registerAt: Date;
  blogId: number;
  timeDifferencesAt: string;
} 

const EventCard: FC<EventCardProps> = ({
  title,
  imageUrl,
  registerAt,
  timeDifferencesAt,
  blogId,
}) => {
  return (
    <Link href={`/${blogId}`}>
    <Card>
      <CardHeader>
        <div className="relative h-[220px] w-full overflow-hidden rounded-md">
          <Image src={''} alt="thumbnail" className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light italic">
          {format(registerAt, 'dd MMMM yyyy')}
        </p>
        <p>{timeDifferencesAt}</p>
      </CardContent>
    </Card>
    </Link>
  );
};

export default EventCard;
