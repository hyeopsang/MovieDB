import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function MainBanner() {
    return (
        <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Featured Movie"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
        <div className="container max-w-custom mx-auto px-4 relative h-full flex items-end pb-12">
          <div className="grid gap-4 max-w-xl">
            <h1 className="text-4xl font-bold text-white">영화 제목</h1>
            <p className="text-gray-200">
              영화에 대한 간단한 설명이 여기에 들어갑니다. 주요 줄거리나 흥미로운 포인트를 소개합니다.
            </p>
            <div className="flex gap-4">
              <Button size="lg">자세히 보기</Button>
              <Button size="lg" variant="secondary">
                예고편 보기
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}
