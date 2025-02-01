import EventPost from "./EventPost"
export default function EventList() {
    return(
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <EventPost key={i} i={i}/>
        ))}
      </div>
    )
}
