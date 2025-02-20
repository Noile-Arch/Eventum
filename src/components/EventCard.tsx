import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin } from 'lucide-react'

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    location: string
  }
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden">
      <Image
        src="/placeholder.svg"
        alt={event.title}
        width={340}
        height={100}
        className="w-[440px] h-48 object-cover"
      />
      <CardContent className="p-4 ">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Link href={`/event/${event.id}`} className="w-full">
          <Button className="w-full dark:bg-white dark:text-black">Register</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default EventCard

