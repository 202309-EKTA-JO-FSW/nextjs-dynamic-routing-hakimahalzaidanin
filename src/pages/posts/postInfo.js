/** @format */
const stylepage = {
  border: "1px solid gray",
  margin: "1rem",
  padding: "3rem",
  color: "black",
  background: "white",
};

const styleText = {
  color: "tomato",
  fontSize: 20,
  background: "white",
};
const PostInfo = ({ post }) => {
  return (
    <div style={stylepage}>
      <p style={styleText}>{post.id}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostInfo;
