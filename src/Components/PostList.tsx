import Post from "./Post";
import { baseUrl } from "../utils/baseUrl";
import { useState, useEffect } from "react";
import axios from "axios";
import { PostInterface } from "../Interfaces";

function PostList(): JSX.Element {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    const url = baseUrl + "/posts";
    async function fetchPosts() {
      const response = await axios.get(url);
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  const postArray: JSX.Element[] = posts.map((post) => (
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
