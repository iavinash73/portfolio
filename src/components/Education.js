import AnimatedSection from "./AnimatedSection"
function Edu() {
  return (
    <div
      id="edu"
      className="text-white mt-[30px] md:mt-[50px] lg:grid lg:gap-2 lg:grid-cols-2 lg:mt-[20px] lg:mx-[10px]"
    >
      <div className="ml-[30px] sm:mt-[40px] lg:ml-[30px] lg:float-left">
        <AnimatedSection>
          <h1 className="mb-10 text-black text-[21px] inline font-black font-DM link link-underline link-underline-black md:text-[25px] lg:text-[32px] xl:text-4xl">
            Education{" "}
            <img
              src={require("../images/edu.gif")}
              className="inline h-[35px] md:h-[45px] lg:h-[50px] xl:h-[60px]"
            ></img>
          </h1>
        </AnimatedSection>
        <div>
          <AnimatedSection>
            <div className="float-right text-[18px] text-gray-800 mx-[20px]">
              2021 - present
            </div>
            <h1 className="text-black font-ra text-[18px] my-[20px] duration-[300ms] hover:scale-[1.02] lg:hover:scale-[1.05] lg:text-[20px]">
              <img
                src={require("../images/point.gif")}
                className="w-[20px] h-[20px] inline mr-[5px]"
              ></img>
              SHIV NADAR UNIVERSITY CHENNAI
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-gray-400 my-[5px] text-[16px] xl:text-[18px]">
              B.Tech in Computer Science & Engineering (Internet of Things)
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="text-gray-400 text-[16px] xl:text-[18px]">
              CGPA 9.5
            </div>
          </AnimatedSection>
        </div>
        <br />
        <div>
          <AnimatedSection>
            <div className="float-right text-gray-800 mx-[20px] text-[18px]">
              2019 - 2021
            </div>
            <h1 className="text-black font-ra text-[18px] my-[20px] duration-[300ms] hover:scale-[1.02] lg:hover:scale-[1.05] lg:text-[20px] ">
              <img
                src={require("../images/point.gif")}
                className="w-[20px] h-[20px] inline mr-[5px]"
              ></img>
              SRI VIJAY VIDYASHRAM <br></br>SENIOR SECONDARY SCHOOL
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-gray-400 my-[5px] text-[16px] xl:text-[18px]">
              CBSE
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="text-gray-400 text-[16px] xl:text-[18px]">
              Percentage: 95%
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="ml-[30px] mt-[40px] lg:ml-[20px] lg:float-right">
        <AnimatedSection>
          <h1 className="mb-10 text-black text-[21px] font-DM inline font-black link link-underline link-underline-black md:text-[25px] lg:text-[32px] xl:text-4xl">
            Experience{" "}
            <img
              src={require("../images/exp.gif")}
              className="inline h-[50px] md:h-[45px] lg:h-[50px] xl:h-[60px]"
            ></img>
          </h1>
        </AnimatedSection>
        <div>
          <AnimatedSection>
            <div className="float-right text-gray-800 mx-[20px] text-[18px]">
              Jan 2023- Present
            </div>
            <h1 className="text-black font-ra text-[18px] my-[10px] duration-[300ms] hover:scale-[1.02] lg:hover:scale-[1.05] lg:text-[20px]">
              <img
                src={require("../images/point.gif")}
                className="w-[20px] h-[20px] inline mr-[5px]"
              ></img>
              UNIVERISTY WEB DEV INTERN
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-gray-600 duration-[300ms] ml-[24px] hover:scale-[1.01] lg:hover:scale-[1.01] text-[16px] xl:text-[18px]">
              Shiv Nadar University, Chennai
            </h2>
          </AnimatedSection>
          <p className="text-gray-400 my-[10px] text-[16px] xl:text-[18px]">
            <ul>
              <AnimatedSection>
                <li className=" my-[5px]">
                  <img
                    src={require("../images/list.png")}
                    className="h-[8px] mr-[10px] inline opacity-[0.5]"
                  ></img>
                  Redesigned official university website.
                </li>
              </AnimatedSection>
              <AnimatedSection>
                <li className=" my-[5px]">
                  <img
                    src={require("../images/list.png")}
                    className="h-[8px] mr-[10px] inline opacity-[0.5]"
                  ></img>
                  Revamped university website by migrating from Wordpress to NextJS with Tailwind CSS.
                </li>
              </AnimatedSection>
              <AnimatedSection>
                <li className=" my-[5px]">
                  <img
                    src={require("../images/list.png")}
                    className="h-[8px] mr-[10px] inline opacity-[0.5]"
                  ></img>
                  Integrated Strapi CMS to streamline content management.
                </li>
              </AnimatedSection>
              <AnimatedSection>
                <li className=" my-[5px]">
                  <img
                    src={require("../images/list.png")}
                    className="h-[8px] mr-[10px] inline opacity-[0.5]"
                  ></img>
                  Developed and maintained a parents portal
                </li>
              </AnimatedSection>
            </ul>
          </p>
        </div>
        <br />
        <div>
          <AnimatedSection>
            <div className="float-right text-gray-800 mx-[20px] text-[18px]">
              Nov 2022- Dec 2022
            </div>
            <h1 className="text-black font-ra text-[18px] my-[10px] duration-[300ms] hover:scale-[1.02] lg:hover:scale-[1.05] lg:text-[20px]">
              <img
                src={require("../images/point.gif")}
                className="w-[20px] h-[20px] inline mr-[5px]"
              ></img>
              TATA COMMUNICATOINS WEB DEV INTERN
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-gray-600 duration-[300ms] ml-[24px] hover:scale-[1.01] lg:hover:scale-[1.01] text-[16px] xl:text-[18px]">
              Tata Communications Limited, Chennai
            </h2>
          </AnimatedSection>
          <p className="text-gray-400 my-[5px] text-[16px] xl:text-[18px]">
            <ul>
              <AnimatedSection>
                <li className=" my-[5px]">
                  <img
                    src={require("../images/list.png")}
                    className="h-[8px] mr-[10px] inline opacity-[0.5]"
                  ></img>
                  Developed a web game with HTML, CSS, Js, SQLAlchemy, Flask.
                </li>
              </AnimatedSection>
              <AnimatedSection>
                <li className=" my-[5px]">
                  <img
                    src={require("../images/list.png")}
                    className="h-[8px] mr-[10px] inline opacity-[0.5]"
                  ></img>
                  Created custom components for the company’s website.
                </li>
              </AnimatedSection>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Edu;
