import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { Icon } from "../../../Constant/IconPath";
import DropDown from "../DropDown/Drop";
import TextArea from "../Input/TextArea";

const EducationMore = ({
  index,
  removeEducationContainer,
  id,
  education,
  setEducation,
  onEducationChange,
}) => {
  const initialEducation = education[index] || {
    course: "",
    institute: "",
    startYear: "",
    endYear: "",
  };

  const [educationData, setEducationData] = useState([initialEducation]);
  const [hideStartYearOptions, setHideStartYearOptions] = useState(true);
  const [hideEndYearOptions, setHideEndYearOptions] = useState(true);

  const handleStartYearSelection = (year) => {
    setEducationData({ ...educationData, startYear: year });
    setHideStartYearOptions(true);
  };

  const handleEndYearSelection = (year) => {
    setEducationData({ ...educationData, endYear: year });
    setHideEndYearOptions(true);
  };

  const currentYear = new Date().getFullYear();
  const startYearOption = 1900;
  const years = Array.from(
    { length: currentYear - startYearOption + 1 },
    (_, index) => startYearOption + index
  );

  useEffect(() => {
    const updatedEducation = [...education];
    updatedEducation[index] = educationData;
    setEducation(updatedEducation);
  }, [educationData, index, setEducation]);

  const handleEducationDataChange = (key, value) => {
    setEducationData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <>
      <div key={index} className="Step_Secondary_Input_Container">
        <div className="Common_Counter_Counter">
          <h6 className="Degree_Container">Education No.{index + 1}</h6>
          {index > 0 && index <= 3 && (
            <div
              className="Cross_Icon_Container"
              onClick={() => removeEducationContainer(index)}
            >
              <img src={Icon.CrossIcon} alt="" className="CrossIcon" />
            </div>
          )}
        </div>
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            LabelText={"Course / Degree Name"}
            Type={"text"}
            Name={"course"}
            placeholderText={"Like BBA, MBA, BCA, etc."}
            value={education.course}
            onChange={(e) => {
              handleEducationDataChange("course", e.target.value);
            }}
          />
        </div>
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            LabelText={"Institute / College Name"}
            Type={"text"}
            Name={"institute"}
            placeholderText={"Like Oxford University, Harvard University, etc."}
            value={education.institute}
            onChange={(e) => {
              handleEducationDataChange("institute", e.target.value);
            }}
          />
        </div>
        <div className="Step_Input_Container Common_Step_Input_Container">
          <div className="Contact_Details_Item Common_Contact_Details_Item Date_Container">
            <DropDown
              LabelText={"Starting Year"}
              Value={education.startYear}
              onSelectYear={handleStartYearSelection}
              hideOptions={hideStartYearOptions}
              toggleOptions={() =>
                setHideStartYearOptions(hideStartYearOptions)
              }
              onChange={(e) => {
                setHideStartYearOptions(e.target.value);
              }}
              years={years}
            />
          </div>
          <div className="Contact_Details_Item Common_Contact_Details_Item Date_Container">
            <DropDown
              LabelText={"Ending Year"}
              Value={education.endYear}
              onSelectYear={handleEndYearSelection}
              hideOptions={hideEndYearOptions}
              toggleOptions={() => setHideEndYearOptions(hideEndYearOptions)}
              years={years}
              onChange={(e) => {
                setHideStartYearOptions(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationMore;
