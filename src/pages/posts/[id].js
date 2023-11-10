/** @format */

import PostInfo from "./postInfo";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getStaticPaths() {
  const response = await fetch(POSTS_URL);
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const response = await fetch(`${POSTS_URL}/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  return <PostInfo post={post} />;
};

export default Post;
