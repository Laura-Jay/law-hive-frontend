
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import { useEffect, useState } from "react";
import { baseUrl } from "./utils/baseUrl";
import { FetchPostInterface } from "./Interfaces";
import axios from "axios";

function App(): JSX.Element {
  const [posts, setPosts] = useState<FetchPostInterface[]>([]);
  const [reload, setReload] = useState<boolean>(true);
  const [toggleForm, setToggleForm] = useState(false)

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
      <button onClick={(e) => setToggleForm((prev) => !prev) }>Create Job Post</button>
      <PostList posts={posts} />
      { toggleForm && <PostForm triggerReload={setReload} reload={reload} />}
    </>
  );
}

export default App;
