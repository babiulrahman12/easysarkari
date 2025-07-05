import React from "react";
import UploadForm from "./UploadForm";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>Welcome to EasySarkari</h1>
      <p>Your automated job form assistant.</p>
      <UploadForm />
    </div>
  );
}

export default App;
