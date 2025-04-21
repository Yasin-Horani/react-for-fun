import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";

const articles = [
  {
    title: "Full-Stack Developer",
    name: "El-SooN",
    email: "Soon@gmail.com",
    year: 1995,
    content: "I love React",
  },
  {
    title: "Back-End Developer",
    name: "Yasin",
    email: "yasin@gmail.com",
    year: 1996,
    content: "I love spring boot and Java",
  },
  {
    title: "Front-End Developer",
    name: "Thomas",
    email: "Thomas@gmail.com",
    year: 1995,
    content: "I love JavaScript",
  },
  {
    title: "Not a Developer",
    name: "Yoshi",
    email: "Yoshi@gmail.com",
    year: 1995,
  },
];

function App() {
  return (
    <div className="App">
      <Header title="El-SooN.." />
      <div className="container">
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            name={article.name}
            email={article.email}
            year={article.year}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
