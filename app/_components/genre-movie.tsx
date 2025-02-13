import Image from "next/image";
import Link from "next/link";
import poster from '@/public/assets/captin-s.jpeg';

export default function GenreMovie() {
    
    return (
        <section className="container max-w-custom mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">장르별 영화</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["액션", "코미디", "드라마", "공포", "SF", "로맨스", "애니메이션", "다큐멘터리"].map((genre) => (
            <Link key={genre} href="#" className="relative h-32 overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt={genre}
                className="object-cover transition-transform group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">{genre}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}
