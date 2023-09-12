import React, { useState } from "react";
import "./Step1.css";
import Input from "../../Common/Input/Input";
import { Icon } from "../../../Constant/IconPath";

const Step1 = () => {
  // ***************** NORMAL STATE ***********

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  // ***************** ERROR STATE *************

  const [firstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [countryError, setCountryError] = useState("");

  const inputContentHandler = () => {
    try {
      let hasError = false;
      let EmailFormat = /\S+@\S+\.\S+/;

      // Condition Check User Fill Input
      if (firstName === "") {
        setFirstNameError("Please enter your First name");
        hasError = true;
      } else {
        setFirstNameError("");
      }

      if (lastName === "") {
        setLastNameError("Please enter your lastName ");
        hasError = true;
      } else {
        setLastNameError("");
      }

      if (phone === "") {
        setPhoneError("Please enter your phone");
        hasError = true;
      } else {
        setPhoneError("");
      }

      if (email === "") {
        setEmailError("Please enter your email");
        hasError = true;
      } else if (!EmailFormat.test(email)) {
        setEmailError("Please enter an Valid email");
        hasError = true;
      }

      if (city === "") {
        setCityError("Please enter your city");
        hasError = true;
      } else {
        setCityError("");
      }
      if (state === "") {
        setStateError("Please enter your state");
        hasError = true;
      } else {
        setStateError();
        hasError = true;
      }
      if (country === "") {
        setCountryError("Please enter your country");
        hasError = true;
      } else {
        setCountryError("");
      }
    } catch (error) {
      console.log(error, "Find Error Chack Code");
    }
  };

  return (
    <>
      <div className="Step1_Container">
        <div className="Step1_Left_Container">
          <div className="Basis_Details common_Details_For_All">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              1. Basis Details
            </h2>
            <div className="Step_Input_Container Common_Step_Input_Container Common_Step_Input_Container Common_Step_Input_Container">
              <div className="Basis_Details_Item Common_Basis_Details_Item">
                <Input
                  marginTop={false}
                  error={firstNameError}
                  LabelText={"First Name"}
                  Type={"Name"}
                  Name={"Name"}
                  placeholderText={"Enter your first name"}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  startIcon={firstName !== "" ? "" : ""}
                  endIcon={firstNameError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Basis_Details_Item Common_Basis_Details_Item">
                <Input
                  marginTop={true}
                  error={LastNameError}
                  LabelText={"Last Name"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your last name"}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  startIcon={lastName !== "" ? "" : ""}
                  endIcon={LastNameError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
          </div>
          <div className="Contact_Details">
            <h2 className="Contact_Details_heading Common_Step_Container_Input_Heading">
              2. Contact Details
            </h2>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={phoneError}
                  LabelText={"Phone"}
                  Type={"number"}
                  Name={"Phone"}
                  placeholderText={"00000-00000"}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  startIcon={phone === "" ? Icon.IndianFlag : ""}
                  endIcon={phoneError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={emailError}
                  LabelText={"Email"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your Email Adders"}
                  // value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  endIcon={emailError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={cityError}
                  LabelText={"City"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your city"}
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  endIcon={cityError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={stateError}
                  LabelText={"Email"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your email"}
                  // value={email}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  endIcon={stateError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={country}
                  LabelText={"Country"}
                  Type={"text"}
                  Name={"Country"}
                  placeholderText={"Enter your country"}
                  // value={email}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  endIcon={countryError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              {/* <button onClick={inputContentHandler}>Submit </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
