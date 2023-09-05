import React from "react";
import "./BackButton.css";
import { Icon } from "../../../Constant/IconPath";

const BackButton = ({ onClick, ButtonText }) => {
  return (
    <>
      <div className="Back_Button_Container" onClick={onClick}>
        <div className="Button_Icon_Container">
          <img
            src={Icon.BackArrow}
            alt=""
            className="BackArrowIcon RightArrow"
          />
        </div>
        <div className="BackButtonText">
          <span className="BackButtonLightText">Back to </span>
          {ButtonText}
        </div>
      </div>
    </>
  );
};

export default BackButton;
