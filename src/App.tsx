import { greet } from "./utils/greet";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";

function App(): JSX.Element {
  return (
    <>
      <h1>{greet("World")}</h1>;
      <PostList />
      <PostForm />
    </>
  );
}

export default App;
