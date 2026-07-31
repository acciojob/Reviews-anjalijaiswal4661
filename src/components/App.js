import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  const handleClick = () => {
    setShowPara(true);
  };

  return (
    <div id="main">
      <p
        id="para"
        className={showPara ? "show" : "hide"}
      >
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>

      <button id="click" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;