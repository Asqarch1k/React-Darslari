import React, { useContext } from "react";
import { useState } from "react";
import { MyContext } from "./Mycontext";
import '../src/App.css'

function FirstContext() {
  const { color, colors, setColors } = useContext(MyContext);
  const toggleText = () => {
    setTextVisible(!isTextVisible);
  };

  const onChange = (e) => {
    setColors(e.target.innerText);
  };

  const [isTextVisible, setTextVisible] = useState(false);
  return (
    <div>
      <button onClick={toggleText}>{!isTextVisible ? "Open" : "Close"}</button>

      {isTextVisible && (
        <div >
          <div style={{ background: colors }} className="boxs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            laboriosam deleniti fugit tempora iste minus in pariatur ut quis
            modi illum, quas adipisci eligendi inventore.
          </div>
          <div className="buttons">
            {color.map((e, index) => {
              return (
                <div key={index}>
                  <button onClick={onChange} className="btn">
                    {e}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstContext;
