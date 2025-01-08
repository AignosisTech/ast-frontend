import React from "react";

const Error = () => {
  const errorStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1e0a2d", // Light red background
    color: "#f1f1f1", // Dark red text
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const errorTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const errorMessageStyle = {
    fontSize: "1.2rem",
  };

  return (
    <div style={errorStyle}>
      <div style={errorTitleStyle}>ERROR</div>
      <div style={errorMessageStyle}>Some Problem Occurred</div>
    </div>
  );
};

export default Error;
