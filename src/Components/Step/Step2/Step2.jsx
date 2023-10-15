import React, { useState } from "react";
import "../Step1/Step1.css";
import "./Step2.css";
import Input from "../../Common/Input/Input";
import TextArea from "../../Common/Input/TextArea";
import Input2 from "../../Common/Input/Input2";
import { Icon } from "../../../Constant/IconPath";

const Step2 = () => {
  const [input2Count, setInput2Count] = useState(2); // Initial count

  const [formData2, setFormData2] = useState({
    title: "",
    skills: [],
    description: "",
  });

  const [formErrors2, setFormErrors2] = useState({
    title: "",
    skill: "",
    description: "",
  });
  console.log(formData2.description);
  console.log(formData2);
  // const [title, setTitle] = useState("");
  // const [skill, setSkill] = useState("");
  // const [description, setDescription] = useState("");
  // const [titleError, setTitleError] = useState("");
  // const [skillError, setSkillError] = useState();
  // const [descriptionError, setDescriptionError] = useState();

  const MoreAddSkill = () => {
    if (input2Count < 6) {
      setInput2Count(input2Count + 1);
    }
  };

  const placeholders = [
    "Enter Skill No. 1",
    "Enter Skill No. 2",
    "Enter Skill No. 3",
    "Enter Skill No. 4",
    "Enter Skill No. 5",
    "Enter Skill No. 6",
  ];
  const input2Components = Array.from({ length: input2Count }, (_, index) => (
    <div className="Job_Details_Item Skill_Container" key={index}>
      <Input
        placeholderText={placeholders[index]}
        marginTop={false}
        Type={"text"}
        Name={"Skill"}
        value={formData2.skills[index] || ""} // Access skills from the array
        onChange={(e) => {
          const newSkills = [...formData2.skills];
          newSkills[index] = e.target.value; // Update the specific skill
          setFormData2((prevData) => ({
            ...prevData,
            skills: newSkills,
          }));
        }}
      />
    </div>
  ));

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setFormData2((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  console.log("formData2.description:", formData2.description);

  return (
    <>
      <div className="Step2_Container Step_Main_Common_Container">
        <div className="Step2_Main_Container">
          <div className="Job_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              3. Job Details
            </h2>
            <div className="Step_Secondary_Input_Container Common_Step_Secondary_Input_Container">
              <div className="Job_Details_Item">
                <Input
                  marginTop={false}
                  error={formErrors2.title}
                  LabelText={"Title"}
                  Type={"text"}
                  Name={"Title"}
                  placeholderText={"Enter your job title"}
                  value={formData2.title}
                  onChange={(e) => {
                    setFormData2((prevData) => ({
                      ...prevData,
                      title: e.target.value,
                    }));
                  }}
                  endIcon={formErrors2.title !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Job_Details_Item">
                <TextArea
                  placeholderText={"Enter your short description"}
                  marginTop={false}
                  error={formErrors2.description}
                  LabelText={"About Me / Career Objective / Profile Summary"}
                  Type={"text"}
                  Name={"Description"}
                  value={formData2.description}
                  onChange={handleDescriptionChange}
                  endIcon={
                    formErrors2.description !== "" ? Icon.ErrorInput_Logo : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="Basis_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              4. Skills / Expertise
            </h2>
            <div className="Step_Input_Container Common_Step_Input_Container">
              {input2Components.length > 1 ? (
                <div className="Step_Skill_Input_Container Common_Step_Input_Container ">
                  {input2Components}
                </div>
              ) : (
                <p>No skills added yet.</p>
              )}
            </div>
          </div>
          {input2Count < 6 && (
            <div className="Add_Skill_Button" onClick={MoreAddSkill}>
              <div className="plusIconContainer">
                <img src={Icon.plusIcon} alt="" className="plusIcon" />
              </div>
              <div className="Add_Skill">Add More Skill</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Step2;
