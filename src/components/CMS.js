import React, { useState } from "react";
import axios from "axios";
import CMSP from "./CMS";
const CMSPage = () => {
  const [headingText, setHeadingText] = useState("");

  const handleSave = () => {
    axios
      .post("http://localhost:5000/api/heading", { heading: headingText })  
      .then(() => alert("Heading saved successfully!"))
      .catch((error) => console.error("Error saving heading:", error));
  };

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Edit Heading</h2>
      <input
        type="text"
        value={headingText}
        onChange={(e) => setHeadingText(e.target.value)}
        placeholder="Enter the heading"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />
      <br />
      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save Heading
      </button>
    </div>
  );
};

export default CMSPage;