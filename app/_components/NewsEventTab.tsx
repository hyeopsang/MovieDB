import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Newspaper } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewsEventTab(){
    return (
        <section className="container max-w-custom mx-auto px-4 py-12">
        <Tabs defaultValue="news" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                영화 뉴스
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                영화 행사
              </TabsTrigger>
            </TabsList>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              더보기
            </Link>
          </div>
          
          <TabsContent value="news" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Featured News */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured News"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-primary text-sm mb-2">영화뉴스</span>
                  <h3 className="text-xl font-bold text-white mb-2">2024년 기대작 Top 10</h3>
                  <p className="text-gray-200 text-sm">올해 개봉 예정인 최고의 기대작들을 소개합니다.</p>
                </div>
              </div>

              {/* News List */}
              <div className="grid gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Link key={i} href="#" className="flex gap-4 group">
                    <div className="relative w-32 aspect-[4/3] overflow-hidden rounded-lg flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=150&width=200"
                        alt="News Thumbnail"
                        className="object-cover transition-transform group-hover:scale-105"
                        fill
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-primary">영화소식</span>
                      <h4 className="font-medium line-clamp-2 group-hover:text-primary">
                        영화 뉴스 제목이 여기에 들어갑니다 {i + 1}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">2024.01.31</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Link key={i} href="#" className="group">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-3">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Event Image"
                      className="object-cover transition-transform group-hover:scale-105"
                      fill
                    />
                    <div className="absolute top-2 left-2 bg-primary px-2 py-1 rounded text-xs text-primary-foreground">
                      진행중
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary">제 28회 부산국제영화제</h4>
                    <p className="text-sm text-muted-foreground mt-1">2024.02.01 - 2024.02.10</p>
                    <p className="text-sm text-muted-foreground">부산 영화의 전당</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    )
}
