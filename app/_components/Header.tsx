import Link from "next/link"
import Image from "next/image";
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Logo from "@/public/assets/popcorn.png"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-custom mx-auto px-4 flex h-14 items-center">
        <Link href="/" className="font-bold text-xl mr-6">
          <Image src={Logo} alt="Logo" width={170} />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            홈
          </Link>
          <Link
            href="/movie/now"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            영화
          </Link>
          <Link href="/news" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            뉴스
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            행사
          </Link>
        </nav>
        <div className="flex items-center ml-auto">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="영화 검색..." className="pl-8" />
          </div>
        </div>
      </div>
    </header>
  )
}

