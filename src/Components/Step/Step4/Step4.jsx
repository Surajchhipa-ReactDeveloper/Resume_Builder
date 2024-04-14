import React, { useState } from "react";
import "../Step1/Step1.css";
import "./Step4.css";
import { Icon } from "../../../Constant/IconPath";
import ExperienceMore from "../../Common/ExperienceMore/ExperienceMore";
import { useEffect } from "react";

const Step4 = ({ BuilderDataHandler4, setFormDataStep4Experience }) => {
  const [experienceData, setExperienceData] = useState([
    {
      id: 1,
      jobProfile: "",
      companyName: "",
      location: "",
      jobDescription: "",
      startYear: "",
      endYear: "",
    },
    {
      id: 2,
      jobProfile: "",
      companyName: "",
      location: "",
      jobDescription: "",
      startYear: "",
      endYear: "",
    },
    {
      id: 3,
      jobProfile: "",
      companyName: "",
      location: "",
      jobDescription: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const currentYear = new Date().getFullYear();
  const startYearOption = 1900;
  const years = Array.from(
    { length: currentYear - startYearOption + 1 },
    (_, index) => startYearOption + index
  );
  const [optionYear, setOptionYear] = useState(years);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [experience, setExperience] = useState([1]);

  const endOnClick = (event) => {
    setHide(!hide);
    const inputValue = event.target.value;
    const newYear = parseInt(inputValue, 10) || 0;
    setSelectedYear(newYear);
  };

  const endOnClick2 = () => {
    setHide2(!hide2);
  };
  const handleExperienceChange = (index, updatedExperience) => {
    const updatedExp = [...experience];
    updatedExp[index] = updatedExperience;
    setExperience(updatedExp);
  };

  const MoreAddExperience = () => {
    if (experience.length < 3) {
      // console.log(experience); // Check the value of experience
      // setExperience((prevExperiences) => [...prevExperiences, {}]);
      setExperience((prevExperiences) => [
        ...prevExperiences,
        { id: prevExperiences.length + 1 },
      ]);
    }
  };

  const removeExperience = (indexToRemove) => {
    if (experience.length > 1) {
      setExperience((prevExperiences) =>
        prevExperiences.filter((_, index) => index !== indexToRemove)
      );
    }
  };
  useEffect(() => {
    setFormDataStep4Experience(experienceData);
  }, [experienceData]);

  console.log(experienceData);
  return (
    <>
      <div className="Step3_Container Step_Main_Common_Container">
        <div className="Step3_Main_Container">
          <div className="Job_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              7. Experience Details
            </h2>
            <div className="Step_Secondary_Input_Container">
              {experience.map((_, index) => (
                <ExperienceMore
                  key={index}
                  index={index}
                  removeExperience={removeExperience}
                  id={index}
                  experience={experienceData}
                  setExperience={setExperienceData}
                  onExperienceChange={handleExperienceChange}
                />
              ))}
            </div>
            {experience.length < 3 && (
              <div
                className="Add_Skill_Button Add_More_Exp"
                onClick={MoreAddExperience}
              >
                <div className="plusIconContainer">
                  <img src={Icon.plusIcon} alt="" className="plusIcon" />
                </div>
                <div className="Add_Skill">Add More Experience</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
