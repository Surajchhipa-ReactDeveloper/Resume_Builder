import React from "react";
import "./Input.css";
const Input2 = ({placeholder}) => {
  return (
    <div className="Input_Tag_Container">
      <div className="InputTag_Get_Input_Box">
        <input type="text" placeholder={placeholder} className="Input" />
      </div>
    </div>
  );
};

export default Input2;
