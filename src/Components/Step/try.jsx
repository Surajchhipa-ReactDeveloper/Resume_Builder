import React from "react";

const Try = () => {
  return (
    <>
      <div className="result-container">
        <PDFDownloadLink
          document={
            <Document>
              <Page size="A4">
                {/* *********** START CODE ***********/}

                <View style={styles.output_Container}>
                  <View style={styles.combinedStyles}>
                    <View style={styles.Output_Top_Main_Container}>
                      <View style={styles.Output_Top_Left_Container}>
                        <Text style={styles.Resume_User_Name}>
                          Suraj Chhipa
                        </Text>
                        <Text style={styles.Resume_User_Work}>
                          Lead UI Designer
                        </Text>
                      </View>
                      <View style={styles.Output_Top_Right_Container}>
                        <View style={styles.Output_Top_Right_Container_Call}>
                          <Text style={styles.User_Details}>
                            +91 8690276136
                          </Text>
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

                            <View style={styles.Education_Counter_Container}>
                              <View style={styles.Blank_Circle_Box}></View>
                              style={styles.Education_Counter_Container}
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
                      <View
                        style={styles.Output_Bottom_Center_Container}
                      ></View>
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
                              <Text style={styles.Job_Company_Name}>SR Devops</Text>
                              <Text style={styles.Job_Company_Name_Location}>
                                Bhilwara, Rajasthan
                              </Text>
                              <Text style={styles.About_Job_Company}>
                                Bhilwara Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui minus culpa quia, beatae
                                facilis nesciunt corrupti cupiditate molestiae
                                eos sapiente? Ab, cumque ullam. Labore delectus
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
                              <Text style={styles.Job_Company_Name}>SR Devops</Text>
                              <Text style={styles.Job_Company_Name_Location}>
                                Bhilwara, Rajasthan
                              </Text>
                              <Text style={styles.About_Job_Company}>
                                Bhilwara Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui minus culpa quia, beatae
                                facilis nesciunt corrupti cupiditate molestiae
                                eos sapiente? Ab, cumque ullam. Labore delectus
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
                              <Text style={styles.Job_Company_Name}>SR Devops</Text>
                              <Text style={styles.Job_Company_Name_Location}>
                                Bhilwara, Rajasthan
                              </Text>
                              <Text style={styles.About_Job_Company}>
                                Bhilwara Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui minus culpa quia, beatae
                                facilis nesciunt corrupti cupiditate molestiae
                                eos sapiente? Ab, cumque ullam. Labore delectus
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
      </div>
    </>
  );
};

export default Try;
