import React from "react";
import "../Step1/Step1.css";
import "./Step3.css";
import { useState } from "react";
import { Icon } from "../../../Constant/IconPath";
import Input from "../../Common/Input/Input";
import Education from "../../Common/Education/Education";
const Step3 = () => {
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
  // *************************
  const currentYear = new Date().getFullYear();
  const StartYear = currentYear - 100; // Calculate the starting year (100 years ago)
  const EndYear = currentYear + 10;

  const [selectedYear, setSelectedYear] = useState(currentYear);

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
    if (education < 3) {
      setEducation(education + 1);
    }
  };
  const educationComponents = Array.from({ length: education }, (_, index) => (
    <div className="Step_Secondary_Input_Container">
      <Education />
    </div>
  ));
  return (
    <>
      <div className="Step3_Container Step_Main_Common_Container">
        <div className="Step3_Main_Container">
          <div className="Job_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              5. Education Details
            </h2>
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
                  placeholderText={
                    "Like Oxford University, Harvard University, etc."
                  }
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  startIcon={title !== "" ? "" : ""}
                  endIcon={titleError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              {/* ************* */}
              {/* <div className="Step_Input_Container">
                <div className="Contact_Details_Item">
                  <Input
                    marginTop={true}
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
                    min={selectedYear}
                    max={selectedYear + 10}
                  />
                </div>
                <div className="Contact_Details_Item">
                  <div
                    className="YearSelect" // Add your CSS class for styling
                    value={endYear}
                    onChange={(e) => setEndYear(parseInt(e.target.value))}
                  >
                    <option value="">Select</option>
                    {years.map((year) => (
                      <option key={year} value={year} className="YearOption">
                        {year}
                      </option>
                    ))}
                  </div>
                </div>
              </div> */}

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
                    endOnClick={endOnClick}
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
                    endOnClick={endOnClick2}
                    min={1900}
                    max={new Date().getFullYear() + 10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
