import { useState } from "react";

function MyButton() {
  const [name, setName] = useState("Justin");

  function handleClick() {
    setName("Yasin"); 
    if (name === "Yasin") {
      setName("Justin");
    }
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <strong>{name}</strong>
    </>
  );
}

export default MyButton;
