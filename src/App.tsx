import "./App.css";
import Header from "./components/Header"; // assuming it's in the same directory
import Article from "./components/Article";
function App() {
  return (
    <div className="App">
      <Header title="El-SooN.." />
      <div className="container">
        <Article
          title="Back-end Developer"
          name="Yasin"
          email="Yasin@gmail.com"
          year={1996}
          content="I love Java"
        />
        <Article
          title="Front-End Developer"
          name="Thomas"
          email="Thomas@gmail.com"
          year={1995}
          content="I love Javascrip"
        />
        <Article
          title="Not a Developer"
          name="Yoshi"
          email="Yoshi@gmail.com"
          year={1995}
        />
      </div>
    </div>
  );
}

export default App;
