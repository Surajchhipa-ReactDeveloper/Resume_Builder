import React, { forwardRef, useRef, useState } from "react";
import "./Step5.css";
import { Images } from "../../../Constant/ImgPath";
import BackButton from "../../Common/BackButton/BackButton";
import NextButton from "../../Common/NextButton/NextButton";
import Result from "../../Output/Result";
import Builder from "../../Builder/Builder";
import { NavLink } from "react-router-dom";
import {
  Document,
  PDFDownloadLink,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";
import { Icon } from "../../../Constant/IconPath";

const Step5 = forwardRef((props, ref) => {
  const [showResult, setShowResult] = useState(false);
  const [builder, setGoBuilder] = useState(false);
  const [current, setCurrent] = useState([1]);
  const [loader, setLoader] = useState(false);
  const [download, setDownload] = useState();
  const [downloadPDF, setDownloadPDF] = useState(false);
  const pdfRef = useRef();

  const handleChangePage = () => {
    setShowResult(true);
    console.log("hello");
  };
  // const handleUpdateStep = () => {
  //   setGoBuilder(true);
  // };
  const handleZeroStep = () => {
    setCurrent([0]);
  };

  const resume = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <div className="output_Container">
          <div className="Resume_Output_Main_Container black">
            <div className="Output_Top_Main_Container">
              <div className="Output_Top_Left_Container">
                {/* <div className="Resume_User_Name"></div> */}
                <h1 className="Resume_User_Name">Suraj Chhipa</h1>
                <p className="Resume_User_Work">Lead UI Designer</p>
              </div>
              <div className="Output_Top_Right_Container">
                <div className="Output_Top_Right_Container_Call">
                  <p className="User_Details">+91 8690276136</p>
                  <div className="Logo_Common_Container">
                    <img src={Icon.Call_Logo} alt="" className="Resume_Logo" />
                  </div>
                </div>
                <div className="Output_Top_Right_Container_Mail">
                  <p className="User_Details">surajchhipa555@gmail.com</p>
                  <div className="Logo_Common_Container">
                    <img src={Icon.Email_Logo} alt="" className="Resume_Logo" />
                  </div>
                </div>
                <div className="Output_Top_Right_Container_Adders">
                  <p className="User_Details">Bhilwara ,Rajasthan ,India </p>
                  <div className="Logo_Common_Container">
                    <img
                      src={Icon.Location_Logo}
                      alt=""
                      className="Resume_Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="Output_Center_Main_Container">
              <h3 className="Output_Center_Top_Container_Profile">Profile</h3>
              <p className="Output_Center_Bottom_Container_About">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, eos sint. Ducimus corrupti hic voluptatem sunt minus
                sed. Ipsum sequi quasi ipsam, qu bjkrncvlsnlv wjwjvbwlnv
                wjnvw;nvbolowj wkjvrnwnv jkwviw os ad illo consectetur tenetur
                eligendi magni dolorem.
              </p>
            </div>
            <div className="Output_Center_Blank_Line_Main_Container"></div>

            <div className="Output_Bottom_Main_Container">
              <div className="Output_Bottom_Left_Container ">
                <div className="Output_Bottom_Left_Container_Education">
                  <h3 className="Type_Bottom_Left_Container_Heading">
                    Education
                  </h3>
                  <div className="Education_Type_Container">
                    <div className="Education_Outer_Container">
                      <div className="Blank_Circle_Box"></div>

                      <div className="Education_Counter_Container">
                        <p className="Education_Start_End_Year">2021 - 2023</p>
                        <p className="Education_Name">
                          Master of Computer Science
                        </p>
                        <p className="Education_From_Palace">MDSU University</p>
                      </div>
                    </div>
                    {/* ****************** */}

                    <div className="Education_Outer_Container">
                      <div className="Blank_Circle_Box"></div>

                      <div className="Education_Counter_Container">
                        <p className="Education_Start_End_Year">2021 - 2023</p>
                        <p className="Education_Name">
                          Master of Computer Science
                        </p>
                        <p className="Education_From_Palace">MDSU University</p>
                      </div>
                    </div>
                    <div className="Education_Outer_Container">
                      <div className="Blank_Circle_Box"></div>

                      <div className="Education_Counter_Container">
                        <p className="Education_Start_End_Year">2021 - 2023</p>
                        <p className="Education_Name">
                          Master of Computer Science
                        </p>
                        <p className="Education_From_Palace">MDSU University</p>
                      </div>
                    </div>

                    {/* ****************** */}
                  </div>
                </div>
                <div className="Output_Bottom_Left_Container_Skill">
                  <h3 className="Type_Bottom_Left_Container_Heading">Skills</h3>

                  <div className="Skill_Counter_Container">
                    <div className="Skill_Counter">
                      <div className="Blank_Circle_Box"></div>
                      <h4 className="Skills_Type">UI/UX Designing</h4>
                    </div>
                    {/* ****************** */}

                    <div className="Skill_Counter">
                      <div className="Blank_Circle_Box"></div>
                      <h4 className="Skills_Type">Web Design</h4>
                    </div>
                    <div className="Skill_Counter">
                      <div className="Blank_Circle_Box"></div>
                      <h4 className="Skills_Type">Project Management</h4>
                    </div>
                    <div className="Skill_Counter">
                      <div className="Blank_Circle_Box"></div>
                      <h4 className="Skills_Type">Market Research</h4>
                    </div>

                    {/* ****************** */}
                  </div>
                </div>
                <div className="Output_Bottom_Left_Container_FollowMe">
                  <h3 className="Type_Bottom_Left_Container_Heading">
                    Follow Me
                  </h3>
                  <div className="Follow_Counter_Container">
                    <div className="Follow_Type">
                      <div className="Follow_Counter">
                        <div className="Follow_Logo_Container">
                          <img
                            src={Icon.FaceBook_Logo}
                            alt=""
                            className="Media_Logo"
                          />
                        </div>
                        <p className="Media_Name">/the.SurajChhipa</p>
                      </div>

                      {/* ****************** */}

                      <div className="Follow_Counter">
                        <div className="Follow_Logo_Container">
                          <img
                            src={Icon.Instagram_Logo}
                            alt=""
                            className="Media_Logo"
                          />
                        </div>
                        <p className="Media_Name">/the.SurajChhipa</p>
                      </div>
                      <div className="Follow_Counter">
                        <div className="Follow_Logo_Container">
                          <img
                            src={Icon.linkedin_Logo}
                            alt=""
                            className="Media_Logo"
                          />
                        </div>
                        <p className="Media_Name">/the.SurajChhipa</p>
                      </div>
                      <div className="Follow_Counter">
                        <div className="Follow_Logo_Container">
                          <img
                            src={Icon.behance_Logo}
                            alt=""
                            className="Media_Logo"
                          />
                        </div>
                        <p className="Media_Name">/the.SurajChhipa</p>
                      </div>
                      <div className="Follow_Counter">
                        <div className="Follow_Logo_Container">
                          <img
                            src={Icon.link_Logo}
                            alt=""
                            className="Media_Logo"
                          />
                        </div>
                        <p className="Media_Name">/the.SurajChhipa</p>
                      </div>

                      {/* ****************** */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="Output_Bottom_Center_Container"></div>
              <div className="Output_Bottom_Right_Container ">
                <h3 className="Type_Bottom_Left_Container_Heading">Experience</h3>
                <div className="Experience_Type_Container">
                  HARD CODE DATA IS READY FOR DATA Experience
                  <div className="Experience_Counter">
                    <div className="Work_Post_And_Date">
                      <div className="Work_Post">SENIOR UI DESIGNER</div>
                      <div className="Working_Year">2021 - Present</div>
                    </div>
                    <div className="Company_Main_Details">
                      <h3 className="Job_Company_Name">SR Devops</h3>
                      <h3 className="Job_Company_Name_Location">
                        Bhilwara, Rajasthan
                      </h3>
                      <p className="About_Job_Company">
                        Bhilwara Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Qui minus culpa quia, beatae facilis
                        nesciunt corrupti cupiditate molestiae eos sapiente? Ab,
                        cumque ullam. Labore delectus dolores neque. Mollitia
                        praesentium magnam, voluptate officia ullam sequi sunt
                        consectetur adipisci ducimus deleniti quos aliquid nemo
                        est totam veniam, beatae, natus eaque similique
                        consequuntur odit odio! Accusamus, harum eius.
                      </p>
                    </div>
                  </div>
                  {/* ****************** */}
                  <div className="Experience_Counter">
                    <div className="Work_Post_And_Date">
                      <div className="Work_Post">SENIOR UI DESIGNER</div>
                      <div className="Working_Year">2021 - Present</div>
                    </div>
                    <div className="Company_Main_Details">
                      <h3 className="Job_Company_Name">SR Devops</h3>
                      <h3 className="Job_Company_Name_Location">
                        Bhilwara, Rajasthan
                      </h3>
                      <p className="About_Job_Company">
                        Bhilwara Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Qui minus culpa quia, beatae facilis
                        nesciunt corrupti cupiditate molestiae eos sapiente? Ab,
                        cumque ullam. Labore delectus dolores neque. Mollitia
                        praesentium magnam, voluptate officia ullam sequi sunt
                        consectetur adipisci ducimus deleniti quos aliquid nemo
                        est totam veniam, beatae, natus eaque similique
                        consequuntur odit odio! Accusamus, harum eius.
                      </p>
                    </div>
                  </div>
                  <div className="Experience_Counter">
                    <div className="Work_Post_And_Date">
                      <div className="Work_Post">SENIOR UI DESIGNER</div>
                      <div className="Working_Year">2021 - Present</div>
                    </div>
                    <div className="Company_Main_Details">
                      <h3 className="Job_Company_Name">SR Devops</h3>
                      <h3 className="Job_Company_Name_Location">
                        Bhilwara, Rajasthan
                      </h3>
                      <p className="About_Job_Company">
                        Bhilwara Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Qui minus culpa quia, beatae facilis
                        nesciunt corrupti cupiditate molestiae eos sapiente? Ab,
                        cumque ullam. Labore delectus dolores neque. Mollitia
                        praesentium magnam, voluptate officia ullam sequi sunt
                        consectetur adipisci ducimus deleniti quos aliquid nemo
                        est totam veniam, beatae, natus eaque similique
                        consequuntur odit odio! Accusamus, harum eius.
                      </p>
                    </div>
                  </div>
                  {/* ****************** */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </body>
    </html>`;

  // const createPDF = async () => {
  //   try {
  //     const options = {
  //       html: resume,
  //       // fileName: trimExtraSpaces(fileName),
  //       directory: "Documents",
  //       height: 1754,
  //       width: 1240,
  //     };

  //     const file = await RNHTMLtoPDF.convert(options);
  //     alert("PDF created: " + file.filePath);
  //     console.log("PDF created:", file.filePath);
  //   } catch (error) {
  //     alert("Something went wrong! Try again...");
  //     console.error("Error creating PDF:", error);
  //   }
  // };

  const HandleDownloadPdf = () => {};
  return (
    <>
      {showResult ? (
        <div className="result-container">
          <PDFDownloadLink
            document={
              <Document>
                <Page size="A4">
                  <View>
                    <div className="output_Container">
                      <div className="Resume_Output_Main_Container black">
                        <div className="Output_Top_Main_Container">
                          <div className="Output_Top_Left_Container">
                            {/* <div className="Resume_User_Name"></div> */}
                            <h1 className="Resume_User_Name">Suraj Chhipa</h1>
                            <p className="Resume_User_Work">Lead UI Designer</p>
                          </div>
                          <div className="Output_Top_Right_Container">
                            <div className="Output_Top_Right_Container_Call">
                              <p className="User_Details">+91 8690276136</p>
                              <div className="Logo_Common_Container">
                                <img
                                  src={Icon.Call_Logo}
                                  alt=""
                                  className="Resume_Logo"
                                />
                              </div>
                            </div>
                            <div className="Output_Top_Right_Container_Mail">
                              <p className="User_Details">
                                surajchhipa555@gmail.com
                              </p>
                              <div className="Logo_Common_Container">
                                <img
                                  src={Icon.Email_Logo}
                                  alt=""
                                  className="Resume_Logo"
                                />
                              </div>
                            </div>
                            <div className="Output_Top_Right_Container_Adders">
                              <p className="User_Details">
                                Bhilwara ,Rajasthan ,India{" "}
                              </p>
                              <div className="Logo_Common_Container">
                                <img
                                  src={Icon.Location_Logo}
                                  alt=""
                                  className="Resume_Logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Output_Center_Main_Container">
                          <h3 className="Output_Center_Top_Container_Profile">
                            Profile
                          </h3>
                          <p className="Output_Center_Bottom_Container_About">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, eos sint. Ducimus corrupti hic
                            voluptatem sunt minus sed. Ipsum sequi quasi ipsam,
                            qu bjkrncvlsnlv wjwjvbwlnv wjnvw;nvbolowj wkjvrnwnv
                            jkwviw os ad illo consectetur tenetur eligendi magni
                            dolorem.
                          </p>
                        </div>
                        <div className="Output_Center_Blank_Line_Main_Container"></div>

                        <div className="Output_Bottom_Main_Container">
                          <div className="Output_Bottom_Left_Container ">
                            <div className="Output_Bottom_Left_Container_Education">
                              <h3 className="Type_Bottom_Left_Container_Heading">
                                Education
                              </h3>
                              <div className="Education_Type_Container">
                                <div className="Education_Outer_Container">
                                  <div className="Blank_Circle_Box"></div>

                                  <div className="Education_Counter_Container">
                                    <p className="Education_Start_End_Year">
                                      2021 - 2023
                                    </p>
                                    <p className="Education_Name">
                                      Master of Computer Science
                                    </p>
                                    <p className="Education_From_Palace">
                                      MDSU University
                                    </p>
                                  </div>
                                </div>
                                {/* ****************** */}

                                <div className="Education_Outer_Container">
                                  <div className="Blank_Circle_Box"></div>

                                  <div className="Education_Counter_Container">
                                    <p className="Education_Start_End_Year">
                                      2021 - 2023
                                    </p>
                                    <p className="Education_Name">
                                      Master of Computer Science
                                    </p>
                                    <p className="Education_From_Palace">
                                      MDSU University
                                    </p>
                                  </div>
                                </div>
                                <div className="Education_Outer_Container">
                                  <div className="Blank_Circle_Box"></div>

                                  <div className="Education_Counter_Container">
                                    <p className="Education_Start_End_Year">
                                      2021 - 2023
                                    </p>
                                    <p className="Education_Name">
                                      Master of Computer Science
                                    </p>
                                    <p className="Education_From_Palace">
                                      MDSU University
                                    </p>
                                  </div>
                                </div>

                                {/* ****************** */}
                              </div>
                            </div>
                            <div className="Output_Bottom_Left_Container_Skill">
                              <h3 className="Type_Bottom_Left_Container_Heading">
                                Skills
                              </h3>

                              <div className="Skill_Counter_Container">
                                <div className="Skill_Counter">
                                  <div className="Blank_Circle_Box"></div>
                                  <h4 className="Skills_Type">
                                    UI/UX Designing
                                  </h4>
                                </div>
                                {/* ****************** */}

                                <div className="Skill_Counter">
                                  <div className="Blank_Circle_Box"></div>
                                  <h4 className="Skills_Type">Web Design</h4>
                                </div>
                                <div className="Skill_Counter">
                                  <div className="Blank_Circle_Box"></div>
                                  <h4 className="Skills_Type">
                                    Project Management
                                  </h4>
                                </div>
                                <div className="Skill_Counter">
                                  <div className="Blank_Circle_Box"></div>
                                  <h4 className="Skills_Type">
                                    Market Research
                                  </h4>
                                </div>

                                {/* ****************** */}
                              </div>
                            </div>
                            <div className="Output_Bottom_Left_Container_FollowMe">
                              <h3 className="Type_Bottom_Left_Container_Heading">
                                Follow Me
                              </h3>
                              <div className="Follow_Counter_Container">
                                <div className="Follow_Type">
                                  <div className="Follow_Counter">
                                    <div className="Follow_Logo_Container">
                                      <img
                                        src={Icon.FaceBook_Logo}
                                        alt=""
                                        className="Media_Logo"
                                      />
                                    </div>
                                    <p className="Media_Name">
                                      /the.SurajChhipa
                                    </p>
                                  </div>

                                  {/* ****************** */}

                                  <div className="Follow_Counter">
                                    <div className="Follow_Logo_Container">
                                      <img
                                        src={Icon.Instagram_Logo}
                                        alt=""
                                        className="Media_Logo"
                                      />
                                    </div>
                                    <p className="Media_Name">
                                      /the.SurajChhipa
                                    </p>
                                  </div>
                                  <div className="Follow_Counter">
                                    <div className="Follow_Logo_Container">
                                      <img
                                        src={Icon.linkedin_Logo}
                                        alt=""
                                        className="Media_Logo"
                                      />
                                    </div>
                                    <p className="Media_Name">
                                      /the.SurajChhipa
                                    </p>
                                  </div>
                                  <div className="Follow_Counter">
                                    <div className="Follow_Logo_Container">
                                      <img
                                        src={Icon.behance_Logo}
                                        alt=""
                                        className="Media_Logo"
                                      />
                                    </div>
                                    <p className="Media_Name">
                                      /the.SurajChhipa
                                    </p>
                                  </div>
                                  <div className="Follow_Counter">
                                    <div className="Follow_Logo_Container">
                                      <img
                                        src={Icon.link_Logo}
                                        alt=""
                                        className="Media_Logo"
                                      />
                                    </div>
                                    <p className="Media_Name">
                                      /the.SurajChhipa
                                    </p>
                                  </div>

                                  {/* ****************** */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="Output_Bottom_Center_Container"></div>
                          <div className="Output_Bottom_Right_Container ">
                            <h3 className="Type_Bottom_Left_Container_Heading">
                              Experience
                            </h3>
                            <div className="Experience_Type_Container">
                              HARD CODE DATA IS READY FOR DATA Experience
                              <div className="Experience_Counter">
                                <div className="Work_Post_And_Date">
                                  <div className="Work_Post">
                                    SENIOR UI DESIGNER
                                  </div>
                                  <div className="Working_Year">
                                    2021 - Present
                                  </div>
                                </div>
                                <div className="Company_Main_Details">
                                  <h3 className="Job_Company_Name">
                                    SR Devops
                                  </h3>
                                  <h3 className="Job_Company_Name_Location">
                                    Bhilwara, Rajasthan
                                  </h3>
                                  <p className="About_Job_Company">
                                    Bhilwara Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Qui minus
                                    culpa quia, beatae facilis nesciunt corrupti
                                    cupiditate molestiae eos sapiente? Ab,
                                    cumque ullam. Labore delectus dolores neque.
                                    Mollitia praesentium magnam, voluptate
                                    officia ullam sequi sunt consectetur
                                    adipisci ducimus deleniti quos aliquid nemo
                                    est totam veniam, beatae, natus eaque
                                    similique consequuntur odit odio! Accusamus,
                                    harum eius.
                                  </p>
                                </div>
                              </div>
                              {/* ****************** */}
                              <div className="Experience_Counter">
                                <div className="Work_Post_And_Date">
                                  <div className="Work_Post">
                                    SENIOR UI DESIGNER
                                  </div>
                                  <div className="Working_Year">
                                    2021 - Present
                                  </div>
                                </div>
                                <div className="Company_Main_Details">
                                  <h3 className="Job_Company_Name">
                                    SR Devops
                                  </h3>
                                  <h3 className="Job_Company_Name_Location">
                                    Bhilwara, Rajasthan
                                  </h3>
                                  <p className="About_Job_Company">
                                    Bhilwara Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Qui minus
                                    culpa quia, beatae facilis nesciunt corrupti
                                    cupiditate molestiae eos sapiente? Ab,
                                    cumque ullam. Labore delectus dolores neque.
                                    Mollitia praesentium magnam, voluptate
                                    officia ullam sequi sunt consectetur
                                    adipisci ducimus deleniti quos aliquid nemo
                                    est totam veniam, beatae, natus eaque
                                    similique consequuntur odit odio! Accusamus,
                                    harum eius.
                                  </p>
                                </div>
                              </div>
                              <div className="Experience_Counter">
                                <div className="Work_Post_And_Date">
                                  <div className="Work_Post">
                                    SENIOR UI DESIGNER
                                  </div>
                                  <div className="Working_Year">
                                    2021 - Present
                                  </div>
                                </div>
                                <div className="Company_Main_Details">
                                  <h3 className="Job_Company_Name">
                                    SR Devops
                                  </h3>
                                  <h3 className="Job_Company_Name_Location">
                                    Bhilwara, Rajasthan
                                  </h3>
                                  <p className="About_Job_Company">
                                    Bhilwara Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Qui minus
                                    culpa quia, beatae facilis nesciunt corrupti
                                    cupiditate molestiae eos sapiente? Ab,
                                    cumque ullam. Labore delectus dolores neque.
                                    Mollitia praesentium magnam, voluptate
                                    officia ullam sequi sunt consectetur
                                    adipisci ducimus deleniti quos aliquid nemo
                                    est totam veniam, beatae, natus eaque
                                    similique consequuntur odit odio! Accusamus,
                                    harum eius.
                                  </p>
                                </div>
                              </div>
                              {/* ****************** */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <Result /> */}
                  </View>
                </Page>
              </Document>
            }
            fileName="result.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </div>
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
                  // createPDF()
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
