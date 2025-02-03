import MoviePost from "./movie-post";
import { useEffect, useState } from "react";

import { now_playing } from "@/app/_actions/movie";
import { useSearchParams } from "next/navigation";

export default function NowMovie() {
    const searchParams = useSearchParams();
        const current = parseInt(searchParams.get("page") || "1");
        const [posts, setPosts] = useState<Post[]>([]);
        const [total, setTotal] = useState<number>(0);
        const [isLoading, setIsLoading] = useState<boolean>(true);
        useEffect(()=> {
            const fetchPosts = async () => {
                setIsLoading(true);
          
                try {
                  const response = await now_playing(current);
                } catch (err) {
                  console.error("게시물을 불러오지 못했어!", err);
                } finally {
                  setIsLoading(false);
                }
              };
          
              fetchPosts();
        },[])
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 20 }).map((_, i) => (
            <MoviePost key={i} i={i}/>
        ))}
      </div>
    )
}
