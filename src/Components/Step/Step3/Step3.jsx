import React from "react";
import "../Step1/Step1.css";
import "./Step3.css";
import { useState } from "react";
import { Icon } from "../../../Constant/IconPath";
import Input from "../../Common/Input/Input";
import Education from "../../Common/Education/Education";
const Step3 = () => {
  // ************* NORMAL INPUT STATE START**************

  const [title, setTitle] = useState();
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [behance, setBehance] = useState("");
  const [portfolio, setPortfolio] = useState("");


  // ************* NORMAL INPUT STATE  END**************

  // ************* ERROR STATE START**************
  const [portfolioError, setPortfolioError] = useState("");
  const [behanceError, setBehanceError] = useState("");
  const [linkedInError, setLinkedInError] = useState("");
  const [instagramError, setInstagramError] = useState("");
  const [facebookError, setFacebookError] = useState("");
  const [titleError, setTitleError] = useState();
  const [errorStartYear, setErrorStartYear] = useState("");
  const [errorEndYear, setErrorEndYear] = useState("");

  // ************* ERROR STATE END**************

  // ******************* NORMAL STATE START ************

  const [now, setNow] = useState([]);
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [education, setEducation] = useState(0);
  const [educations, setEducations] = useState([1]);
  
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
    if (education < 3) {
      setEducations((prevEducations) => [...prevEducations, {}]);
      setEducation(education + 1);
    }
  };
  const educationComponents = educations.map((educationEntry, index) => (
    <div key={index} className="Step_Secondary_Input_Container">
      {/* <h6>Degree {educations}</h6> */}

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
              {educationComponents.length > 0 ? (
                <div className="Step_Skill_Input_Container Step_Input_Container">
                  <div className="Skill_Details_Item">
                    {educationComponents}
                  </div>
                </div>
              ) : (
                <p>No education added yet.</p>
              )}
            </div>
            {education < 3 && (
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
            <div className="Step_Input_Container">
              <div className="Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={portfolioError}
                  LabelText={"Facebook"}
                  Type={"text"}
                  Name={"facebook"}
                  placeholderText={"Enter your Username"}
                  value={facebook}
                  onChange={(e) => {
                    setFacebook(e.target.value);
                  }}
                  endIcon={portfolioError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={instagramError}
                  LabelText={"Email"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter Your Username"}
                  value={instagram}
                  onChange={(e) => {
                    setInstagram(e.target.value);
                  }}
                  endIcon={instagramError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
            <div className="Step_Input_Container">
              <div className="Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={linkedInError}
                  LabelText={"LinkedIn"}
                  Type={"text"}
                  Name={"LinkedIn"}
                  placeholderText={"Enter Your Username"}
                  value={linkedIn}
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                  endIcon={linkedInError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={behanceError}
                  LabelText={"Behance"}
                  Type={"text"}
                  Name={"Behance"}
                  placeholderText={"Enter your Username"}
                  value={behance}
                  onChange={(e) => {
                    setBehance(e.target.value);
                  }}
                  endIcon={behanceError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
            <div className="Step_Input_Container">
              <div className="Contact_Details_Item">
                <Input
                  marginTop={false}
                  LabelText={"Portfolio"}
                  Type={"text"}
                  Name={"Portfolio"}
                  placeholderText={"Enter your Username"}
                  value={portfolio}
                  onChange={(e) => {
                    setPortfolio(e.target.value);
                  }}
                  endIcon={portfolioError !== "" ? Icon.ErrorInput_Logo : ""}
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
