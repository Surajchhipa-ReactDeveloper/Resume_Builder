import React, { useState } from "react";
import "./Result.css";
import { Icon } from "../../Constant/IconPath";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";

const ResultTemp = () => {
  const [loader, setLoader] = useState(false);
  // const [start, setStart] = useState(setDownload);

  const form1 = useSelector((state) => state.Form1.formSlice1);
  const form2 = useSelector((state) => state.Form2.formSlice2);
  const form3 = useSelector((state) => state.Form3.formSlice3);
  const EducationData = useSelector(
    (state) => state.FormEducation.formEducationSlice3
  );
  const { facebook, instagram, linkedIn, behance, portfolio } = form3 || {};
  const skills = form2.skills;
  console.log("form 1 >>>", form1.firstName);
  console.log("Form2 >>> ", form2);
  console.log("From 3 normal >>>", form3);
  console.log("FormEducation3 Step 3 >>>", EducationData);
  // console.log("Form 4 Normal >>>" );
  console.log(form3.facebook);
  // console.log("Form 4 experance >>>" );

  const Download = () => {
    const element = document.getElementsByClassName("output_Container");
    if (element) {
      html2pdf().from(element).save();
    } else {
      console.error("Element with ID 'PDF_Container' not found");
    }
  };
  return (
    <>
      <div className="output_Container">
        <div className="Resume_Output_Main_Container " id="PDF_Container">
          <div className="Output_Top_Main_Container">
            <div className="Output_Top_Left_Container">
              <div className="Resume_User_Name"></div>
              <h1 className="Resume_User_Name">
                {`${form1.firstName} ${form1.lastName}`}
              </h1>
              <p className="Resume_User_Work">{form2.title}</p>
            </div>
            <div className="Output_Top_Right_Container">
              <div className="Output_Top_Right_Container_Call">
                <p className="User_Details">{form1.phone}</p>
                <div className="Logo_Common_Container">
                  <img src={Icon.Call_Logo} alt="" className="Resume_Logo" />
                </div>
              </div>
              <div className="Output_Top_Right_Container_Mail">
                <p className="User_Details">{form1.email}</p>
                <div className="Logo_Common_Container">
                  <img src={Icon.Email_Logo} alt="" className="Resume_Logo" />
                </div>
              </div>
              <div className="Output_Top_Right_Container_Adders">
                <p className="User_Details">
                  {`${form1.city} ${form1.state} ${form1.country}`}
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
            <h3 className="Output_Center_Top_Container_Profile">Profile</h3>
            <p className="Output_Center_Bottom_Container_About">
              {form2.description}
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
                  {EducationData === "" &&
                    EducationData.map((Education, index) => (
                      <div className="Education_Outer_Container" key={index}>
                        <div className="Blank_Circle_Box"></div>
                        <div className="Education_Counter_Container">
                          <p className="Education_Start_End_Year">
                            {`${Education.startYear} - ${Education.endYear}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={Download}>DOWNLOAD</button>
    </>
  );
};

export default ResultTemp;

{
  /* <div className="output_Container">
  <div className="Resume_Output_Main_Container black">
    <div className="Output_Top_Main_Container">
      <div className="Output_Top_Left_Container">
        <div className="Resume_User_Name"></div>
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
            {/* ****************** */
}

// <div className="Education_Outer_Container">
//   <div className="Blank_Circle_Box"></div>

//   <div className="Education_Counter_Container">
//     <p className="Education_Start_End_Year">2021 - 2023</p>
//     <p className="Education_Name">
//       Master of Computer Science
//     </p>
//     <p className="Education_From_Palace">MDSU University</p>
//   </div>
// </div>
// <div className="Education_Outer_Container">
//   <div className="Blank_Circle_Box"></div>

//   <div className="Education_Counter_Container">
//     <p className="Education_Start_End_Year">2021 - 2023</p>
//     <p className="Education_Name">
//       Master of Computer Science
//     </p>
//     <p className="Education_From_Palace">MDSU University</p>
//   </div>
// </div>

{
  /* ****************** */
}
//   </div>
// </div>
// <div className="Output_Bottom_Left_Container_Skill">
//   <h3 className="Type_Bottom_Left_Container_Heading">Skills</h3>

//   <div className="Skill_Counter_Container">
//     <div className="Skill_Counter">
//       <div className="Blank_Circle_Box"></div>
//       <h4 className="Skills_Type">UI/UX Designing</h4>
//     </div>
//     {/* ****************** */}

//     <div className="Skill_Counter">
//       <div className="Blank_Circle_Box"></div>
//       <h4 className="Skills_Type">Web Design</h4>
//     </div>
//     <div className="Skill_Counter">
//       <div className="Blank_Circle_Box"></div>
//       <h4 className="Skills_Type">Project Management</h4>
//     </div>
//     <div className="Skill_Counter">
//       <div className="Blank_Circle_Box"></div>
//       <h4 className="Skills_Type">Market Research</h4>
//     </div>

{
  /* ****************** */
}
//           </div>
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
//                 <p className="Media_Name">/the.SurajChhipa</p>
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
//                 <p className="Media_Name">/the.SurajChhipa</p>
//               </div>
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.linkedin_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 <p className="Media_Name">/the.SurajChhipa</p>
//               </div>
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.behance_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 <p className="Media_Name">/the.SurajChhipa</p>
//               </div>
//               <div className="Follow_Counter">
//                 <div className="Follow_Logo_Container">
//                   <img
//                     src={Icon.link_Logo}
//                     alt=""
//                     className="Media_Logo"
//                   />
//                 </div>
//                 <p className="Media_Name">/the.SurajChhipa</p>
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
//           HARD CODE DATA IS READY FOR DATA Experience
//           <div className="Experience_Counter">
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
//           </div>
//           {/* ****************** */}
//           <div className="Experience_Counter">
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
//           </div>
//           <div className="Experience_Counter">
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
//           </div>
//           {/* ****************** */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
