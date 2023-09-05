import React from "react";
import "./NextButton.css";
import { Icon } from "../../../Constant/IconPath";
const NextButton = ({ onClick, ButtonText }) => {
  return (
    <>
      <div className="Button_Container" onClick={onClick}>
        <div className="Button_Text">{ButtonText}</div>
        <div className="Button_Icon">
          <img src={Icon.RightArrow} alt="" className="RightArrow" />
        </div>
      </div>
    </>
  );
};

export default NextButton;
