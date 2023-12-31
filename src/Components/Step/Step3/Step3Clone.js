import React, { useEffect } from "react";
import "../Step1/Step1.css";
import "./Step3.css";
import { useState } from "react";
import { Icon } from "../../../Constant/IconPath";
import Input from "../../Common/Input/Input";
import DropDown from "../../Common/DropDown/Drop";
import EducationMore from "../../Common/EducationMore/EducationMore";

const Step3Clone = ({ BuilderDataHandler3, setFormDataStep3Education }) => {
  // ************* NORMAL INPUT STATE START**************

  const [formData3, setFormData3] = useState({
    facebook: "",
    instagram: "",
    linkedIn: "",
    behance: "",
    portfolio: "",
  });

  const [educationMoreData, setEducationMoreData] = useState([
    // { id: 1, course: "", institute: "", startYear: "", endYear: "" },
    // { id: 2, course: "", institute: "", startYear: "", endYear: "" },
    // { id: 3, course: "", institute: "", startYear: "", endYear: "" },
  ]);

  // Function to create a new education container with initial state

  // ************* NORMAL INPUT STATE  END**************

  // ************* ERROR STATE START**************
  const [formErrors3, setFormErrors3] = useState({
    course: "",
    institute: "",
    portfolio: "",
    linkedIn: "",
    instagram: "",
    facebook: "",
    behance: "",
  });

  // ************* ERROR STATE END**************

  // ******************* NORMAL STATE START ************

  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [educations, setEducations] = useState([1]);
  const [ArrayEducation, setArrayEducation] = useState({ educations });

  // ******************* NORMAL STATE END ************

  // Function to remove an education container by index
  const removeEducationContainer = (indexToRemove) => {
    if (educations.length > 1) {
      setEducations((prevEducations) =>
        prevEducations.filter((_, index) => index !== indexToRemove)
      );
    }
  };
  // console.log();

  const MoreAddEducation = () => {
    if (educations.length < 3) {
      setEducations((prevEducations) => [
        ...prevEducations,
        { id: prevEducations.length + 1 },
      ]);
    }
  };
  // const handleExperienceChange = (index, updatedEducation) => {
  //   const updatedEdu = [...educations];
  //   updatedEdu[index] = updatedEducation;
  //   setEducations(updatedEdu);
  // };
  const handleExperienceChange = (index, updatedEducation) => {
    const updatedEdu = [...educationMoreData]; // Ensure educationMoreData is an array
    updatedEdu[index] = updatedEducation;
    setEducationMoreData(updatedEdu);
  };

  useEffect(() => {
    BuilderDataHandler3(formData3);
    setFormDataStep3Education(educationMoreData);
  }, [formData3, educationMoreData]);

  console.log(educationMoreData);
  return (
    <>
      <div className="Step3_Container Step_Main_Common_Container">
        <div className="Step3_Main_Container">
          <div className="Job_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              5. Education Details
            </h2>
            <div className="Step_Secondary_Input_Container">
              {educations.map((_, index) => (
                <EducationMore
                  key={index}
                  index={index}
                  removeEducationContainer={removeEducationContainer}
                  id={index}
                  education={educationMoreData}
                  setEducation={setEducationMoreData}
                  onEducationChange={handleExperienceChange}
                />
              ))}
            </div>
            {educations.length < 3 && (
              <div className="Add_Skill_Button" onClick={MoreAddEducation}>
                <div className="plusIconContainer">
                  <img src={Icon.plusIcon} alt="" className="plusIcon" />
                </div>
                <div className="Add_Skill">Add More Education</div>
              </div>
            )}
          </div>
          <div className="Contact_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              6. Follow Links
            </h2>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={formErrors3.facebook}
                  LabelText={"Facebook"}
                  Type={"text"}
                  Name={"facebook"}
                  placeholderText={"Enter your Username"}
                  value={formData3.facebook}
                  onChange={(e) => {
                    setFormData3((prevData) => ({
                      ...prevData,
                      facebook: e.target.value,
                    }));
                  }}
                  endIcon={
                    formErrors3.facebook !== "" ? Icon.ErrorInput_Logo : ""
                  }
                />
              </div>
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={formErrors3.instagram}
                  LabelText={"Email"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter Your Username"}
                  value={formData3.instagram}
                  onChange={(e) => {
                    setFormData3((prevData) => ({
                      ...prevData,
                      instagram: e.target.value,
                    }));
                  }}
                  endIcon={
                    formErrors3.instagram !== "" ? Icon.ErrorInput_Logo : ""
                  }
                />
              </div>
            </div>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={formErrors3.linkedIn}
                  LabelText={"LinkedIn"}
                  Type={"text"}
                  Name={"LinkedIn"}
                  placeholderText={"Enter Your Username"}
                  value={formData3.linkedIn}
                  onChange={(e) => {
                    setFormData3((prevData) => ({
                      ...prevData,
                      linkedIn: e.target.value,
                    }));
                  }}
                  endIcon={
                    formErrors3.linkedIn !== "" ? Icon.ErrorInput_Logo : ""
                  }
                />
              </div>
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  // error={formErrors3.portfolio}
                  LabelText={"Behance"}
                  Type={"text"}
                  Name={"Behance"}
                  placeholderText={"Enter your Username"}
                  value={formData3.behance}
                  onChange={(e) => {
                    setFormData3((prevData) => ({
                      ...prevData,
                      behance: e.target.value,
                    }));
                  }}
                  // endIcon={
                  //   formErrors3.portfolio !== "" ? Icon.ErrorInput_Logo : ""
                  // }
                />
              </div>
            </div>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  LabelText={"Portfolio"}
                  Type={"text"}
                  Name={"Portfolio"}
                  placeholderText={"Enter your Username"}
                  value={formData3.portfolio}
                  onChange={(e) => {
                    setFormData3((prevData) => ({
                      ...prevData,
                      portfolio: e.target.value,
                    }));
                  }}
                  // endIcon={portfolioError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Step3Clone;
