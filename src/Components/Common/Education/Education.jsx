import React, { useState } from "react";
import "./Education.css";
import Input from "../Input/Input";
import { Icon } from "../../../Constant/IconPath";
const Education = () => {
  const [education, setEducation] = useState();
  const [titleError, setTitleError] = useState();
  const [title, setTitle] = useState();
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [errorStartYear, setErrorStartYear] = useState("");
  const [errorEndYear, setErrorEndYear] = useState("");
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [now, setNow] = useState([]);
  return (
    <>
      <div className="Step_Secondary_Input_Container">
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            error={titleError}
            LabelText={"Course / Degree Name"}
            Type={"text"}
            Name={"Title"}
            placeholderText={"Like BBA, MBA, BCA, etc."}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            startIcon={title !== "" ? "" : ""}
            endIcon={titleError !== "" ? Icon.ErrorInput_Logo : ""}
          />
        </div>
        <div className="Job_Details_Item">
          <Input
            marginTop={false}
            error={titleError}
            LabelText={"Institute / College Name"}
            Type={"text"}
            Name={"Title"}
            placeholderText={"Like Oxford University, Harvard University, etc."}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            startIcon={title !== "" ? "" : ""}
            endIcon={titleError !== "" ? Icon.ErrorInput_Logo : ""}
          />
        </div>
        {/* ************* */}
        {/* ************* */}

        <div className="Step_Input_Container">
          <div className="Contact_Details_Item">
            <Input
              marginTop={true}
              // error={title}
              LabelText={"Ending Year"}
              Type={"number"}
              Name={"EYear"}
              placeholderText={"Select"}
              value={startYear}
              onChange={(e) => {
                setStartYear(e.target.value);
              }}
              endIcon={
                errorStartYear == ""
                  ? hide
                    ? Icon.UpArrow
                    : Icon.DownArrow
                  : Icon.ErrorInput_Logo
              }
              //   endOnClick={endOnClick}
            />
          </div>
          <div className="Contact_Details_Item">
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
                errorEndYear == ""
                  ? hide2
                    ? Icon.UpArrow
                    : Icon.DownArrow
                  : Icon.ErrorInput_Logo
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
