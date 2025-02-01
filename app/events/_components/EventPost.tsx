import Image from 'next/image';
import Link from 'next/link';

export default function EventPost({i} : {i: number}) {
    return(
        <Link key={i} href="#" className="group">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=300&width=450"
                alt="Event Image"
                className="object-cover transition-transform group-hover:scale-105"
                fill
              />
              <div className="absolute top-2 left-2 bg-primary px-2 py-1 rounded text-xs text-primary-foreground">
                진행중
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold group-hover:text-primary">제 {i + 28}회 부산국제영화제</h2>
              <p className="text-sm text-muted-foreground mt-1">2024.02.01 - 2024.02.10</p>
              <p className="text-sm text-muted-foreground">부산 영화의 전당</p>
              <p className="mt-2">
                부산국제영화제에 대한 간단한 설명이 여기에 들어갑니다. 주요 상영작, 특별 이벤트 등을 소개합니다.
              </p>
            </div>
          </Link>
    )
}
