import "./App.css";
import Header from "./components/Header"; // assuming it's in the same directory
import Post from "./components/Post";
import TagButton from "./components/TagButton";

function App() {
  return (
    <div className="App">
      <Header title="El-SooN.." />
      <div className="container">
        <div className="posts-container">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="tags">
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
        </div>
      </div>
    </div>
  );
}

export default App;
