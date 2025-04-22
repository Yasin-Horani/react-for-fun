import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import TagButton from "./components/TagButton";

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
        <div className="articles">
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
        <div className="buttons">
          <TagButton tagName="button 1" />
          <TagButton tagName="button 2" />
          <TagButton tagName="button 3" />
          <TagButton tagName="button 4" />
          <TagButton
            tagName="button 5"
            className="syrianFlag"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflagmakers.co.uk%2Fmedia%2Fg0ddkbjp%2F1932-1958_1961-1963.png%3Fanchor%3Dcenter%26mode%3Dcrop%26width%3D1530%26height%3D0%26rnd%3D132439467255100000&f=1&nofb=1&ipt=4f4304b985dc1fe9d6d1e6a6974db437af3eddbec1459153b6b60fff129c4c58"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
