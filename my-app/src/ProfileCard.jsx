import React from "react";

function ProfileCard({ name, role, avatarUrl }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  const avatarStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  };

  const nameStyle = {
    fontSize: "1.2em",
    fontWeight: "bold",
    margin: "10px 0 5px",
  };

  const roleStyle = {
    color: "gray",
    fontSize: "0.9em",
  };

  const handleClick = () => {
    alert("Hello from " + name);
  };

  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt={name} style={avatarStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={roleStyle}>{role}</div>
      <button
        onClick={handleClick}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Say Hello
      </button>
    </div>
  );
}

export default ProfileCard;
