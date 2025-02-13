import Image from "next/image"
import Link from "next/link"
import EventList from "./_components/EventList"
export default function Events() {
  return (
    <div className="container max-w-custom mx-auto px-4 pt-32 pb-12">
      <h1 className="text-3xl font-bold mb-8">영화 행사</h1>
      <EventList />
    </div>
  )
}

