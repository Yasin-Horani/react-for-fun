import "./App.css";
import Header from "./components/Header"; // assuming it's in the same directory
import Article from "./components/Article";
function App() {
  return (
    <div className="App">
      <Header title="El-SooN.." />
      <div className="container">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
      </div>
    </div>
  );
}

export default App;
