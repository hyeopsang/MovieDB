import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import MovieList from "./_components/MovieList";
export default function Movies() {
  return (
    <div className="container max-w-custom mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">영화</h1>
      <MovieList />
    </div>
  )
}

