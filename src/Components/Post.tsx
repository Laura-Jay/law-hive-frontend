import { PostInterface } from "../Interfaces";

function Post(props: PostInterface): JSX.Element {
  return (
    <>
      <div className="post--container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>State: {props.state}</p>
      </div>
    </>
  );
}

export default Post;
