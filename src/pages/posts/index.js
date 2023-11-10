/** @format */
import Link from "next/link";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getStaticProps() {
  const response = await fetch(POSTS_URL);
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
const stylepage = {
  border: "1px solid gray",
  margin: "1rem",
  padding: "3rem",
  color: "black",
  background: "white",
};
const Posts = ({ posts }) => {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "left", fontSize: 20, margin: 5 }}>
        All Posts
      </h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={stylepage}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
