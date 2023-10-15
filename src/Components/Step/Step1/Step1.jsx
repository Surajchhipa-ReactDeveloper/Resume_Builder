import React, { useState } from "react";
import "./Step1.css";
import Input from "../../Common/Input/Input";
import { Icon } from "../../../Constant/IconPath";

const Step1 = () => {
  // ***************** NORMAL STATE ***********

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
  });

  // ***************** ERROR STATE *************

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
  });
  console.log(formData);

  const inputContentHandler = () => {
    try {
      let hasError = false;
      let EmailFormat = /\S+@\S+\.\S+/;

      // Condition Check User Fill Input
      if (formData.firstName === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          firstName: "Please enter your First name",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
      }
      if (formData.lastName === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          lastName: "Please enter your last name",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
      }

      if (formData.phone === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Please enter your Phone Number",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
      }

      if (formData.email === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter your email",
        }));
        hasError = true;
      } else if (!EmailFormat.test(formData.email)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter an Valid email",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }

      if (formData.city === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          city: "Please enter your City",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, city: "" }));
      }

      if (formData.state === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          state: "Please enter your state ",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, state: "" }));
      }

      if (formData.country === "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          country: "Please enter your country ",
        }));
        hasError = true;
      } else {
        setFormErrors((prevErrors) => ({ ...prevErrors, country: "" }));
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
                  error={formErrors.firstName}
                  LabelText={"First Name"}
                  Type={"Name"}
                  Name={"Name"}
                  placeholderText={"Enter your first name"}
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      firstName: e.target.value,
                    }));
                  }}
                  endIcon={
                    formErrors.firstName !== "" ? Icon.ErrorInput_Logo : ""
                  }
                />
              </div>
              <div className="Basis_Details_Item Common_Basis_Details_Item">
                <Input
                  marginTop={true}
                  error={formErrors.lastName}
                  LabelText={"Last Name"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your last name"}
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      lastName: e.target.value,
                    }));
                  }}
                  endIcon={
                    formErrors.lastName !== "" ? Icon.ErrorInput_Logo : ""
                  }
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
                  error={formErrors.phone}
                  LabelText={"Phone"}
                  Type={"number"}
                  Name={"Phone"}
                  placeholderText={"00000-00000"}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      phone: e.target.value,
                    }));
                  }}
                  startIcon={formData.phone === "" ? Icon.IndianFlag : ""}
                  endIcon={formErrors.phone !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={true}
                  error={formErrors.email}
                  LabelText={"Email"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your Email Adders"}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }));
                  }}
                  endIcon={formErrors.email !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={formErrors.city}
                  LabelText={"City"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your city"}
                  value={formData.city}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      city: e.target.value,
                    }));
                  }}
                  endIcon={formErrors.city !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={formErrors.state}
                  LabelText={"State"}
                  Type={"email"}
                  Name={"Email"}
                  placeholderText={"Enter your state"}
                  value={formData.state}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      state: e.target.value,
                    }));
                  }}
                  endIcon={formErrors.state !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
            </div>
            <div className="Step_Input_Container Common_Step_Input_Container">
              <div className="Contact_Details_Item Common_Contact_Details_Item">
                <Input
                  marginTop={false}
                  error={formErrors.country}
                  LabelText={"Country"}
                  Type={"text"}
                  Name={"Country"}
                  placeholderText={"Enter your country"}
                  value={formData.country}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      country: e.target.value,
                    }));
                  }}
                  endIcon={
                    formErrors.country !== "" ? Icon.ErrorInput_Logo : ""
                  }
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
