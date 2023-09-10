import React, { useState } from "react";
import "../Step1/Step1.css";
import "./Step2.css";
import Input from "../../Common/Input/Input";
import TextArea from "../../Common/Input/TextArea";
import Input2 from "../../Common/Input/Input2";
import { Icon } from "../../../Constant/IconPath";

const Step2 = () => {
  const [input2Count, setInput2Count] = useState(1); // Initial count
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [skillError, setSkillError] = useState();
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState();

  const MoreAddSkill = () => {
    if (input2Count < 3) {
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
    <div className="Job_Details_Item" key={index}>
      <Input
        placeholderText={placeholders[index]}
        marginTop={false}
        Type={"text"}
        Name={"Skill"}
        value={skill}
        onChange={(e) => {
          setSkill(e.target.value);
        }}
        startIcon={skill !== "" ? "" : ""}
      />
    </div>
  ));

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
                  error={titleError}
                  LabelText={"Title"}
                  Type={"text"}
                  Name={"Title"}
                  placeholderText={"Enter your job title"}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  startIcon={title !== "" ? "" : ""}
                  endIcon={titleError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Job_Details_Item">
                <TextArea
                  placeholderText={"Enter your short description"}
                  marginTop={false}
                  error={descriptionError}
                  LabelText={"About Me / Career Objective / Profile Summary"}
                  Type={"text"}
                  Name={"Description"}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  startIcon={description !== "" ? "" : ""}
                  endIcon={descriptionError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
          </div>
          <div className="Basis_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              4. Skills / Expertise
            </h2>
            <div className="Step_Input_Container Common_Step_Input_Container">
              {input2Components.length > 0 ? (
                <div className="Step_Skill_Input_Container Common_Step_Input_Container ">
                  <div className="Skill_Details_Item Second_Prime_Class">
                    {input2Components}
                  </div>
                  <div className="Skill_Details_Item Second_Prime_Class">
                    {input2Components}
                  </div>
                </div>
              ) : (
                <p>No skills added yet.</p>
              )}
            </div>
          </div>
          {input2Count < 3 && (
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
