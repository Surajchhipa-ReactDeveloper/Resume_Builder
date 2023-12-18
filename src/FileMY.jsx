// import { Document, Page } from "@react-pdf/renderer";
// import Html from "react-pdf-html";

// const htmlPart1 = `
//   <html><body><h2 style="background-color: pink">Heading 2</h2></body></html>
// `;

// const MyResult = () => {
//   return (
//     <Document>
//       <Page>
//         <Html style={{ backgroundColor: "pink", fontSize: 16 }}>
//           {htmlPart1}
//         </Html>
//       </Page>
//     </Document>
//   );
// };

// export default MyResult;
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import React from "react";
import { Icon } from "./Constant/IconPath";

const FileMY = () => {
  const styles = StyleSheet.create({
    // **********************
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
    // Resume_User_Name: {
    //   fontSize: "136", // 8.5 * 16
    //   lineHeight: "120", // 7.5 * 16
    //   paddingBottom: "32", // 2 * 16
    //   fontFamily: "Questrial-Regular",
    // },
    // Resume_User_Work: {
    //   fontFamily: "Questrial-Regular",
    //   color: "#707070",
    //   fontSize: "56", // 3.5 * 16
    //   lineHeight: "40", // 2.5 * 16
    // },
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
    // User_Details: {
    //   fontSize: "40", // 2.5 * 16
    //   lineHeight: "54.4", // 3.4 * 16
    //   fontFamily: "Questrial-Regular",
    // },
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
    // Output_Center_Top_Container_Profile: {
    //   fontSize: "48", // 3rem * 16
    //   lineHeight: "32", // 2rem * 16
    //   fontFamily: "Poppins-Medium",
    // },
    // Output_Center_Bottom_Container_About: {
    //   fontSize: "40", // 2.5rem * 16
    //   lineHeight: "56", // 3.5rem * 16
    //   fontFamily: "Questrial-Regular",
    //   color: "#000000",
    //   opacity: "0.51", // Corrected opacity value
    // },
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
    //  start ther ********************
    // Education_Counter_Container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "14.4", // 0.9rem * 16
    // },
    // Education_Start_End_Year: {
    //   fontSize: "38.4", // 2.4rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   color: "grey",
    //   fontFamily: "Poppins-Regular",
    // },
    // Education_From_Palace: {
    //   fontSize: "38.4", // 2.4rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   fontFamily: "Poppins-Regular",
    // },
    // Education_Name: {
    //   fontSize: "38.4", // 2.4rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   fontFamily: "Poppins-Medium",
    // },
    // Type_Bottom_Left_Container_Heading: {
    //   marginBottom: "40", // 2.5rem * 16
    //   fontSize: "40", // 2.5rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   fontFamily: "Poppins-Medium",
    // },
    // Skill_Counter_Container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "16", // 1rem * 16
    //   /* padding-left: '64', // 4rem * 16 */
    // },
    // Education_Type_Container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "16", // 1rem * 16
    //   /* padding-left: '64', // 4rem * 16 */
    // },
    // Output_Bottom_Left_Container_Skill: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "16", // 1rem * 16
    // },
    // Skill_Counter: {
    //   display: "flex",
    //   alignItems: "center",
    //   gap: "40", // 2.5rem * 16
    // },
    // Blank_Circle_Box: {
    //   width: "19.2", // 1.2rem * 16
    //   height: "19.2", // 1.2rem * 16
    //   display: "flex",
    //   alignItems: "flex-start",
    //   justifyContent: "flex-start",
    //   backgroundColor: "gray",
    //   borderRadius: "50%",
    //   opacity: "0.1", // Changed opacity value to a decimal format
    // },
    // Output_Bottom_Center_Container: {
    //   marginHorizontal: "64", // 4rem * 16
    //   borderRadius: "50%",
    //   borderWidth: "1.5", // 1.5 * 1
    //   borderColor: "gray",
    //   opacity: 0.1, // Decimal format remains the same
    // },
    // Output_Center_Blank_Line_Main_Container: {
    //   marginVertical: "16", // 1rem * 16
    //   borderWidth: "1.5", // 1.5 * 1
    //   borderRadius: "50%",
    //   borderColor: "gray",
    //   opacity: 0.1, // Decimal format remains the same
    // },
    // Work_Post_And_Date: {
    //   display: "flex",
    //   justifyContent: "space-between",
    // },
    // Work_Post: {
    //   fontSize: "32", // 2rem * 16
    //   lineHeight: "32", // 2rem * 16
    //   fontFamily: "Poppins-Regular",
    // },
    // Experience_Type_Container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "48", // 3rem * 16
    // },
    // Company_Main_Details: {
    //   paddingLeft: "32", // 2rem * 16
    // },
    // Job_Company_Name: {
    //   marginBottom: "8", // 0.5rem * 16
    //   marginTop: "24", // 1.5rem * 16
    //   fontSize: "32", // 2rem * 16
    //   lineHeight: "16", // 1rem * 16
    //   fontFamily: "Poppins-Regular",
    // },
    // Job_Company_Name_Location: {
    //   marginBottom: "24", // 1.5rem * 16
    //   fontSize: "32", // 2rem * 16
    //   lineHeight: "56", // 3.5rem * 16
    //   fontFamily: "Questrial-Regular",
    //   color: "#000000",
    //   opacity: "0.51", // Decimal format remains the same
    // },
    // About_Job_Company: {
    //   fontSize: "32", // 2rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   color: "#000000",
    //   opacity: "0.51", // Decimal format remains the same
    //   fontFamily: "Questrial-Regular",
    // },
    // Working_Year: {
    //   fontSize: "32", // 2rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   color: "#000000",
    //   opacity: "0.51", // Decimal format remains the same
    //   fontFamily: "Questrial-Regular",
    // },
    // // **********************

    // container: {
    //   flexDirection: "column",
    //   padding: 10,
    //   fontFamily: "Helvetica", // Example font family
    // },
    // title: {
    //   fontSize: 20,
    //   fontWeight: "bold",
    //   marginBottom: 10,
    //   color: "red",
    // },
    // subtitle: {
    //   fontSize: 16,
    //   marginBottom: 5,
    //   color: "green",
    // },
    // text: {
    //   fontSize: 12,
    //   lineHeight: 1.5,
    //   color: "black",
    // },

    // Add more styles as needed
  });

  const Styles2 = StyleSheet.create({
    // Education_Start_End_Year: {
    //   fontSize: "38.4", // 2.4rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   color: "grey",
    //   fontFamily: "Poppins-Regular",
    // },
    // Education_From_Palace: {
    //   fontSize: "38.4", // 2.4rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   fontFamily: "Poppins-Regular",
    // },
    // Education_Name: {
    //   fontSize: "38.4", // 2.4rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   fontFamily: "Poppins-Medium",
    // },
    // Type_Bottom_Left_Container_Heading: {
    //   marginBottom: "40", // 2.5rem * 16
    //   fontSize: "40", // 2.5rem * 16
    //   lineHeight: "40", // 2.5rem * 16
    //   fontFamily: "Poppins-Medium",
    // },
    // Skill_Counter_Container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "16", // 1rem * 16
    //   /* padding-left: '64', // 4rem * 16 */
    // },
  });

  return (
    <>
      <PDFDownloadLink
        document={
          <Document>
            <Page>
              {/* *********** START CODE ***********/}

              <View style={styles.output_Container}>
                <View style={styles.combinedStyles}>
                  <View style={styles.Output_Top_Main_Container}>
                    <View style={styles.Output_Top_Left_Container}>
                      <Text style={styles.Resume_User_Name}>Suraj Chhipa</Text>
                      <Text style={styles.Resume_User_Work}>
                        Lead UI Designer
                      </Text>
                    </View>
                    <View style={styles.Output_Top_Right_Container}>
                      <View style={styles.Output_Top_Right_Container_Call}>
                        <Text style={styles.User_Details}>+91 8690276136</Text>
                        <View style={styles.Logo_Common_Container}>
                          <Image
                            src={Icon.Call_Logo}
                            alt=""
                            style={styles.Resume_Logo}
                          />
                        </View>
                      </View>
                      <View style={styles.Output_Top_Right_Container_Mail}>
                        <Text style={styles.User_Details}>
                          surajchhipa555@gmail.com
                        </Text>
                        <View style={styles.Logo_Common_Container}>
                          <Image
                            src={Icon.Email_Logo}
                            alt=""
                            style={styles.Resume_Logo}
                          />
                        </View>
                      </View>
                      <View style={styles.Output_Top_Right_Container_Adders}>
                        <Text style={styles.User_Details}>
                          Bhilwara ,Rajasthan ,India{" "}
                        </Text>
                        <View style={styles.Logo_Common_Container}>
                          <Image
                            src={Icon.Location_Logo}
                            alt=""
                            style={styles.Resume_Logo}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Output_Center_Main_Container}>
                    <Text style={styles.Output_Center_Top_Container_Profile}>
                      Profile
                    </Text>
                    <Text style={styles.Output_Center_Bottom_Container_About}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, eos sint. Ducimus corrupti hic voluptatem
                      sunt minus sed. Ipsum sequi quasi ipsam, qu bjkrncvlsnlv
                      wjwjvbwlnv wjnvw;nvbolowj wkjvrnwnv jkwviw os ad illo
                      consectetur tenetur eligendi magni dolorem.
                    </Text>
                  </View>
                  <View
                    style={styles.Output_Center_Blank_Line_Main_Container}
                  ></View>
                  <View style={styles.Output_Bottom_Main_Container}>
                    <View style={styles.Output_Bottom_Left_Container}>
                      <View
                        style={styles.Output_Bottom_Left_Container_Education}
                      >
                        <Text style={styles.Type_Bottom_Left_Container_Heading}>
                          Education
                        </Text>
                        <View style={styles.Education_Type_Container}>
                          <View style={styles.Education_Counter_Container}>
                            <View style={styles.Blank_Circle_Box}></View>
                            style={styles.Education_Counter_Container}
                            <View>
                              <Text style={Styles2.Education_Start_End_Year}>
                                2021 - 2023
                              </Text>
                              <Text style={Styles2.Education_Name}>
                                Master of Computer Science
                              </Text>
                              <Text style={Styles2.Education_From_Palace}>
                                MDSU University
                              </Text>
                            </View>
                          </View>
                          {/* ****************** */}

                          <View style={Styles2.Education_Counter_Container}>
                            <View style={styles.Blank_Circle_Box}></View>
                            style={Styles2.Education_Counter_Container}
                            <View>
                              <Text style={styles.Education_Start_End_Year}>
                                2021 - 2023
                              </Text>
                              <Text style={styles.Education_Name}>
                                Master of Computer Science
                              </Text>
                              <Text style={styles.Education_From_Palace}>
                                MDSU University
                              </Text>
                            </View>
                          </View>
                          <View style={styles.Education_Counter_Container}>
                            <View style={styles.Blank_Circle_Box}></View>

                            <View style={styles.Education_Counter_Container}>
                              <Text style={styles.Education_Start_End_Year}>
                                2021 - 2023
                              </Text>
                              <Text style={styles.Education_Name}>
                                Master of Computer Science
                              </Text>
                              <Text style={styles.Education_From_Palace}>
                                MDSU University
                              </Text>
                            </View>
                          </View>

                          {/* ****************** */}
                        </View>
                      </View>
                      <View style={styles.Output_Bottom_Left_Container_Skill}>
                        <Text style={styles.Type_Bottom_Left_Container_Heading}>
                          Skills
                        </Text>
                        <View style={styles.Skill_Counter_Container}>
                          style={styles.Skill_Counter}
                          <View style={styles.Skill_Counter}>
                            <View style={styles.Blank_Circle_Box}></View>
                            <Text style={styles.Skills_Type}>
                              UI/UX Designing
                            </Text>
                          </View>
                          {/* ****************** */}
                          style={styles.Skill_Counter}
                          <View style={styles.Skill_Counter}>
                            <View style={styles.Blank_Circle_Box}></View>
                            <Text style={styles.Skills_Type}>Web Design</Text>
                          </View>
                          <View style={styles.Skill_Counter}>
                            <View style={styles.Blank_Circle_Box}></View>
                            <Text style={styles.Skills_Type}>
                              Project Management
                            </Text>
                          </View>
                          <View style={styles.Skill_Counter}>
                            <View style={styles.Blank_Circle_Box}></View>
                            <Text style={styles.Skills_Type}>
                              Market Research
                            </Text>
                          </View>
                          {/* ****************** */}
                        </View>
                      </View>
                      <View
                        style={styles.Output_Bottom_Left_Container_FollowMe}
                      >
                        <Text style={styles.Type_Bottom_Left_Container_Heading}>
                          Follow Me
                        </Text>
                        <View style={styles.Follow_Counter_Container}>
                          <View style={styles.Follow_Type}>
                            <View style={styles.Follow_Counter}>
                              <View style={styles.Follow_Logo_Container}>
                                <Image
                                  src={Icon.FaceBook_Logo}
                                  alt=""
                                  style={styles.Media_Logo}
                                />
                              </View>
                              <Text style={styles.Media_Name}>
                                /the.SurajChhipa
                              </Text>
                            </View>

                            {/* ****************** */}

                            <View style={styles.Follow_Counter}>
                              <View style={styles.Follow_Logo_Container}>
                                <Image
                                  src={Icon.Instagram_Logo}
                                  alt=""
                                  style={styles.Media_Logo}
                                />
                              </View>
                              <Text style={styles.Media_Name}>
                                /the.SurajChhipa
                              </Text>
                            </View>
                            <View style={styles.Follow_Counter}>
                              <View style={styles.Follow_Logo_Container}>
                                <Image
                                  src={Icon.linkedin_Logo}
                                  alt=""
                                  style={styles.Media_Logo}
                                />
                              </View>
                              <Text style={styles.Media_Name}>
                                /the.SurajChhipa
                              </Text>
                            </View>
                            <View style={styles.Follow_Counter}>
                              <View style={styles.Follow_Logo_Container}>
                                <Image
                                  src={Icon.behance_Logo}
                                  alt=""
                                  style={styles.Media_Logo}
                                />
                              </View>
                              <Text style={styles.Media_Name}>
                                /the.SurajChhipa
                              </Text>
                            </View>
                            <View style={styles.Follow_Counter}>
                              <View style={styles.Follow_Logo_Container}>
                                <Image
                                  src={Icon.link_Logo}
                                  alt=""
                                  style={styles.Media_Logo}
                                />
                              </View>
                              <Text style={styles.Media_Name}>
                                /the.SurajChhipa
                              </Text>
                            </View>

                            {/* ****************** */}
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.Output_Bottom_Center_Container}></View>
                    <View style={styles.Output_Bottom_Right_Container}>
                      <Text style={styles.Type_Bottom_Left_Container_Heading}>
                        Experience
                      </Text>
                      <View style={styles.Experience_Type_Container}>
                        HARD CODE DATA IS READY FOR DATA Experience
                        <View style={styles.Experience_Counter}>
                          <View style={styles.Work_Post_And_Date}>
                            <View style={styles.Work_Post}>
                              SENIOR UI DESIGNER
                            </View>
                            <View style={styles.Working_Year}>
                              2021 - Present
                            </View>
                          </View>
                          <View style={styles.Company_Main_Details}>
                            <Text style={styles.Job_Company_Name}>
                              SR Devops
                            </Text>
                            <Text style={styles.Job_Company_Name_Location}>
                              Bhilwara, Rajasthan
                            </Text>
                            <Text style={styles.About_Job_Company}>
                              Bhilwara Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Qui minus culpa quia, beatae
                              facilis nesciunt corrupti cupiditate molestiae eos
                              sapiente? Ab, cumque ullam. Labore delectus
                              dolores neque. Mollitia praesentium magnam,
                              voluptate officia ullam sequi sunt consectetur
                              adipisci ducimus deleniti quos aliquid nemo est
                              totam veniam, beatae, natus eaque similique
                              consequuntur odit odio! Accusamus, harum eius.
                            </Text>
                          </View>
                        </View>
                        {/* ****************** */}
                        <View style={styles.Experience_Counter}>
                          <View style={styles.Work_Post_And_Date}>
                            <View style={styles.Work_Post}>
                              SENIOR UI DESIGNER
                            </View>
                            <View style={styles.Working_Year}>
                              2021 - Present
                            </View>
                          </View>
                          <View style={styles.Company_Main_Details}>
                            <Text style={styles.Job_Company_Name}>
                              SR Devops
                            </Text>
                            <Text style={styles.Job_Company_Name_Location}>
                              Bhilwara, Rajasthan
                            </Text>
                            <Text style={styles.About_Job_Company}>
                              Bhilwara Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Qui minus culpa quia, beatae
                              facilis nesciunt corrupti cupiditate molestiae eos
                              sapiente? Ab, cumque ullam. Labore delectus
                              dolores neque. Mollitia praesentium magnam,
                              voluptate officia ullam sequi sunt consectetur
                              adipisci ducimus deleniti quos aliquid nemo est
                              totam veniam, beatae, natus eaque similique
                              consequuntur odit odio! Accusamus, harum eius.
                            </Text>
                          </View>
                        </View>
                        <View style={styles.Experience_Counter}>
                          <View style={styles.Work_Post_And_Date}>
                            <View style={styles.Work_Post}>
                              SENIOR UI DESIGNER
                            </View>
                            <View style={styles.Working_Year}>
                              2021 - Present
                            </View>
                          </View>
                          <View style={styles.Company_Main_Details}>
                            <Text style={styles.Job_Company_Name}>
                              SR Devops
                            </Text>
                            <Text style={styles.Job_Company_Name_Location}>
                              Bhilwara, Rajasthan
                            </Text>
                            <Text style={styles.About_Job_Company}>
                              Bhilwara Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Qui minus culpa quia, beatae
                              facilis nesciunt corrupti cupiditate molestiae eos
                              sapiente? Ab, cumque ullam. Labore delectus
                              dolores neque. Mollitia praesentium magnam,
                              voluptate officia ullam sequi sunt consectetur
                              adipisci ducimus deleniti quos aliquid nemo est
                              totam veniam, beatae, natus eaque similique
                              consequuntur odit odio! Accusamus, harum eius.
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* *********** END CODE ************/}
            </Page>
          </Document>
        }
        fileName="result.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </>
  );
};

export default FileMY;
