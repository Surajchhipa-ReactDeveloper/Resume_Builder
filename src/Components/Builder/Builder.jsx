import React, { useEffect, useState } from "react";
import "./Builder.css";
import { Icon } from "../../Constant/IconPath";
import NextButton from "../Common/NextButton/NextButton";
import BackButton from "../Common/BackButton/BackButton";
import { Images } from "../../Constant/ImgPath";
import Step1 from "../Step/Step1/Step1";
import Step2 from "../Step/Step2/Step2";
import Step3 from "../Step/Step3/Step3";
import Step4 from "../Step/Step4/Step4";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../Redux/Slice/Form1Slice";
import { Step2Data } from "../../Redux/Slice/Form2Slice";
import { Step3Data } from "../../Redux/Slice/Form3Slice";
import { Step3DataEducation } from "../../Redux/Slice/Form3SliceEducation";
import Step3Clone from "../Step/Step3/Step3Clone";
import Result from "../Output/Result";
import Step5 from "../Step/Step5/Step5";

const Builder = () => {
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();
  const dispatch3 = useDispatch();
  const dispatchEducation3 = useDispatch();
  const dispatch4 = useDispatch();
  const dispatchExperience = useDispatch();

  const [formDataStep1, setFormDataStep1] = useState({});
  const [formDataStep2, setFormDataStep2] = useState({});
  const [formDataStep3, setFormDataStep3] = useState({});
  const [formDataStep3Education, setFormDataStep3Education] = useState({});
  const [formDataStep4, setFormDataStep4] = useState();
  const [call1, setCall1] = useState(false);

  console.log(formDataStep3Education);

  const BuilderDataHandler = (data) => {
    setFormDataStep1(data);
    // setFormDataStep2(data);
  };

  const BuilderDataHandler2 = (data) => {
    setFormDataStep2(data);
  };

  const BuilderDataHandler3 = (data) => {
    setFormDataStep3(data);
    setFormDataStep3Education(data);
  };
  const BuilderDataHandler4 = (data) => {
    setFormDataStep4(data);
  };

  const StepHeading = [
    "Personal Information",
    "Profile and Skills",
    "Education and Follow Links",
    "Experiences",
  ];

  // Get the current step from localStorage or default to 1
  const [currentStep, setCurrentStep] = useState(
    parseInt(localStorage.getItem("currentStep"))
  );

  // Update localStorage when currentStep changes
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

  const handleNextClick = () => {
    if (currentStep < StepHeading.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  // const reSubmitForm = () => {
  //   setCurrentStep(ReSubmitForm);
  // };

  // useEffect(() => {
  //   reSubmitForm();
  // }, [currentStep]);

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      window.location.href = "/";
    }
  };

  const inputContentHandler = () => {
    setCall1(!true);
  };

  const form1 = useSelector((state) => state.Form1.formSlice1);
  console.log(form1);
  const form2 = useSelector((state) => state.Form2.formSlice2);
  console.log(form2);
  const form3 = useSelector((state) => state.Form3.formSlice3);
  console.log(form3);
  const formEducat = useSelector(
    (state) => state.FormEducation.formEducationSlice3
  );
  console.log(formEducat);

  // const form7 = useSelector((state) => state.FormEducation.formDataEducation3);
  // // const form4 = useSelector((state) => state.Form4.formSlice4);
  // console.log(form7);

  const [formCompleted, setFormCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleFormCompletion = () => {
    setFormCompleted(true);
  };

  const handlePreviewClick = () => {
    setShowResult(true);
  };

  return (
    <>
      {formCompleted ? (
        <Step5 />
      ) : (
        <div className="Builder_Container">
          <div className="Builder_Left_Container ">
            <div className="Builder_Top_Container">
              <div className="Builder_Main_Logo">
                <img
                  src={Icon.LogoPrimer2}
                  alt=""
                  className="BuilderMainLogo"
                />
              </div>
            </div>
            <div className="Builder_Step_Heading_Container">
              <span className="Builder_Step_Heading">Step {currentStep}</span> -
              {StepHeading[currentStep - 1]}
            </div>
            <div className="Builder_Mid_Container ">
              {currentStep === 1 ? (
                <Step1 BuilderDataHandler={BuilderDataHandler} />
              ) : null}
              {currentStep === 2 ? (
                <Step2 BuilderDataHandler2={BuilderDataHandler2} />
              ) : null}
              {currentStep === 3 ? (
                <Step3Clone
                  BuilderDataHandler3={BuilderDataHandler3}
                  setFormDataStep3Education={setFormDataStep3Education}
                />
              ) : null}
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
                {currentStep !== 5 && (
                  <NextButton
                    dispatch1
                    onClick={() => {
                      handleNextClick();
                      dispatch1(updateFormData(formDataStep1));
                      dispatch2(Step2Data(formDataStep2));
                      dispatch3(Step3Data(formDataStep3));
                      dispatchEducation3(
                        Step3DataEducation(formDataStep3Education)
                      );
                      if (currentStep === 4) {
                        handleFormCompletion();
                        handlePreviewClick();
                      }
                    }}
                    ButtonText={
                      currentStep === 1
                        ? "Go To Step 2"
                        : currentStep === 2
                        ? "Go To Step 3"
                        : currentStep === 3
                        ? "Go To Step 4"
                        : currentStep === 4
                        ? "Preview"
                        : ""
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <div className="Builder_Right_Container ">
            <h3 className="Builder_Img_Counter">Step {currentStep} Out of 4</h3>
            <img
              className="StepImg"
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
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Builder;
