import React, { useState } from "react";
import FirstContext from "../components/FirstContext";
import {MyContext}   from "../components/Mycontext";

function App() {
  const color = ["blue", "yellow", "green"];
  const [colors, setColors] = useState("white");

  return (
    <div className="mx-0">
      <MyContext.Provider value={{ color, colors, setColors }}>
        <FirstContext />
      </MyContext.Provider>
    </div>
  );
}

export default App;
