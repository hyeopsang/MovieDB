import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

import poster from "@/public/assets/captin-s.jpeg";
interface movies {
  title: string,
  description: string,
  poster: StaticImageData,
  opening: string,
  genre: string[] | null,
  company: string,
  film_rating : string,
  year: string,
  rating : string
}
export default function NewMovie() {
  const movieList : movies = {
    'title' : '캡틴 아메리카 : 브레이브 뉴 월드',
    'description' : '대통령이 된 새디우스 로스와 재회 후, 국제적인 사건의 중심에 서게 된 샘이 전 세계를 붉게 장악하려는 사악한 음모 뒤에 숨겨진 존재와 이유를 파헤쳐 나가는 액션 블록버스터',
    'poster' : poster,
    'opening' : '2025.02.12',
    'genre' : ['액션', '슈퍼히어로', 'SF'],
    'company' : '마블 스튜디오',
    'film_rating' : '12세 이상 관람가',
    'year' : '2025',
    'rating' : '4.0'
  }
    return (
        <section className="container max-w-custom mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">최신 영화</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <Link key={i} href="#" className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                <Image
                  src={movieList.poster}
                  alt="Movie Poster"
                  className="object-cover transition-transform group-hover:scale-105"
                  fill
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-white">
                    <Image src="/assets/star.png" alt="popcorn" width={15} height={15} />
                    <span className="text-sm">{movieList.rating}</span>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-medium leading-tight">{movieList.title}</h3>
                <p className="text-sm text-muted-foreground">{movieList.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}
