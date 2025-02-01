import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function NewMovie() {
    return (
        <section className="container max-w-custom mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">최신 영화</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <Link key={i} href="#" className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=450&width=300"
                  alt="Movie Poster"
                  className="object-cover transition-transform group-hover:scale-105"
                  fill
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm">4.5</span>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-medium leading-tight">영화 제목 {i + 1}</h3>
                <p className="text-sm text-muted-foreground">2024</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}
