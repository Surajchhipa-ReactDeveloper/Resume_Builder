import React, { useState } from "react";
import Input from "../Input/Input";
import { Icon } from "../../../Constant/IconPath";
// import ".../Step1/Step1.css";
import "../../Step/Step1/Step1.css";
import "../../Step/Step3/Step3.css";
import { StartEndYear } from "../../../Redux/Slice/YearSlice";
import { useDispatch } from "react-redux";

const DropDown = ({
  Value,
  onSelectYear,
  toggleOptions,
  years,
  onChange,
  LabelText,
}) => {
  const [yearOption, setYearOption] = useState({});
  const [yearOptionError, setYearOptionError] = useState({
    startYear: "",
    endYear: "",
  });
  const [selectedYear, setSelectedYear] = useState(Value);
  const dispatchYear = useDispatch();
  const [hide2, setHide2] = useState(false);

  const endOnClick2 = () => {
    setHide2(!hide2);
  };
  // const handleSelectYear = (year) => {
  //   onSelectYear(year);
  //   toggleOptions();
  //   setHide2(!hide2);
  // };.

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    onSelectYear(year);
    toggleOptions();
    setHide2(!true);
  };
  // ************************ for Year Start *****************
  // const currentYear = new Date().getFullYear();
  // const startYearOption = 1900;
  // const years = Array.from(
  //   { length: currentYear - startYearOption + 1 },
  //   (_, index) => startYearOption + index
  // );
  // const [selectedYear, setSelectedYear] = useState(currentYear);
  const [optionYear, setOptionYear] = useState(years);

  // const handleSelectYear2 = (selectedYearEnd) => {
  //   setYearOption({ ...yearOption, endYear: selectedYearEnd });
  //   console.log("Selected Year for End Year: ", selectedYearEnd);
  //   setHide2(true);
  //   setYearOption(selectedYearEnd);
  //   // dispatchYear(StartEndYear(selectedYearEnd));
  // };

  // console.log(yearOption);
  return (
    <div className="User_Input_Tag_Common">
      <label className={"Label LabelMargin "}>{LabelText}</label>
      <div>
        <Input
          marginTop={true}
          // error={yearOptionError.endYear}
          Type={"number"}
          Name={"EYear"}
          placeholderText={"Select"}
          value={selectedYear}
          onChange={onChange}
          endIcon={
            yearOptionError.endYear == ""
              ? hide2
                ? Icon.UpArrow
                : Icon.DownArrow
              : Icon.ErrorInput_Logo
          }
          endOnClick={endOnClick2}
          // endOnClick2={() => endOnClick2}
        />
        <div
          className={`Select_Container ${
            hide2 !== false ? "Select_Container_TRUE" : ""
          }`}
        >
          {hide2 &&
            optionYear.map((year, index) => (
              <div
                key={index}
                value={year === Value}
                className="Options_Container_Main"
              >
                <div
                  className="Option_Container_Option"
                  onClick={() => handleSelectYear(year)}
                >
                  {year}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
