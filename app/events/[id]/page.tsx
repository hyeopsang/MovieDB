import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventDetail({ params }: { params: { id: string } }) {
  // 실제 구현에서는 params.id를 사용하여 이벤트 데이터를 가져와야 합니다.
  return (
    <div className="container max-w-custom mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">제 28회 부산국제영화제</h1>
          <div className="relative aspect-video mb-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Event Image"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>2024.02.01 - 2024.02.10</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>부산 영화의 전당</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>10:00 AM - 10:00 PM</span>
            </div>
          </div>
          <div className="prose max-w-none">
            <p>
              부산국제영화제에 대한 상세한 설명이 여기에 들어갑니다. 영화제의 역사, 주요 상영작, 특별 이벤트 등 다양한
              정보를 포함할 수 있습니다.
            </p>
            <h2>주요 행사</h2>
            <ul>
              <li>개막식 및 개막작 상영</li>
              <li>국제 경쟁 부문</li>
              <li>아시아영화의 창</li>
              <li>한국영화의 오늘</li>
              <li>야외 상영회</li>
            </ul>
            <h2>참가 방법</h2>
            <p>
              영화제 참가를 위한 티켓 예매 방법, 상영 스케줄, 행사장 안내 등의 정보를 제공합니다. 온라인 예매 및 현장
              발권 등 다양한 옵션을 설명할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">행사 정보</h2>
            <ul className="space-y-2">
              <li>
                <strong>기간:</strong> 2024.02.01 - 2024.02.10
              </li>
              <li>
                <strong>장소:</strong> 부산 영화의 전당
              </li>
              <li>
                <strong>주최:</strong> 부산국제영화제 조직위원회
              </li>
              <li>
                <strong>후원:</strong> 문화체육관광부, 부산광역시
              </li>
            </ul>
            <Button className="w-full mt-6">티켓 예매하기</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

