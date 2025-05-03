import { useState } from "react";

function MyForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    age: 0,
    generalInfo: "",
    isAdult: false,
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
        <label style={{ display: "flex", flexDirection: "column" }}>
          General Info:
          <textarea
            name="generalInfo"
            value={formInput.generalInfo}
            onChange={(e) =>
              setFormInput({ ...formInput, generalInfo: e.target.value })
            }
          ></textarea>
        </label>
        <hr />
        <label style={{ display: "flex", flexDirection: "column" }}>
          are you 18 or older?
          <input
            type="checkbox"
            name="adultCheck"
            checked={formInput.isAdult}
            onChange={(e) =>
              setFormInput({ ...formInput, isAdult: e.target.checked }) // checked is a boolean
            }
          />
        </label>

        <button style={{ width: "100px", marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default MyForm;
