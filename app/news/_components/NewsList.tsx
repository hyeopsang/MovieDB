import NewsPost from './NewsPost';

export default function NewsList() {
    return (
        <div className="grid gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <NewsPost key={i} i={i}/>
        ))}
      </div>
    )
}
