import React from "react";
import "../Step1/Step1.css";
// import "./Step3.css";
import "./Step4.css";
import { useState } from "react";
import { Icon } from "../../../Constant/IconPath";
import Input from "../../Common/Input/Input";
import TextArea from "../../Common/Input/TextArea";
// import Education from "../../Common/Education/Education";
const Step4 = () => {
  // ************* NORMAL INPUT STATE START**************

  const [jobProfile, setJobProfile] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  // ************* NORMAL INPUT STATE  END**************

  // ************* ERROR STATE START**************
  const [jobProfileError, setJobProfileError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [jobDescriptionError, setJobDescriptionError] = useState("");
  const [errorStartYear, setErrorStartYear] = useState("");
  const [errorEndYear, setErrorEndYear] = useState("");

  //

  //

  // ************* ERROR STATE END**************

  // ******************* NORMAL STATE START ************

  const [now, setNow] = useState([]);
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [experience, setExperience] = useState(0);
  const [experiences, setExperiences] = useState([1]);

  // ******************* NORMAL STATE END ************

  // *************************
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const StartYear = currentYear - 100;
  const EndYear = currentYear + 10;

  const years = Array.from(
    { length: StartYear + EndYear + 1 },
    (_, index) => selectedYear + index
  );

  // *************************

  const endOnClick = (event) => {
    setHide(!hide);
    const inputValue = event.target.value;
    const newYear = parseInt(inputValue, 10) || 0;
    setSelectedYear(newYear);
    console.log(selectedYear);
    console.log("Selected Year (Start Year):", newYear);
  };

  const endOnClick2 = () => {
    setHide2(!hide2);
    console.log("Selected Start Year:", selectedYear);
    console.log("Selected End Year:", endYear);
  };

  const MoreAddEducation = () => {
    if (experience < 3) {
      setExperiences((prevEducations) => [...prevEducations, {}]);
      setExperience(experience + 1);
    }
  };
  const ExperienceComponents = experiences.map((educationEntry, index) => (
    <div key={index} className="Step_Secondary_Input_Container">
      {/* <h6>Degree {educations}</h6> */}

      <div className="Job_Details_Item">
        <Input
          marginTop={false}
          error={jobProfileError}
          LabelText={"Job Profile "}
          Type={"text"}
          Name={"Title"}
          placeholderText={"Like Designer, HR, Web Developer, etc."}
          value={jobProfile}
          onChange={(e) => {
            setJobProfile(e.target.value);
          }}
          endIcon={jobProfileError !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      <div className="Job_Details_Item">
        <Input
          marginTop={false}
          error={companyNameError}
          LabelText={"Company Name"}
          Type={"text"}
          Name={"Title"}
          placeholderText={"Like Google, Amazon, TCS, etc."}
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          endIcon={companyNameError !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      <div className="Job_Details_Item">
        <Input
          marginTop={false}
          error={locationError}
          LabelText={"Enter location"}
          Type={"text"}
          Name={"Title"}
          placeholderText={"Enter location"}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          endIcon={locationError !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      {/* ************* */}

      {/* ************* */}

      <div className="Step_Input_Container Common_Step_Input_Container">
        <div className="Contact_Details_Item Common_Contact_Details_Item">
          <Input
            marginTop={true}
            // error={title}
            LabelText={"Starting Year"}
            Type={"number"}
            Name={"EYear"}
            placeholderText={"Select"}
            value={startYear}
            onChange={(e) => {
              setStartYear(e.target.value);
            }}
            endIcon={
              errorStartYear === ""
                ? hide
                  ? Icon.UpArrow
                  : Icon.DownArrow
                : Icon.ErrorInput_Logo
            }
            endOnClick={endOnClick}
          />
        </div>
        <div className="Contact_Details_Item Common_Contact_Details_Item">
          <Input
            marginTop={true}
            // error={title}
            LabelText={"Ending Year"}
            Type={"number"}
            Name={"EYear"}
            placeholderText={"Select"}
            value={endYear}
            onChange={(e) => {
              setEndYear(e.target.value);
            }}
            endIcon={
              errorEndYear === ""
                ? hide2
                  ? Icon.UpArrow
                  : Icon.DownArrow
                : Icon.ErrorInput_Logo
            }
            endOnClick={endOnClick2}
            min={1900}
            max={new Date().getFullYear() + 10}
          />
        </div>
      </div>
      <div className="Job_Details_Item">
        <TextArea
          marginTop={false}
          LabelText={"Description"}
          Type={"text"}
          Name={"Description"}
          value={jobDescription}
          placeholderText={
            "Enter your short job description about your role in company"
          }
          onChange={(e) => {
            setJobDescription(e.target.value);
          }}
        />
      </div>
    </div>
  ));

  return (
    <>
      <div className="Step3_Container Step_Main_Common_Container">
        <div className="Step3_Main_Container">
          <div className="Job_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              7. Experience Details
            </h2>
            <div className="Step_Secondary_Input_Container">
              {ExperienceComponents.length > 0 ? (
                <div className="Step_Skill_Input_Container Step_Input_Container">
                  <div className="Skill_Details_Item">
                    {ExperienceComponents}
                  </div>
                </div>
              ) : (
                <p>No education added yet.</p>
              )}
            </div>
            {experience < 3 && (
              <div
                className="Add_Skill_Button Add_More_Exp"
                onClick={MoreAddEducation}
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
