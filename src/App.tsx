import { greet } from "./utils/greet";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import { useEffect, useState } from "react";
import { baseUrl } from "./utils/baseUrl";
import { FetchPostInterface } from "./Interfaces";
import axios from "axios";

function App(): JSX.Element {
  const [posts, setPosts] = useState<FetchPostInterface[]>([]);
  const [reload, setReload] = useState<boolean>(true);

  useEffect(() => {
    const url = baseUrl + "/posts";
    async function fetchPosts() {
      const response = await axios.get(url);
      setPosts(response.data);
    }
    fetchPosts();
  }, [reload]);

  return (
    <>
      <h1>{greet("World")}</h1>;
      <PostList posts={posts} />
      <PostForm triggerReload={setReload} reload={reload} />
    </>
  );
}

export default App;
