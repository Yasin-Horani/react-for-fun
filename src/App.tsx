import "./App.css";
import Header from "./components/Header"; // assuming it's in the same directory
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header title="El-SooN.." />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
