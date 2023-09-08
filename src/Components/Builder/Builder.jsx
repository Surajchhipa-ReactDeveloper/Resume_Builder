import React, { useState } from "react";
import "./Builder.css";
import { Icon } from "../../Constant/IconPath";
import NextButton from "../Common/NextButton/NextButton";
import BackButton from "../Common/BackButton/BackButton";
import { Images } from "../../Constant/ImgPath";
import Step1 from "../Step/Step1/Step1";
import Step2 from "../Step/Step2/Step2";
import Step3 from "../Step/Step3/Step3";
import Step4 from "../Step/Step4/Step4";

const Builder = () => {
  const StepHeading = [
    "Personal Information",
    "Profile and Skills",
    "Education Details and Follow Links",
    "Experiences",
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    if (currentStep < StepHeading.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="Builder_Container">
        <div className="Builder_Left_Container ">
          <div className="Builder_Top_Container">
            <div className="Builder_Main_Logo">
              <img src={Icon.MainLogo} alt="" className="BuilderMainLogo" />
            </div>
          </div>
          <div className="Builder_Step_Heading_Container">
            <span className="Builder_Step_Heading">Step {currentStep}</span> -
            {StepHeading[currentStep - 1]}
          </div>
          <div className="Builder_Mid_Container ">
            {currentStep === 1 ? <Step1 /> : null}
            {currentStep === 2 ? <Step2 /> : null}
            {currentStep === 3 ? <Step3 /> : null}
            {currentStep === 4 ? <Step4 /> : null}
          </div>
          <div className="Builder_Bottom_Container ">
            <div className="Builder_Back_Button">
              <BackButton
                onClick={handleBackClick}
                ButtonText={
                  currentStep === 1
                    ? "Home"
                    : "" || currentStep === 2
                    ? "Personal Information"
                    : "" || currentStep === 3
                    ? "Profile and Skills"
                    : "" || currentStep === 4
                    ? "Education and Follow Links"
                    : ""
                }
              />
            </div>
            <div className="Builder_Next_Button">
              <NextButton
                onClick={handleNextClick}
                ButtonText={
                  currentStep === 1
                    ? "Go To Step 2"
                    : "" || currentStep === 2
                    ? "Go To Step 3"
                    : "" || currentStep === 3
                    ? "Go To Step 4"
                    : "" || currentStep === 4
                    ? "Preview"
                    : ""
                }
              />
            </div>
          </div>
        </div>
        <div className="Builder_Right_Container ">
          <h3 className="Builder_Img_Counter">Step {currentStep} Out of 4</h3>
          <img
            src={
              currentStep === 1
                ? Images.Step1
                : "" || currentStep === 2
                ? Images.Step2
                : "" || currentStep === 3
                ? Images.Step3
                : "" || currentStep === 4
                ? Images.Step4
                : ""
            }
            alt=""
            className="StepImg"
          />
        </div>
      </div>
    </>
  );
};

export default Builder;
