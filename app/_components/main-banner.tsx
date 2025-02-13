import Image from 'next/image';
import { Button } from '@/components/ui/button';
import mainImg from '@/public/assets/captin.jpeg';

export default function MainBanner() {
    return (
        <section className="relative h-[90vh] min-h-[400px]">
        <Image
          src={mainImg}
          alt="Featured Movie"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/30" />
        <div className="container max-w-custom mx-auto px-4 relative h-full flex items-end pb-12">
          <div className="grid gap-4 max-w-xl">
            <h1 className="text-4xl font-bold text-white">캡틴 아메리카 : 브레이브 뉴 월드</h1>
            <p className="text-gray-200">
            대통령이 된 새디우스 로스와 재회 후, 국제적인 사건의 중심에 서게 된 샘이 전 세계를 붉게 장악하려는 사악한 음모 뒤에 숨겨진 존재와 이유를 파헤쳐 나가는 액션 블록버스터
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
