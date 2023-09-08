import React, { useState } from "react";
import "./Input.css";
const Input = ({
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
          className={`Input_Img_Get_Box ${
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
          <input
            className={`Input`}
            required={required}
            type={Type}
            name={Name}
            placeholder={placeholderText}
            onChange={onChange}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
            value={value}
            // autoComplete="none"
          />
          <p className={`ErrorMassage ${!error ? "ActiveErrorMassage" : ""}`}>
            {error}
          </p>

          <div className="Password_Img_Visible">
            {endIcon && (
              <img
                src={endIcon}
                alt=""
                className="InputEndIcon"
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

export default Input;
