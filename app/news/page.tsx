import Image from "next/image"
import Link from "next/link"
import NewsList from "./_components/NewsList";
export default function News() {
  return (
    <div className="container max-w-custom mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">영화 뉴스</h1>
      <NewsList />
    </div>
  )
}

