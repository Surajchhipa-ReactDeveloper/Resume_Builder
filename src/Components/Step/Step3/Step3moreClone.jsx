import React, { useEffect } from "react";
import "../Step1/Step1.css";
import "./Step3.css";
import { useState } from "react";
import { Icon } from "../../../Constant/IconPath";
import Input from "../../Common/Input/Input";
import DropDown from "../../Common/DropDown/Drop";

const Step3 = ({ BuilderDataHandler3, setFormDataStep3Education }) => {
  // ************* NORMAL INPUT STATE START**************

  const [formData3, setFormData3] = useState({
    facebook: "",
    instagram: "",
    linkedIn: "",
    behance: "",
    portfolio: "",
    startYear: "",
    endYear: "",
    // educations: [{ course: "", institute: "", startYear: "", endYear: "" }],
    // course: "",
    // institute: "",
    // startYear: "",
    // endYear: "",
  });

  // Function to create a new education container with initial state

  // ************* NORMAL INPUT STATE  END**************

  // ************* ERROR STATE START**************
  const [formErrors3, setFormErrors3] = useState({
    course: "",
    institute: "",
    portfolio: "",
    behance: "",
    linkedIn: "",
    instagram: "",
    facebook: "",
    startYear: "",
    endYear: "",
  });

  // ************* ERROR STATE END**************
  const createEducationContainer = () => ({
    course: "",
    institute: "",
    startYear: "",
    endYear: "",
  });
  // ******************* NORMAL STATE START ************

  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [educations, setEducations] = useState([createEducationContainer]);
  // ******************* NORMAL STATE END ************

  console.log(educations);
  console.log(formData3);

  // Function to remove an education container by index
  const removeEducationContainer = (indexToRemove) => {
    if (educations.length > 1) {
      setEducations((prevEducations) =>
        prevEducations.filter((_, index) => index !== indexToRemove)
      );
    }
  };

  const MoreAddEducation = () => {
    if (educations.length < 3) {
      setEducations((prevEducations) => [
        ...prevEducations,
        { id: prevEducations.length + 1 },
      ]);
    }
  };

  // Function to handle changes in an education container
  const handleEducationChange = (index, field, value) => {
    setEducations((prevEducations) =>
      prevEducations.map((education, i) =>
        i === index ? { ...education, [field]: value } : education
      )
    );
  };

  // ************************ for Year Start *****************
  const currentYear = new Date().getFullYear();
  const startYearOption = 1900;
  const years = Array.from(
    { length: currentYear - startYearOption + 1 },
    (_, index) => startYearOption + index
  );
  const [optionYear, setOptionYear] = useState(years);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const [hideStartYearOptions, setHideStartYearOptions] = useState(true);
  const [hideEndYearOptions, setHideEndYearOptions] = useState(true);

  const handleStartYearSelection = (year) => {
    setFormData3({ ...formData3, startYear: year });
    setHideStartYearOptions(true);
  };

  const handleEndYearSelection = (year) => {
    setFormData3({ ...formData3, endYear: year });
    setHideEndYearOptions(true);
  };

  // ************************ for Year End ********************
  // console.log(formData3);
  const educationComponents = educations.map((educationEntry, index) => (
    <div key={index} className="Step_Secondary_Input_Container">
      <div className="Common_Counter_Counter">
        <h6 className="Degree_Container">Degree No.{index + 1}</h6>
        {index > 0 && index <= 3 && (
          <div
            className="Cross_Icon_Container"
            onClick={() => removeEducationContainer(index)}
          >
            <img src={Icon.CrossIcon} alt="" className="CrossIcon" />
          </div>
        )}
      </div>

      <div className=" Common_SIngle_Class">
        <Input
          marginTop={false}
          // error={formErrors3.course}
          LabelText={"Course / Degree Name"}
          Type={"text"}
          Name={"Title"}
          placeholderText={"Like BBA, MBA, BCA, etc."}
          onChange={(e) => {
          }}
          // endIcon={formErrors3.course !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      <div className=" Common_SIngle_Class">
        <Input
          marginTop={false}
          error={formErrors3.institute}
          LabelText={"Institute / College Name"}
          Type={"text"}
          Name={"Title"}
          placeholderText={"Like Oxford University, Harvard University, etc."}
          // value={formData3.institute}
          endIcon={formErrors3.institute !== "" ? Icon.ErrorInput_Logo : ""}
        />
      </div>
      {/* ************* */}

      {/* ************* */}

      <div className="Step_Input_Container Common_Step_Input_Container">
        <div className="Contact_Details_Item Common_Contact_Details_Item Date_Container">
          <DropDown />
        </div>
        <div className="Contact_Details_Item Common_Contact_Details_Item Date_Container">
          <DropDown />
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    BuilderDataHandler3(formData3);
    setFormDataStep3Education(educations);
  }, [formData3, educations]);

  // console.log(educations);

  return (
    <>
      <div className="Step3_Container Step_Main_Common_Container">
        <div className="Step3_Main_Container">
          <div className="Job_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              5. Education Details
            </h2>
            <div className="Step_Secondary_Input_Container">
              {educationComponents.length > 0 ? (
                <div className="Step_Skill_Input_Container Step_Input_Container Common_Step_Input_Container">
                  <div className="Skill_Details_Item ">
                    {educationComponents}
                  </div>
                </div>
              ) : (
                <p>No education added yet.</p>
              )}
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
                  value={formData3.portfolio}
                  onChange={(e) => {
                    setFormData3((prevData) => ({
                      ...prevData,
                      portfolio: e.target.value,
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
export default Step3;
