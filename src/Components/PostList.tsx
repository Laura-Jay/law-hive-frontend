import { FetchPostInterface } from "../Interfaces";
import Post from "./Post";

interface PostListProps {
  posts: FetchPostInterface[];
}

function PostList(props: PostListProps): JSX.Element {
  const postArray: JSX.Element[] = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      feeStructure={post.feestructure}
      feePercentage={post.feepercentage}
      feeAmount={post.feeamount}
      settlementAmount={post.settlementamount}
      amountPaid={post.amountpaid}
      state={post.state}
      creationDate={post.creationdate}
    />
  ));

  return <section className="postList--containeer">{postArray}</section>;
}

export default PostList;
