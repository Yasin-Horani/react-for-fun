import "./styles/Article.css";
function Article() {
  return (
    <>
      <div
        className="article"
        style={{
          backgroundColor: "gray",
          boxShadow: "0px 0px 10px 0px black",
        }}
      >
        <h1>Article</h1>  
        <h3>Yasin</h3>
        <h3>Yasin@gmail.com</h3>
        <h3>1996</h3>
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          pariatur qui doloribus animi.
        </p>
      </div>
    </>
  );
}

export default Article;
