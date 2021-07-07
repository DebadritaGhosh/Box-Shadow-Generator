import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('#000000');
  const [checkOn, setCheckOn] = useState(false);
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={horizontal} onChange={(e) => setHorizontal(e.target.value)} />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={vertical} onChange={(e) => setVertical(e.target.value)} />
        <label>Blur</label>
        <input type="range" min="0" max="200" value={blur} onChange={(e) => setBlur(e.target.value)} />
        <label>Color</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div className="switch">
          <label>
            Outline
            <input type="checkbox" checked={checkOn} onChange={() => setCheckOn(!checkOn)} />
            <span className="lever"></span>
            inset
          </label>
        </div>

      </div>
      <div className="output">
        <div className="box" style={{ boxShadow: `${checkOn ? "inset" : ""} ${horizontal}px ${vertical}px ${blur}px ${color}` }}>
          <p>
            box-shadow: {horizontal}px {vertical}px {blur}px {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
