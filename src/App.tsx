import "./App.css";
import Header from "./components/Header"; // assuming it's in the same directory
import Posts from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header title="El-SooN.." />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default App;
