"use client"
import Link from "next/link"
import Image from "next/image";
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Logo from "@/public/assets/popcorn.png"
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full bg-backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container max-w-custom mx-auto px-4 flex h-14 items-center">
        <Link href="/" className="font-bold text-xl mr-6">
          <Image src={Logo} alt="Logo" width={170} />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/" className={`${pathname == '/' ? 'text-white' : 'text-white/60'} text-sm font-medium transition-white active:text-white hover:text-white`}>
            홈
          </Link>
          <Link
            href="/movie/now"
            className={`${pathname == '/movie/now' || pathname == '/movie/comming' ? 'text-white' : 'text-white/60'} text-sm font-medium transition-white active:text-white hover:text-white`}
          >
            영화
          </Link>
          <Link href="/news" className={`${pathname == '/news' ? 'text-white' : 'text-white/60'} text-sm font-medium transition-white active:text-white hover:text-white`}>
            뉴스
          </Link>
          <Link
            href="/events"
            className={`${pathname == '/events' ? 'text-white' : 'text-white/60'} text-sm font-medium transition-white active:text-white hover:text-white`}
          >
            행사
          </Link>
        </nav>
        <div className="flex items-center ml-auto">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="영화 검색" className="pl-8 text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}

