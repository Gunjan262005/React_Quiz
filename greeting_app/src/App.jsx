import React from "react";
import Greeting from "./greeting";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mini Greeting App 💬</h1>
      <Greeting name="Aman" favoriteColor="blue" />
      <Greeting name="Gunjan" favoriteColor="purple" />
      <Greeting name="React" favoriteColor="green" />
    </div>
  );
}

export default App;
