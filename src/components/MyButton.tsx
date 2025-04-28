import { useState } from "react";

function MyButton() {
  const [name, setName] = useState("El-SooN..");
  function handleClick() {
    setName("El-SooN.. is the best!");
    if (name === "El-SooN.. is the best!") {
      setName("El-SooN..");
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
