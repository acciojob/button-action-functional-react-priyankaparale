import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [display, setdisplay] = useState(false);
  
  
  return (
    <div id="main">
      <button id="click" onClick={setdisplay(true)}> </button>
      {(display===false)?(null) :(<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>) }
    </div>
  );
}


export default App;
