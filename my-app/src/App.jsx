import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Profile Cards</h1>

      <ProfileCard
        name="Gunjan Jain"
        role="React Developer"
        avatarUrl="https://i.pravatar.cc/150?img=5"
      />
    </div>
  );
}

export default App;
