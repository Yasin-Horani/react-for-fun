import { title } from "process"; // <- this import is probably unnecessary
import "./styles/Article.css";

type ArticleProps = {
  title: string;
  name: string;
  email: string;
  year: number;
  content?: string;
};

function Article(props: ArticleProps) {
  const { title, name, email, year, content = "No Content" } = props;

  return (
    <>
      {content == null || content === "No Content" ? (
        <div
          style={{
            backgroundColor: "darkgray",
            boxShadow: "0px 0px 10px 0px black",
          }}
          className="article no-content"
        >
          No Content
        </div>
      ) : (
        <div
          className="article"
          style={{
            backgroundColor: "gray",
            boxShadow: "0px 0px 10px 0px black",
          }}
        >
          <h1>{title}</h1>
          <h3>{name}</h3>
          <h3>{email}</h3>
          <h3>{year}</h3>
          <hr />
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default Article;
