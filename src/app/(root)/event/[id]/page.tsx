import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CalendarDays, Clock, MapPin } from 'lucide-react'

const eventDetails = {
  id: 1,
  title: "Summer Music Festival",
  date: "2023-07-15",
  time: "12:00 PM - 10:00 PM",
  location: "Central Park, New York, NY",
  description: "Join us for a day of amazing music featuring top artists from around the world. Food trucks, art installations, and more!",
  image: "/placeholder.svg"
}
// const events = [
//   {
//     id: 1,
//     title: "Summer Music Festival",
//     date: "2023-07-15",
//     location: "Central Park, NY",
//   },
//   {
//     id: 2,
//     title: "Tech Conference 2023",
//     date: "2023-08-10",
//     location: "Convention Center, SF",
//   },
//   {
//     id: 3,
//     title: "Food & Wine Expo",
//     date: "2023-09-05",
//     location: "Waterfront Hall, Chicago",
//   },
//   {
//     id: 4,
//     title: "Art Gallery Opening",
//     date: "2023-07-22",
//     location: "Metropolitan Museum, NY",
//   },
//   {
//     id: 5,
//     title: "Marathon 2023",
//     date: "2023-10-01",
//     location: "City Center, Boston",
//   },
//   {
//     id: 6,
//     title: "Book Fair",
//     date: "2023-08-25",
//     location: "Public Library, Seattle",
//   },
// ];

export default function EventDetailsPage() {
  // In a real application, you would fetch the event details based on the ID
  // const eventDetails = await getEventDetails(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={eventDetails.image || "/placeholder.svg"}
            alt={eventDetails.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{eventDetails.title}</h1>
          <div className="flex items-center text-muted-foreground mb-2">
            <CalendarDays className="w-5 h-5 mr-2" />
            <span>{eventDetails.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>{eventDetails.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{eventDetails.location}</span>
          </div>
          <p className="mb-6">{eventDetails.description}</p>
          <Button size="lg">Register Now</Button>
        </div>
      </div>
    </div>
  )
}

