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
  const [text, setText] = useState(""); // Initialize text state
  const maxWords = 250; // Set the maximum word limit

  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const [focusedInput, setFocusedInput] = useState();

  const handleInputFocus = () => {
    setFocusedInput(!focusedInput);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    // Split the text by spaces to count words
    const wordCount = newText.trim().split(/\s+/).length;

    if (wordCount <= maxWords) {
      setText(newText);
    }
    if (onChange) {
      onChange(e); // Call the parent component's onChange function
    }
  };

  return (
    <>
      <div className="User_Input_Tag_Common">
        <label
          className={`Label LabelMargin ${focusedInput ? "ActiveLabel" : ""}`}
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
            value={value}
            onChange={handleTextChange} // Handlek text changes
          ></textarea>
          <p className={`ErrorMassage ${!error ? "ActiveErrorMassage" : ""}`}>
            {error}
          </p>

          <div className="Password_Img_Visible">
            {/* {endIcon && (
              <img
                src={endIcon}
                alt=""
                className="InputIcon"
                onClick={endOnClick}
                style={{ marginLeft: "1.5rem" }}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextArea;
