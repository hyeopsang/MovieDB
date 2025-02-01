import Image from 'next/image';
import Link from 'next/link';



export default function NewsPost({ i }: { i: number }) {
    return (
        <article  className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/3 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="News Thumbnail"
                className="object-cover transition-transform hover:scale-105"
                fill
              />
            </div>
            <div className="flex-1">
              <span className="text-sm text-primary">영화소식</span>
              <h2 className="text-2xl font-bold mt-2 mb-3 hover:text-primary">
                <Link href="#">영화 뉴스 제목이 여기에 들어갑니다 {i + 1}</Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                뉴스 내용의 일부가 여기에 표시됩니다. 이는 뉴스 기사의 요약이나 첫 문단이 될 수 있습니다...
              </p>
              <p className="text-sm text-muted-foreground">2024.01.31</p>
            </div>
          </article>
    )
}
