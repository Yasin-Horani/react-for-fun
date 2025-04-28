import { useState } from "react";

function MyInput() {
  const [myInputValue, setMyInputValue] = useState<string>("");

  function handleInputChange(event: { target: any }) {
    setMyInputValue(event.target.value);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <label>Your name</label>

      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Enter your name"
      />
      <br />
      <strong>{myInputValue}</strong>
    </div>
  );
}
export default MyInput;
