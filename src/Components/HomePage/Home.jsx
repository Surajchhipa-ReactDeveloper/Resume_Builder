import React from "react";
import "./Home.css";
import { Icon } from "../../Constant/IconPath";
import NextButton from "../Common/NextButton/NextButton";
import { Images } from "../../Constant/ImgPath";
const Home = () => {
  return (
    <>
      <div className="Home_Page_Container">
        <div className="Left_Side_Container ">
          <div className="Main_Logo_Resume_Builder">
            <img src={Icon.MainLogo} alt="" className="MainLOgo" />
          </div>
          <div className="Home_Page_Item_Container">
            <div className="Home_Page_Rocket">
              <img src={Icon.Rocket} alt="" className="RocketLogo" />
            </div>
            <div className="Home_Page_SubHeading">Boost your chances to</div>
            <div className="Home_Page_Heading">
              Land That <span>Dream Job!</span>
            </div>
            <div className="Home_Page_Title">
              An average employer will spend not more than 10 seconds on average
              reading a candidate’s resume, so it’s important to make the right
              impression as quickly as possible.
            </div>
            <div className="Home_Page_Button">
              <NextButton />
            </div>
          </div>
        </div>
        <div className="Right_Side_Container ">
          <img src={Images.MainHome} alt="" className="HomeImg" />
          {/* <div className="Right_Side_Img"></div> */}
          <p className="DeveloperName">Made By Suraj Chhipa With ❤️</p>
        </div>
        <div className="DeveloperContact">
          <p className="DeveloperNameMobile">
            Made By <span className="CoderName">Suraj Chhipa </span>With ❤️
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
