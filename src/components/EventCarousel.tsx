"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const events = [
  { id: 1, title: "Summer Music Festival", image: "/music-fest.jpg" },
  { id: 2, title: "Tech Conference 2025", image: "/tech-conference.jpg" },
  { id: 3, title: "Food & Wine Expo", image: "/food-wine.jpg" },
]

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <div className="relative h-[450px]">
      <div className="overflow-hidden rounded-lg aspect-video">
        <Image
          src={events[currentIndex].image || "/placeholder.svg"}
          alt={events[currentIndex].title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-3xl font-bold">{events[currentIndex].title}</h3>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default EventCarousel

