import EventCard from "@/components/EventCard";
import EventCarousel from "@/components/EventCarousel";
import React from "react";

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "2023-07-15",
    location: "Central Park, NY",
  },
  {
    id: 2,
    title: "Tech Conference 2023",
    date: "2023-08-10",
    location: "Convention Center, SF",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    date: "2023-09-05",
    location: "Waterfront Hall, Chicago",
  },
  {
    id: 4,
    title: "Art Gallery Opening",
    date: "2023-07-22",
    location: "Metropolitan Museum, NY",
  },
  {
    id: 5,
    title: "Marathon 2023",
    date: "2023-10-01",
    location: "City Center, Boston",
  },
  {
    id: 6,
    title: "Book Fair",
    date: "2023-08-25",
    location: "Public Library, Seattle",
  },
];
interface EventProps {
  id: number;
  title: string;
  date: string;
  location: string;
}

const HomePage = () => {
  return (
    <div className="gap-1">
      <div className="">
      <EventCarousel/>
      </div>
      
      <div className="w-full flex flex-wrap  gap-4 mt-10">
        {events.map((event: EventProps) => {
          return (
            <div className="" key={event.id}>
              <EventCard event={event} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
