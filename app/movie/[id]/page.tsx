import Image from "next/image"
import { Star, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MovieDetail({ params }: { params: { id: string } }) {
  // 실제 구현에서는 params.id를 사용하여 영화 데이터를 가져와야 합니다.
  return (
    <div className="container max-w-custom mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=600&width=400" alt="Movie Poster" className="object-cover" fill />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">영화 제목 (2024)</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">4.5</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5" />
              <span className="ml-1">2시간 15분</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5" />
              <span className="ml-1">2024.06.15 개봉</span>
            </div>
          </div>
          <p className="text-lg mb-6">
            영화에 대한 상세한 설명이 여기에 들어갑니다. 주요 줄거리, 캐스팅, 제작 배경 등 다양한 정보를 포함할 수
            있습니다. 관객들의 기대를 모으고 있는 이 영화는 독특한 스토리라인과 뛰어난 연기력으로 주목받고 있습니다.
          </p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">감독</h2>
            <p>홍길동</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">출연</h2>
            <p>배우1, 배우2, 배우3</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg">예매하기</Button>
            <Button size="lg" variant="outline">
              예고편 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

