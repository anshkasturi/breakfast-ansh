import PostCard from "./PostCard";

export default function Content(incomingPosts) {
  const cards = [
    <PostCard
    cover = {incomingPosts.cover}
    restaurant = {incomingPosts.restaurant}
    stars = {incomingPosts.stars}
    price = {incomingPosts.price}
    one_word = {incomingPosts.one_word}
    address = {incomingPosts.address}
    thoughts = {incomingPosts.thoughts}
    />
  ]
  console.log(incomingPosts.address);
  const containsSanJose = incomingPosts.address.includes('San Jose');
  const containsSanFrancisco = incomingPosts.address.includes('San Francisco');
  console.log(containsSanJose);

    return (
        <section>
        <h1> San Jose: </h1>
          {containsSanJose && cards}
        </section>
    )
}