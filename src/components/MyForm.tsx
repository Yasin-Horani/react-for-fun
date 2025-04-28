function MyForm() {
    return (
      <form
        style={{
          border: "2px solid red",
          marginTop: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px" 
        }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Name:
          <input type="text" name="name" />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Email:
          <input type="email" name="email" />
        </label>
        <button style={{ width: "100px", marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>
    );
  }
  
  export default MyForm;
  