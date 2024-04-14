import React, { useState } from "react";
// import "./Result.css";
import { Icon } from "../../Constant/IconPath";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";

const ResultTemp = () => {
  const [loader, setLoader] = useState(false);
  // const [start, setStart] = useState(setDownload);

  const form1 = useSelector((state) => state.Form1.formSlice1);
  const form2 = useSelector((state) => state.Form2.formSlice2);
  const form3 = useSelector((state) => state.Form3.formSlice3);
  const EducationData = useSelector(
    (state) => state.FormEducation.formEducationSlice3
  );
  const experienceData = useSelector(
    (state) => state.FormExperience.formExperienceSlice4
  );

  console.log(" ExperienceData >>>", experienceData);
  const { facebook, instagram, linkedIn, behance, portfolio } = form3 || {};
  const skills = form2.skills;
  console.log("form 1 >>>", form1.firstName);
  console.log("Form2 >>> ", form2);
  console.log("From 3 normal >>>", form3);
  console.log("FormEducation3 Step 3 >>>", EducationData);
  // console.log("Form 4 Normal >>>" );
  console.log(form3.facebook);
  // console.log("Form 4 experance >>>" );

  // const Download = () => {
  //   const element = document.getElementById("PDF_Container");
  //   if (element) {
  //     html2pdf().from(element).save();
  //   } else {k
  //     console.error("Element with ID 'PDF_Container' not found");
  //   }
  // };

  const generatePDF = () => {
    // Define the HTML content with inline CSS
    const html = `
    <div className="output_Container" id="PDF_Container" style=" display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4rem;">
        <div className="Resume_Output_Main_Container " style=" display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: baseline;
  width: 100%;
  gap: 5rem;">
          <div className="Output_Top_Main_Container" style=" display: flex;
  align-items: center;
  justify-content: space-between;">
            <div className="Output_Top_Left_Container">
              <div className="Resume_User_Name" style="  font-family: "Questrial-Regular";
  color: #707070;
  font-size: 3.5rem;
  line-height: 2.5rem;"></div>
              <h1 className="Resume_User_Name" style="  font-size: 8.5rem;
  line-height: 7.5rem;
  padding-bottom: 2rem;
  font-family: "Questrial-Regular";">
                {${form1.firstName} ${form1.lastName}}
              </h1>
              <p className="Resume_User_Work" style="  font-family: "Questrial-Regular";
  color: #707070;
  font-size: 3.5rem;
  line-height: 2.5rem;">{form2.title}</p>
            </div>
            <div className="Output_Top_Right_Container"style=" display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;">
              <div className="Output_Top_Right_Container_Call">
                <p className="User_Details" style="font-size: 2.5rem;
  line-height: 3.4rem;
  font-family: "Questrial-Regular";">{form1.phone}</p>
                <div className="Logo_Common_Container" style="  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(128, 128, 128, 0.166);
  border-radius: 50%;" >
                  <img src={Icon.Call_Logo} alt="" className="Resume_Logo" style="  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;" />
                </div>
              </div>
              <div className="Output_Top_Right_Container_Mail">
                <p className="User_Details">{form1.email}</p>
                <div className="Logo_Common_Container" style="  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(128, 128, 128, 0.166);
  border-radius: 50%;">
                  <img src={Icon.Email_Logo} alt="" className="Resume_Logo" style="  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;" />
                </div>
              </div>
              <div className="Output_Top_Right_Container_Adders">
                <p className="User_Details">
                  {${form1.city} ${form1.state} ${form1.country}}
                </p>
                <div className="Logo_Common_Container" style="  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(128, 128, 128, 0.166);
  border-radius: 50%;">
                  <img
                    src={Icon.Location_Logo}
                    alt=""
                    className="Resume_Logo" style="  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Output_Center_Main_Container" style="display: flex;
  flex-direction: column;
  gap: 2rem;">
            <h3 className="Output_Center_Top_Container_Profile" style=" font-size: 3rem;
  line-height: 2rem;
  font-family: "Poppins-Medium";">Profile</h3>
            <p className="Output_Center_Bottom_Container_About" style=" font-size: 2.5rem;
  line-height: 3.5rem;
  font-family: "Questrial-Regular";
  color: #000000;
  opacity: 51%;">
              {form2.description}
            </p>
          </div>
          <div className="Output_Center_Blank_Line_Main_Container" style="  margin: 1rem 0rem;
  border: 1.5px solid gray;
  border-radius: 50%;
  opacity: 10%;"></div>

          <div className="Output_Bottom_Main_Container">
            <div className="Output_Bottom_Left_Container ">
              <div className="Output_Bottom_Left_Container_Education">
                <h3 className="Type_Bottom_Left_Container_Heading">
                  Education
                </h3>
                <div className="Education_Type_Container">
                  {EducationData === "" &&
                    EducationData.map((Education, index) => (
                      <div className="Education_Outer_Container" key={index}>
                        <div className="Blank_Circle_Box"></div>
                        <div className="Education_Counter_Container">
                          <p className="Education_Start_End_Year">
                            {{Education.startYear} - {Education.endYear}}
                          </p>
                          <p className="Education_Name">{Education.course}</p>
                          <p className="Education_From_Palace">
                            {Education.institute}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                {/* ****************** */}
              </div>
              <div className="Output_Bottom_Left_Container_Skill">
                <h3 className="Type_Bottom_Left_Container_Heading">Skills</h3>
                {/* ****************** */}

                <div className="Skill_Counter_Container">
                  {skills?.map((skill, index) => (
                    <div className="Skill_Counter" key={index}>
                      <div className="Blank_Circle_Box"></div>
                      <h4 className="Skills_Type">{skill}</h4>
                    </div>
                  ))}
                </div>
                {/* ****************** */}
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
                      {facebook && <p className="Media_Name">{facebook}</p>}
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
                      {instagram && <p className="Media_Name">{instagram}</p>}
                    </div>
                    <div className="Follow_Counter">
                      <div className="Follow_Logo_Container">
                        <img
                          src={Icon.linkedin_Logo}
                          alt=""
                          className="Media_Logo"
                        />
                      </div>
                      {linkedIn && <p className="Media_Name">{linkedIn}</p>}
                    </div>
                    <div className="Follow_Counter">
                      <div className="Follow_Logo_Container">
                        <img
                          src={Icon.behance_Logo}
                          alt=""
                          className="Media_Logo"
                        />
                      </div>
                      {behance && <p className="Media_Name">{behance}</p>}
                    </div>
                    <div className="Follow_Counter">
                      <div className="Follow_Logo_Container">
                        <img
                          src={Icon.link_Logo}
                          alt=""
                          className="Media_Logo"
                        />
                      </div>
                      {portfolio && <p className="Media_Name">{portfolio}</p>}
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
                {experienceData &&
                  experienceData.map((experience, index) => (
                    <div className="Experience_Counter" key={index}>
                      <div className="Work_Post_And_Date">
                        <div className="Work_Post">{experience.jobProfile}</div>
                        <div className="Working_Year">
                          {{experience.startYear} - {experience.endYear}}
                        </div>
                      </div>
                      <div className="Company_Main_Details">
                        <h3 className="Job_Company_Name">
                          {experience.companyName}
                        </h3>
                        <h3 className="Job_Company_Name_Location">
                          {experience.location}
                        </h3>
                        <p className="About_Job_Company">
                          {experience.jobDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                {/* ****************** */}
                {/* <div className="Experience_Counter">
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
                </div> */}
                {/* <div className="Experience_Counter">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add HTML content to the PDF with additional options including CSS
    doc.html(html, {
      callback: function (pdf) {
        // Save or download the PDF
        pdf.save("resume.pdf");
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.35 }, // Adjust scale if needed
    });
  };

  return (
    <>
      <button onClick={generatePDF}>DOWNLOAD</button>
    </>
  );
};

export default ResultTemp;

// <div className="output_Container" id="PDF_Container">
//   <div className="Resume_Output_Main_Container ">
//     <div className="Output_Top_Main_Container">
//       <div className="Output_Top_Left_Container">
//         <div className="Resume_User_Name"></div>
//         <h1 className="Resume_User_Name">
//           {`${form1.firstName} ${form1.lastName}`}
//         </h1>
//         <p className="Resume_User_Work">{form2.title}</p>
//       </div>
//       <div className="Output_Top_Right_Container">
//         <div className="Output_Top_Right_Container_Call">
//           <p className="User_Details">{form1.phone}</p>
//           <div className="Logo_Common_Container">
//             <img src={Icon.Call_Logo} alt="" className="Resume_Logo" />
//           </div>
//         </div>
//         <div className="Output_Top_Right_Container_Mail">
//           <p className="User_Details">{form1.email}</p>
//           <div className="Logo_Common_Container">
//             <img src={Icon.Email_Logo} alt="" className="Resume_Logo" />
//           </div>
//         </div>
//         <div className="Output_Top_Right_Container_Adders">
//           <p className="User_Details">
//             {`${form1.city} ${form1.state} ${form1.country}`}
//           </p>
//           <div className="Logo_Common_Container">
//             <img
//               src={Icon.Location_Logo}
//               alt=""
//               className="Resume_Logo"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="Output_Center_Main_Container">
//       <h3 className="Output_Center_Top_Container_Profile">Profile</h3>
//       <p className="Output_Center_Bottom_Container_About">
//         {form2.description}
//       </p>
//     </div>
//     <div className="Output_Center_Blank_Line_Main_Container"></div>

//     <div className="Output_Bottom_Main_Container">
//       <div className="Output_Bottom_Left_Container ">
//         <div className="Output_Bottom_Left_Container_Education">
//           <h3 className="Type_Bottom_Left_Container_Heading">
//             Education
//           </h3>
//           <div className="Education_Type_Container">
//             {EducationData === "" &&
//               EducationData.map((Education, index) => (
//                 <div className="Education_Outer_Container" key={index}>
//                   <div className="Blank_Circle_Box"></div>
//                   <div className="Education_Counter_Container">
//                     <p className="Education_Start_End_Year">
//                       {`${Education.startYear} - ${Education.endYear}`}
//                     </p>
//                     <p className="Education_Name">{Education.course}</p>
//                     <p className="Education_From_Palace">
//                       {Education.institute}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//           {/* ****************** */}
//         </div>
//         <div className="Output_Bottom_Left_Container_Skill">
//           <h3 className="Type_Bottom_Left_Container_Heading">Skills</h3>
//           {/* ****************** */}

//           <div className="Skill_Counter_Container">
//             {skills?.map((skill, index) => (
//               <div className="Skill_Counter" key={index}>
//                 <div className="Blank_Circle_Box"></div>
//                 <h4 className="Skills_Type">{skill}</h4>
//               </div>
//             ))}
//           </div>
//           {/* ****************** */}
//         </div>
//         <div className="Output_Bottom_Left_Container_FollowMe">
//           <h3 className="Type_Bottom_Left_Container_Heading">
//             Follow Me
//           </h3>
//           <div className="Follow_Counter_Container">
//             <div className="Follow_Type">
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.FaceBook_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 {facebook && <p className="Media_Name">{facebook}</p>}
//               </div>

//               {/* ****************** */}

//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.Instagram_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 {instagram && <p className="Media_Name">{instagram}</p>}
//               </div>
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.linkedin_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 {linkedIn && <p className="Media_Name">{linkedIn}</p>}
//               </div>
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.behance_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 {behance && <p className="Media_Name">{behance}</p>}
//               </div>
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.link_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 {portfolio && <p className="Media_Name">{portfolio}</p>}
//               </div>

//               {/* ****************** */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Output_Bottom_Center_Container"></div>
//       <div className="Output_Bottom_Right_Container ">
//         <h3 className="Type_Bottom_Left_Container_Heading">Experience</h3>
//         <div className="Experience_Type_Container">
//           {experienceData &&
//             experienceData.map((experience, index) => (
//               <div className="Experience_Counter" key={index}>
//                 <div className="Work_Post_And_Date">
//                   <div className="Work_Post">{experience.jobProfile}</div>
//                   <div className="Working_Year">
//                     {`${experience.startYear} - ${experience.endYear}`}
//                   </div>
//                 </div>
//                 <div className="Company_Main_Details">
//                   <h3 className="Job_Company_Name">
//                     {experience.companyName}
//                   </h3>
//                   <h3 className="Job_Company_Name_Location">
//                     {experience.location}
//                   </h3>
//                   <p className="About_Job_Company">
//                     {experience.jobDescription}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           {/* ****************** */}
//           {/* <div className="Experience_Counter">
//             <div className="Work_Post_And_Date">
//               <div className="Work_Post">SENIOR UI DESIGNER</div>
//               <div className="Working_Year">2021 - Present</div>
//             </div>
//             <div className="Company_Main_Details">
//               <h3 className="Job_Company_Name">SR Devops</h3>
//               <h3 className="Job_Company_Name_Location">
//                 Bhilwara, Rajasthan
//               </h3>
//               <p className="About_Job_Company">
//                 Bhilwara Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Qui minus culpa quia, beatae facilis
//                 nesciunt corrupti cupiditate molestiae eos sapiente? Ab,
//                 cumque ullam. Labore delectus dolores neque. Mollitia
//                 praesentium magnam, voluptate officia ullam sequi sunt
//                 consectetur adipisci ducimus deleniti quos aliquid nemo
//                 est totam veniam, beatae, natus eaque similique
//                 consequuntur odit odio! Accusamus, harum eius.
//               </p>
//             </div>
//           </div> */}
//           {/* <div className="Experience_Counter">
//             <div className="Work_Post_And_Date">
//               <div className="Work_Post">SENIOR UI DESIGNER</div>
//               <div className="Working_Year">2021 - Present</div>
//             </div>
//             <div className="Company_Main_Details">
//               <h3 className="Job_Company_Name">SR Devops</h3>
//               <h3 className="Job_Company_Name_Location">
//                 Bhilwara, Rajasthan
//               </h3>
//               <p className="About_Job_Company">
//                 Bhilwara Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Qui minus culpa quia, beatae facilis
//                 nesciunt corrupti cupiditate molestiae eos sapiente? Ab,
//                 cumque ullam. Labore delectus dolores neque. Mollitia
//                 praesentium magnam, voluptate officia ullam sequi sunt
//                 consectetur adipisci ducimus deleniti quos aliquid nemo
//                 est totam veniam, beatae, natus eaque similique
//                 consequuntur odit odio! Accusamus, harum eius.
//               </p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
