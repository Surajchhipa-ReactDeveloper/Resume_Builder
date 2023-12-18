import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { Icon } from "../../../Constant/IconPath";
import DropDown from "../DropDown/Drop";
import TextArea from "../Input/TextArea";

const ExperienceMore = ({
  index,
  removeExperience,
  id,
  experience,
  setExperience,
  onExperienceChange,
}) => {
  const initialExperience = experience[index] || [
    {
      jobProfile: "",
      companyName: "",
      location: "",
      jobDescription: "",
      startYear: "",
      endYear: "",
    },
  ];

  const [experienceData, setExperienceMore] = useState([initialExperience]);
  const [hide, setHide] = useState(false);

  // console.log(experienceData);
  const [hideStartYearOptions, setHideStartYearOptions] = useState(true);
  const [hideEndYearOptions, setHideEndYearOptions] = useState(true);

  const handleStartYearSelection = (year) => {
    setExperienceMore({ ...experienceData, startYear: year });
    setHideStartYearOptions(true);
  };
  const handleEndYearSelection = (year) => {
    setExperienceMore({ ...experienceData, endYear: year });
    setHideEndYearOptions(true);
  };

  const currentYear = new Date().getFullYear();
  const startYearOption = 1900;
  const years = Array.from(
    { length: currentYear - startYearOption + 1 },
    (_, index) => startYearOption + index
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [optionYear, setOptionYear] = useState(years);
  const [educations, setEducations] = useState(1);

  useEffect(() => {
    const updatedExperience = [...experience];
    updatedExperience[index] = experienceData;
    setExperience(updatedExperience);
  }, [experienceData, index, setExperience]);

  const handleExperienceDataChange = (key, value) => {
    setExperienceMore((prevData) => {
      const newData = { ...prevData };
      newData[key] = value;
      return newData;
    });
  };
  // console.log(experienceData);
  return (
    <>
      <div key={index} className="Step_Secondary_Input_Container">
        <div className="Common_Counter_Counter">
          <h6 className="Degree_Container">Experience No.{index + 1}</h6>
          {index > 0 && index <= 3 && (
            <div
              className="Cross_Icon_Container"
              onClick={() => removeExperience(index)}
            >
              <img src={Icon.CrossIcon} alt="" className="CrossIcon" />
            </div>
          )}
        </div>
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            // error={formErrors.jobProfile}
            LabelText={"Job Profile "}
            Type={"text"}
            Name={"jobProfile"}
            placeholderText={"Like Designer, HR, Web Developer, etc."}
            value={ExperienceMore.jobProfile}
            onChange={(e) => {
              handleExperienceDataChange("jobProfile", e.target.value);
            }}

            // endIcon={formErrors.jobProfile !== "" ? Icon.ErrorInput_Logo : ""}
          />
        </div>
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            // error={formErrors.companyName}
            LabelText={"Company Name"}
            Type={"text"}
            Name={"companyName"}
            placeholderText={"Like Google, Amazon, TCS, etc."}
            value={ExperienceMore.companyName}
            onChange={(e) => {
              handleExperienceDataChange("companyName", e.target.value);
            }}
            // endIcon={formErrors.companyName !== "" ? Icon.ErrorInput_Logo : ""}
          />
        </div>
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            // error={formErrors.location}
            LabelText={"Enter location"}
            Type={"text"}
            Name={"location"}
            placeholderText={"Enter location"}
            value={ExperienceMore.location}
            onChange={(e) => {
              handleExperienceDataChange("location", e.target.value);
            }}
            // endIcon={formErrors.location !== "" ? Icon.ErrorInput_Logo : ""}
          />
        </div>
        <div className="Step_Input_Container Common_Step_Input_Container">
          <div className="Contact_Details_Item Common_Contact_Details_Item Date_Container">
            <DropDown
              LabelText={"Starting Year"}
              Value={ExperienceMore.startYear}
              onSelectYear={handleStartYearSelection}
              hideOptions={hideStartYearOptions}
              toggleOptions={() =>
                setHideStartYearOptions(!hideStartYearOptions)
              }
              years={years}
              onChange={(e) => {
                setHideEndYearOptions(e.target.value);
              }}
            />
          </div>
          <div className="Contact_Details_Item Common_Contact_Details_Item Date_Container">
            <DropDown
              LabelText={"Ending Year"}
              Value={ExperienceMore.endYear}
              onSelectYear={handleEndYearSelection}
              hideOptions={hideEndYearOptions}
              toggleOptions={() => setHideEndYearOptions(!hideEndYearOptions)}
              years={years}
              onChange={(e) => {
                setHideEndYearOptions(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="Job_Details_Item">
          <TextArea
            marginTop={false}
            LabelText={"Description"}
            Type={"text"}
            Name={"jobDescription"}
            value={ExperienceMore.jobDescription}
            placeholderText={
              "Enter your short job description about your role in company"
            }
            onChange={(e) =>
              handleExperienceDataChange("jobDescription", e.target.value)
            }
          />
        </div>
      </div>
    </>
  );
};

export default ExperienceMore;
