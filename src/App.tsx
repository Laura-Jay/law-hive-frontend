import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import { useEffect, useState } from "react";
import { baseUrl } from "./utils/baseUrl";
import { FetchPostInterface } from "./Interfaces";
import axios from "axios";
import "./styles.css";

function App(): JSX.Element {
  const [posts, setPosts] = useState<FetchPostInterface[]>([]);
  const [reload, setReload] = useState<boolean>(true);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    const url = baseUrl + "/posts";
    async function fetchPosts() {
      const response = await axios.get(url);
      setPosts(response.data);
    }
    fetchPosts();
  }, [reload]);

  return (
    <div className="responsive-wrapper">
      <h1>Current Job Postings</h1>
      <div className="button-bar">
      <button className="button-add" onClick={(e) => setToggleForm((prev) => !prev)}>
        Create Job Post
      </button>
      </div>
      {toggleForm && <PostForm triggerReload={setReload} reload={reload} />}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
