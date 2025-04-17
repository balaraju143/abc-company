import React, { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/heading") 
      .then((response) => setHeading(response.data.heading))
      .catch((error) => console.error("Error fetching the heading:", error));
  }, []);

  return (
    <header style={{ textAlign: "center", padding: "50px 0", backgroundColor: "#f4f4f4" }}>
      <h1>{heading || "Loading..."}</h1>
    </header>
  );
};

export default Header;
