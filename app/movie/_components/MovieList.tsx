import MoviePost from "./MoviePost"
export default function MovieList() {
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 20 }).map((_, i) => (
            <MoviePost key={i} i={i}/>
        ))}
      </div>
    )
}
