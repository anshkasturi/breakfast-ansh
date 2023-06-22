import './style.css';
import Header from "./Header";
import PostCard from "./PostCard";
import Navbar from "./Navbar";
import data from "./PostData";

function App() {
    const posts = data.map(post => {
        return (
          <PostCard
            key = {post.id}
            {...post}
          />
        )

    })
  return (
    <div className="App">
      <Navbar />
      <Header />
      <section className="card--list">
        {posts}
      </section>
    </div>
  );
}

export default App;
