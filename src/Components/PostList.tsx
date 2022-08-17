import { PostInterface } from "../Interfaces";
import Post from "./Post";

interface PostListProps {
  posts: PostInterface[];
}

function PostList(props: PostListProps): JSX.Element {
  const postArray: JSX.Element[] = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      state={post.state}
      creationDate={post.creationDate}
    />
  ));

  return <section className="postList--containeer">{postArray}</section>;
}

export default PostList;
