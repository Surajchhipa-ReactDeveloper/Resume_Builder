import React, { useState } from "react";
import "../Step1/Step1.css";
import "./Step4.css";
import { Icon } from "../../../Constant/IconPath";
import Input from "../../Common/Input/Input";
import TextArea from "../../Common/Input/TextArea";

const Step4 = () => {
  const [formData4, setFormData4] = useState({
    jobProfile: "",
    companyName: "",
    location: "",
    jobDescription: "",
    startYear: "",
    endYear: "",
  });

  const [formErrors, setFormErrors] = useState({
    jobProfile: "",
    companyName: "",
    location: "",
    jobDescription: "",
    startYear: "",
    endYear: "",
  });

  console.log(formData4);

  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [experience, setExperience] = useState(0);
  const [experiences, setExperiences] = useState([1]);

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const years = Array.from(
    { length: currentYear - 100 },
    (_, index) => currentYear + index
  );

  const endOnClick = (event) => {
    setHide(!hide);
    const inputValue = event.target.value;
    const newYear = parseInt(inputValue, 10) || 0;
    setSelectedYear(newYear);
  };

  const endOnClick2 = () => {
    setHide2(!hide2);
  };

  // Function to remove an education container by index
  // const removeEducationContainer = (indexToRemove) => {
  //   if (experiences.length > 1) {
  //     setExperience((prevExperiences) =>
  //       prevExperiences.filter((_, index) => index !== indexToRemove)
  //     );
  //   }
  // };

  const MoreAddExperience = () => {
    if (experience < 3) {
      console.log(experience); // Check the value of experience
      setExperiences((prevExperiences) => [...prevExperiences, {}]);
      setExperience(experience + 1);
    }
  };

  const ExperienceComponents = experiences.map((experienceEntry, index) => (
    <div key={index} className="Step_Secondary_Input_Container">
      <div className="Common_Counter_Counter">
        <h6 className="Degree_Container">Experience No.{index + 1}</h6>
        {index > 0 && index <= 3 && (
          <div
            className="Cross_Icon_Container"
            // onClick={() => removeEducationContainer(index)}
          >
            <img src={Icon.CrossIcon} alt="" className="CrossIcon" />
          </div>
        )}
      </div>
      <div className="Job_Details_Item">
        <Input
          marginTop={false}
          error={formErrors.jobProfile}
          LabelText={"Job Profile "}
          Type={"text"}
          Name={"jobProfile"}
          placeholderText={"Like Designer, HR, Web Developer, etc."}
          value={formData4.jobProfile}
          onChange={(e) =>
            setFormData4({ ...formData4, jobProfile: e.target.value })
          }
          endIcon={formErrors.jobProfile !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      <div className="Job_Details_Item">
        <Input
          marginTop={false}
          error={formErrors.companyName}
          LabelText={"Company Name"}
          Type={"text"}
          Name={"companyName"}
          placeholderText={"Like Google, Amazon, TCS, etc."}
          value={formData4.companyName}
          onChange={(e) =>
            setFormData4({ ...formData4, companyName: e.target.value })
          }
          endIcon={formErrors.companyName !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      <div className="Job_Details_Item">
        <Input
          marginTop={false}
          error={formErrors.location}
          LabelText={"Enter location"}
          Type={"text"}
          Name={"location"}
          placeholderText={"Enter location"}
          value={formData4.location}
          onChange={(e) =>
            setFormData4({ ...formData4, location: e.target.value })
          }
          endIcon={formErrors.location !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      <div className="Step_Input_Container Common_Step_Input_Container">
        <div className="Contact_Details_Item Common_Contact_Details_Item">
          <Input
            marginTop={true}
            LabelText={"Starting Year"}
            Type={"number"}
            Name={"startYear"}
            placeholderText={"Select"}
            value={formData4.startYear}
            onChange={(e) =>
              setFormData4({ ...formData4, startYear: e.target.value })
            }
            endIcon={
              formErrors.startYear === ""
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
            LabelText={"Ending Year"}
            Type={"number"}
            Name={"endYear"}
            placeholderText={"Select"}
            value={formData4.endYear}
            onChange={(e) =>
              setFormData4({ ...formData4, endYear: e.target.value })
            }
            endIcon={
              formErrors.endYear === ""
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
          Name={"jobDescription"}
          value={formData4.jobDescription}
          placeholderText={
            "Enter your short job description about your role in company"
          }
          onChange={(e) =>
            setFormData4({ ...formData4, jobDescription: e.target.value })
          }
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
