import React, { forwardRef, useRef, useState } from "react";
import "./Step5.css";
import { Images } from "../../../Constant/ImgPath";
import BackButton from "../../Common/BackButton/BackButton";
import NextButton from "../../Common/NextButton/NextButton";
import Builder from "../../Builder/Builder";
import { NavLink } from "react-router-dom";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import { View } from "@react-pdf/renderer";
import { Icon } from "../../../Constant/IconPath";
import ResultClone2 from "../../Output/ResultClone";
import Result from "../../Output/Result";
import MyResult from "../../../FileMY";
import ResultTemp from "../../Output/Temp";

const Step5 = forwardRef((props, ref) => {
  const [showResult, setShowResult] = useState(false);
  const [builder, setGoBuilder] = useState(false);
  const [current, setCurrent] = useState([1]);
  const [loader, setLoader] = useState(false);
  const [download, setDownload] = useState();
  // const [downloadPDF, setDownloadPDF] = useState(false);

  const contentRef = useRef();
  const handleChangePage = () => {
    setShowResult(true);
    console.log("hello");
  };

  const handleZeroStep = () => {
    setCurrent([0]);
  };
  const pdfRef = useRef();

  const styles = StyleSheet.create({
    output_Container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    Resume_Output_Main_Container: {
      display: "flex",
      flexDirection: "column",
      padding: "64", // 4 * 16
      justifyContent: "baseline",
      width: "60%",
      gap: "80", // 5 * 16
      /* background-color: '#35322f3f', */
    },
    Output_Top_Main_Container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    Resume_User_Name: {
      fontSize: "136", // 8.5 * 16
      lineHeight: "120", // 7.5 * 16
      paddingBottom: "32", // 2 * 16
      fontFamily: "Questrial-Regular",
    },
    Resume_User_Work: {
      fontFamily: "Questrial-Regular",
      color: "#707070",
      fontSize: "56", // 3.5 * 16
      lineHeight: "40", // 2.5 * 16
    },
    Output_Top_Right_Container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      gap: "16", // 1rem * 16
    },
    Output_Top_Right_Container_Call: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28.8", // 1.8rem * 16
    },
    Output_Top_Right_Container_Mail: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28.8", // 1.8rem * 16
    },
    Output_Top_Right_Container_Adders: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28.8", // 1.8rem * 16
    },
    User_Details: {
      fontSize: "40", // 2.5 * 16
      lineHeight: "54.4", // 3.4 * 16
      fontFamily: "Questrial-Regular",
    },
    Logo_Common_Container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16", // 1rem * 16
      backgroundColor: "rgba(128, 128, 128, 0.166)",
      borderRadius: "50%",
      flexDirection: "column",
    },
    Resume_Logo: {
      width: "32", // 2rem * 16
      height: "32", // 2rem * 16
      objectFit: "contain",
      objectPosition: "center",
    },
    Output_Center_Main_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "32", // 2rem * 16
    },
    Output_Center_Top_Container_Profile: {
      fontSize: "48", // 3rem * 16
      lineHeight: "32", // 2rem * 16
      fontFamily: "Poppins-Medium",
    },
    Output_Center_Bottom_Container_About: {
      fontSize: "40", // 2.5rem * 16
      lineHeight: "56", // 3.5rem * 16
      fontFamily: "Questrial-Regular",
      color: "#000000",
      opacity: "0.51", // Corrected opacity value
    },
    Output_Bottom_Main_Container: {
      display: "flex",
      width: "100%",
      // height: '1280', // Assuming 80vh * window height of 16
    },
    Output_Bottom_Left_Container: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      gap: "48", // 3rem * 16
    },
    Output_Bottom_Right_Container: {
      width: "60%",
      display: "flex",
      flexDirection: "column",
      gap: "48", // 3rem * 16
    },
    Education_Outer_Container: {
      display: "flex",
      alignItems: "center",
      gap: "40", // 2.5rem * 16
    },
    Education_Counter_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "14.4", // 0.9rem * 16
    },
    Education_Start_End_Year: {
      fontSize: "38.4", // 2.4rem * 16
      lineHeight: "40", // 2.5rem * 16
      color: "grey",
      fontFamily: "Poppins-Regular",
    },
    Education_From_Palace: {
      fontSize: "38.4", // 2.4rem * 16
      lineHeight: "40", // 2.5rem * 16
      fontFamily: "Poppins-Regular",
    },
    Education_Name: {
      fontSize: "38.4", // 2.4rem * 16
      lineHeight: "40", // 2.5rem * 16
      fontFamily: "Poppins-Medium",
    },
    Type_Bottom_Left_Container_Heading: {
      marginBottom: "40", // 2.5rem * 16
      fontSize: "40", // 2.5rem * 16
      lineHeight: "40", // 2.5rem * 16
      fontFamily: "Poppins-Medium",
    },
    Skill_Counter_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "16", // 1rem * 16
      /* padding-left: '64', // 4rem * 16 */
    },
    Education_Type_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "16", // 1rem * 16
      /* padding-left: '64', // 4rem * 16 */
    },
    Output_Bottom_Left_Container_Skill: {
      display: "flex",
      flexDirection: "column",
      gap: "16", // 1rem * 16
    },
    Skill_Counter: {
      display: "flex",
      alignItems: "center",
      gap: "40", // 2.5rem * 16
    },
    Blank_Circle_Box: {
      width: "19.2", // 1.2rem * 16
      height: "19.2", // 1.2rem * 16
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor: "gray",
      borderRadius: "50%",
      opacity: "0.1", // Changed opacity value to a decimal format
    },
    Output_Bottom_Center_Container: {
      marginHorizontal: "64", // 4rem * 16
      borderRadius: "50%",
      borderWidth: "1.5", // 1.5 * 1
      borderColor: "gray",
      opacity: 0.1, // Decimal format remains the same
    },
    Output_Center_Blank_Line_Main_Container: {
      marginVertical: "16", // 1rem * 16
      borderWidth: "1.5", // 1.5 * 1
      borderRadius: "50%",
      borderColor: "gray",
      opacity: 0.1, // Decimal format remains the same
    },
    Work_Post_And_Date: {
      display: "flex",
      justifyContent: "space-between",
    },
    Work_Post: {
      fontSize: "32", // 2rem * 16
      lineHeight: "32", // 2rem * 16
      fontFamily: "Poppins-Regular",
    },
    Experience_Type_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "48", // 3rem * 16
    },
    Company_Main_Details: {
      paddingLeft: "32", // 2rem * 16
    },
    Job_Company_Name: {
      marginBottom: "8", // 0.5rem * 16
      marginTop: "24", // 1.5rem * 16
      fontSize: "32", // 2rem * 16
      lineHeight: "16", // 1rem * 16
      fontFamily: "Poppins-Regular",
    },
    Job_Company_Name_Location: {
      marginBottom: "24", // 1.5rem * 16
      fontSize: "32", // 2rem * 16
      lineHeight: "56", // 3.5rem * 16
      fontFamily: "Questrial-Regular",
      color: "#000000",
      opacity: "0.51", // Decimal format remains the same
    },
    About_Job_Company: {
      fontSize: "32", // 2rem * 16
      lineHeight: "40", // 2.5rem * 16
      color: "#000000",
      opacity: "0.51", // Decimal format remains the same
      fontFamily: "Questrial-Regular",
    },
    Working_Year: {
      fontSize: "32", // 2rem * 16
      lineHeight: "40", // 2.5rem * 16
      color: "#000000",
      opacity: "0.51", // Decimal format remains the same
      fontFamily: "Questrial-Regular",
    },
  });

  // const generatePDF = () => {
  //   if (pdfRef.current) {
  //     pdfRef.current.updateContainer();
  //     // Trigger a download of the PDF
  //     pdfRef.current.children[0].toBlob().then((blob) => {
  //       const url = URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = "result_clone.pdf";
  //       a.click();
  //     });
  //   }
  // };
  return (
    <>
      {showResult ? (
        <>
          <div>
            <ResultTemp />
          </div>
        </>
      ) : builder ? (
        <Builder ReSubmitForm={0} />
      ) : (
        <div className="Step5_Main_Container">
          <div className="Resume_Img_Container">
            <img src={Images.Step5} alt="" className="Resume_Logo_Output" />
          </div>
          <div className="Resume_Mid_Text_Container">
            <div className="Resume_First_text">Your resume is created and</div>
            <div className="Resume_Second_text">
              Roaring To{" "}
              <span className="Resume_Second_text_Blue">Launch!</span>
            </div>
          </div>
          <div className="Resume_Button_Container">
            <div className="Next_Button">
              <NextButton
                ButtonText={"Download Resume"}
                nextImg={true}
                onClick={() => {
                  handleChangePage();
                  // generatePDF();
                }}
              />
            </div>
            <div className="Next_Button">
              <NavLink to="/">
                <BackButton
                  ButtonText={"Builder"}
                  BtnImg={false}
                  onClick={() => {
                    // to = "/builder";
                  }}
                />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Step5;
