import React from "react";
import "./NextButton.css";
import { Icon } from "../../../Constant/IconPath";
const NextButton = ({ onClick, ButtonText, nextImg }) => {
  return (
    <>
      <div className="Button_Container" onClick={onClick}>
        <div className="Button_Text">{ButtonText}</div>
        <div className="Button_Icon">
          {nextImg === true ? (
            <img src={Icon.DownArrow2} alt="" className="RightArrow" />
          ) : (
            <img src={Icon.RightArrow} alt="" className="RightArrow" />
          )}
        </div>
      </div>
    </>
  );
};

export default NextButton;
