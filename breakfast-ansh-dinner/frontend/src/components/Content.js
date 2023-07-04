import PostCard from "./PostCard";
import data from "./PostData";


export default function Content() {
    const bayPosts = (data.filter(post => post.address.includes('San Jose'))).map( post => {
        return (
          <PostCard
            key = {post.id}
            {...post}
          />
          )
    });
    return (
        <section>
        <h1> Bay Area: </h1>
        <div className="card--list">{bayPosts}</div>
        </section>
    )
}