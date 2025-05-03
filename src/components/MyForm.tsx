import { useState } from "react";

function MyForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    age: 0,
  });

  return (
    <>
      <form
        style={{
          border: "2px solid red",
          marginTop: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formInput);
        }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Email:
          <input
            type="text"
            name="email"
            value={formInput.email}
            onChange={(e) =>
              setFormInput({ ...formInput, email: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Age:
          <input
            type="text"
            name="age"
            value={formInput.age}
            onChange={(e) =>
              setFormInput({ ...formInput, age: Number(e.target.value) })
            }
          />
        </label>
        <button style={{ width: "100px", marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>
      <strong>
        form data:
        {formInput.name} {formInput.email} {formInput.age}
      </strong>
    </>
  );
}

export default MyForm;
