import PostCard from "./PostCard";
import {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axios from "axios"; 


export default function Content() {
  // New Code
  const [posts, setPosts] = useState([]);
  const location_category = useLocation().search

  useEffect(() => {
  const fetchAllPosts = async () => {
      try {
          const res = await axios.get(`/posts`);
          console.log(res)
          setPosts(res.data)
      } catch (err) {
          console.log(err);
      }
  };
  fetchAllPosts();
  }, []);
  const testposts = posts.map(post => {
      return (
        <PostCard
          key = {post.id}
          cover = {post.img_link}
          restaurant = {post.restaurant_name}
          stars = {post.stars}
          price = {post.price}
          one_word = {post.oneword}
          address = {post.address}
          thoughts = {post.thoughts}
          author = {post.author}
        />
      )

  })
  const testBayPosts = (posts.filter(post => post.loc_category.includes('San Jose'))).map(post => {
      return (
        <PostCard
          key = {post.id}
          {...post}
        />
      )

  })

  return (
      <section>
      <h1> Bay Area: </h1>
      <div className="card--list">{testBayPosts}</div>
      </section>
  )
}