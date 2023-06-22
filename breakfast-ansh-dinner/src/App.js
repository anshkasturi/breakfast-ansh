import './style.css';
import Header from "./header";
import PostCard from "./PostCard";
import data from "./PostData";
console.log(data);

function App() {
    const posts = data.map(post => {
        return (
          <PostCard
            cover = {post.img}
            restaurant = {post.restaurant}
            stars = {post.stars}
            price = {post.price}
            one_word = {post.one_word}
            address = {post.address}
            thoughts = {post.thoughts}
          />
        )

    })
  return (
    <div className="App">
      <Header />
      <section className="card--list">
        {posts}
      </section>
    </div>
  );
}

export default App;
