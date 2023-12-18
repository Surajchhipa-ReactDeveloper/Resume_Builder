import React, { useRef, useState } from "react";
import "./Result.css";
import {
  Document, Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";

const ResultClone2 = () => {
  // const form1 = useSelector((state) => state.Form1.formSlice1);
  // const form2 = useSelector((state) => state.FormEducation.formEducationSlice3);
  const [loader, setLoader] = useState(false);
  // const [start, setStart] = useState(setDownload);

  // console.log("form 1 >>>", form1);
  // console.log("FormEducation3 >>>", form2);
  const resultRef = useRef(null);

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
      padding: "64px", // 4 * 16
      justifyContent: "baseline",
      width: "60%",
      gap: "80px", // 5 * 16
      /* background-color: '#35322f3f', */
    },
    Output_Top_Main_Container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    Resume_User_Name: {
      fontSize: "136px", // 8.5 * 16
      lineHeight: "120px", // 7.5 * 16
      paddingBottom: "32px", // 2 * 16
      fontFamily: "Questrial-Regular",
    },
    Resume_User_Work: {
      fontFamily: "Questrial-Regular",
      color: "#707070",
      fontSize: "56px", // 3.5 * 16
      lineHeight: "40px", // 2.5 * 16
    },
    Output_Top_Right_Container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      gap: "16px", // 1rem * 16
    },
    Output_Top_Right_Container_Call: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28.8px", // 1.8rem * 16
    },
    Output_Top_Right_Container_Mail: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28.8px", // 1.8rem * 16
    },
    Output_Top_Right_Container_Adders: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28.8px", // 1.8rem * 16
    },
    User_Details: {
      fontSize: "40px", // 2.5 * 16
      lineHeight: "54.4px", // 3.4 * 16
      fontFamily: "Questrial-Regular",
    },
    Logo_Common_Container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px", // 1rem * 16
      backgroundColor: "rgba(128, 128, 128, 0.166)",
      borderRadius: "50%",
      flexDirection: "column",
    },
    Resume_Logo: {
      width: "32px", // 2rem * 16
      height: "32px", // 2rem * 16
      objectFit: "contain",
      objectPosition: "center",
    },
    Output_Center_Main_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "32px", // 2rem * 16
    },
    Output_Center_Top_Container_Profile: {
      fontSize: "48px", // 3rem * 16
      lineHeight: "32px", // 2rem * 16
      fontFamily: "Poppins-Medium",
    },
    Output_Center_Bottom_Container_About: {
      fontSize: "40px", // 2.5rem * 16
      lineHeight: "56px", // 3.5rem * 16
      fontFamily: "Questrial-Regular",
      color: "#000000",
      opacity: "0.51", // Corrected opacity value
    },
    Output_Bottom_Main_Container: {
      display: "flex",
      width: "100%",
      // height: '1280px', // Assuming 80vh * window height of 16px
    },
    Output_Bottom_Left_Container: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      gap: "48px", // 3rem * 16
    },
    Output_Bottom_Right_Container: {
      width: "60%",
      display: "flex",
      flexDirection: "column",
      gap: "48px", // 3rem * 16
    },
    Education_Outer_Container: {
      display: "flex",
      alignItems: "center",
      gap: "40px", // 2.5rem * 16
    },
    Education_Counter_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "14.4px", // 0.9rem * 16
    },
    Education_Start_End_Year: {
      fontSize: "38.4px", // 2.4rem * 16
      lineHeight: "40px", // 2.5rem * 16
      color: "grey",
      fontFamily: "Poppins-Regular",
    },
    Education_From_Palace: {
      fontSize: "38.4px", // 2.4rem * 16
      lineHeight: "40px", // 2.5rem * 16
      fontFamily: "Poppins-Regular",
    },
    Education_Name: {
      fontSize: "38.4px", // 2.4rem * 16
      lineHeight: "40px", // 2.5rem * 16
      fontFamily: "Poppins-Medium",
    },
    Type_Bottom_Left_Container_Heading: {
      marginBottom: "40px", // 2.5rem * 16
      fontSize: "40px", // 2.5rem * 16
      lineHeight: "40px", // 2.5rem * 16
      fontFamily: "Poppins-Medium",
    },
    Skill_Counter_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "16px", // 1rem * 16
      /* padding-left: '64px', // 4rem * 16 */
    },
    Education_Type_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "16px", // 1rem * 16
      /* padding-left: '64px', // 4rem * 16 */
    },
    Output_Bottom_Left_Container_Skill: {
      display: "flex",
      flexDirection: "column",
      gap: "16px", // 1rem * 16
    },
    Skill_Counter: {
      display: "flex",
      alignItems: "center",
      gap: "40px", // 2.5rem * 16
    },
    Blank_Circle_Box: {
      width: "19.2px", // 1.2rem * 16
      height: "19.2px", // 1.2rem * 16
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor: "gray",
      borderRadius: "50%",
      opacity: "0.1", // Changed opacity value to a decimal format
    },
    Output_Bottom_Center_Container: {
      marginHorizontal: "64px", // 4rem * 16
      borderRadius: "50%",
      borderWidth: "1.5px", // 1.5 * 1px
      borderColor: "gray",
      opacity: 0.1, // Decimal format remains the same
    },
    Output_Center_Blank_Line_Main_Container: {
      marginVertical: "16px", // 1rem * 16
      borderWidth: "1.5px", // 1.5 * 1px
      borderRadius: "50%",
      borderColor: "gray",
      opacity: 0.1, // Decimal format remains the same
    },
    Work_Post_And_Date: {
      display: "flex",
      justifyContent: "space-between",
    },
    Work_Post: {
      fontSize: "32px", // 2rem * 16
      lineHeight: "32px", // 2rem * 16
      fontFamily: "Poppins-Regular",
    },
    Experience_Type_Container: {
      display: "flex",
      flexDirection: "column",
      gap: "48px", // 3rem * 16
    },
    Company_Main_Details: {
      paddingLeft: "32px", // 2rem * 16
    },
    Job_Company_Name: {
      marginBottom: "8px", // 0.5rem * 16
      marginTop: "24px", // 1.5rem * 16
      fontSize: "32px", // 2rem * 16
      lineHeight: "16px", // 1rem * 16
      fontFamily: "Poppins-Regular",
    },
    Job_Company_Name_Location: {
      marginBottom: "24px", // 1.5rem * 16
      fontSize: "32px", // 2rem * 16
      lineHeight: "56px", // 3.5rem * 16
      fontFamily: "Questrial-Regular",
      color: "#000000",
      opacity: "0.51", // Decimal format remains the same
    },
    About_Job_Company: {
      fontSize: "32px", // 2rem * 16
      lineHeight: "40px", // 2.5rem * 16
      color: "#000000",
      opacity: "0.51", // Decimal format remains the same
      fontFamily: "Questrial-Regular",
    },
    Working_Year: {
      fontSize: "32px", // 2rem * 16
      lineHeight: "40px", // 2.5rem * 16
      color: "#000000",
      opacity: "0.51", // Decimal format remains the same
      fontFamily: "Questrial-Regular",
    },
  });

  // const combinedStyles = {
  //   ...styles.Resume_Output_Main_Container,
  //   ...styles.black, // Merging both styles
  // };
  return (
    <>
      {/* <h1> JAY SHREE RAM</h1> */}
      <Document>
        <Page>
          <View>
            <Text>Hello, this is a PDF!</Text>
            <Text>Hello, this is a PDF!</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default ResultClone2;
