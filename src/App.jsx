import React, { useState } from "react";

function App() {
  const colors = ["red", "yellow", "aqua", "purple"];

  const [activeColor, setActiveColor] = useState(null);

  const handleClick = (color) => {
    if (activeColor === color) {
      setActiveColor(null);
    } else {
      setActiveColor(color);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>Current color: {activeColor ? activeColor : "none"}</h3>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleClick(color)}
            style={{
              backgroundColor: activeColor ? activeColor : color,
              width: "100px",
              height: "60px",
              margin: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
