import React, { useState } from "react";
import "./Input.css";
const TextArea = ({
  LabelText,
  Type,
  placeholderText,
  Name,
  required,
  onChange,
  startIcon,
  value,
  endIcon,
  endOnClick,
  error,
  marginTop,
}) => {
  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const [focusedInput, setFocusedInput] = useState();

  const handleInputFocus = () => {
    setFocusedInput(!focusedInput);
  };
  return (
    <>
      <div className="User_Input_Tag_Common">
        <label
          className={`Label LabelMargin ${focusedInput ? "ActiveLabel" : ""}
          
          `}
        >
          {LabelText}
        </label>
        <div
          className={`Input_Img_Get_Box2 ${
            focusedInput ? "Input_Img_Get_Box_focused" : ""
          }  ${error ? "ActiveError" : ""}
          ${marginTop !== false ? "" : "FixedMArgin "}`}
        >
          {startIcon && (
            <img
              src={startIcon}
              alt=""
              className="InputIcon"
              style={{ marginRight: "1.8rem" }}
            />
          )}
          <textarea
            className="TextArea"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={placeholderText}
            required
            onKeyUp={adjustTextareaHeight}
          ></textarea>
          <p className={`ErrorMassage ${!error ? "ActiveErrorMassage" : ""}`}>
            {error}
          </p>

          <div className="Password_Img_Visible">
            {endIcon && (
              <img
                src={endIcon}
                alt=""
                className="InputIcon"
                onClick={endOnClick}
                style={{ marginLeft: "1.5rem" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextArea;


//  const StepHeading = [
//    "Personal Information",
//    "Profile and Skills",
//    "Education Details and Follow Links ",
//  ];