import { title } from "process";
import "./styles/Article.css";

type ArticleProps = {
  title: string;
  name: string;
  email: string;
  year: number;
  content?: string;
};
function Article(props: ArticleProps) {
  return (
    <>
      <div
        className="article"
        style={{
          backgroundColor: "gray",
          boxShadow: "0px 0px 10px 0px black",
        }}
      >
        <h1>{props.title}</h1>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.year}</h3>
        <hr />
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default Article;
