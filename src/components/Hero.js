import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
function Hero() {
    return (
        <div className="relative md:mt-[120px]">
            <img src={require("../images/Background.jpeg")} className="h-[41rem] w-11/12 mt-10 rounded-[12px] mx-auto sm:h-[42rem] md:h-[45rem] lg:h-[33rem] xl:h-[39rem]" />
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js" />
            </Helmet>
            <img src={require("../images/port.jpeg")} className="absolute h-[18rem] mx-[40px] top-[20px] object-cover brightness-[0.9] w-10/12 rounded-xl drop-shadow-2xl sm:w-10/12 sm:mx-[60px] sm:h-[20rem] sm:top-[20px] sm:rounded-xl md:w-10/12 md:mx-[70px] md:mt-[20px] lg:w-auto lg:right-[0px] lg:h-[28rem] lg:rounded-2xl xl:h-[34rem] xl:right-[20px] 2xl:right-[60px]" data-tilt data-tilt-max="10" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000"></img>
            <div className="absolute top-[330px] left-[50px] sm:top-[370px] md:top-[400px] lg:absolute lg:top-[115px] lg:left-[70px] xl:left-[70px] 2xl:left-[100px]">
                <div className="relative font-ra font-black text-[18px] left-[10px] md:text-[22px] lg:text-[26px] xl:text-[28px]">
                    Hello, world!👇🏻
                </div>
                <div className="relative font-fr left-[10px] text-[35px] md:text-[39px] lg:text-[44px] xl:text-[60px]">
                    I'm Avinash
                </div>
                <div className="App font-so text-[30px] md:text-[34px] lg:text-[39px] xl:text-[50px]">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("<Frontend")
                                .pauseFor(50)
                                .deleteChars(8)
                                .typeString("Backend")
                                .pauseFor(50)
                                .deleteChars(7)
                                .typeString("Full Stack Developer/>")
                                .start();
                        }}
                    />
                </div>
                <a href="mailto:avinash21110230@snuchennai.edu.in" target="blank">
                    <div className="relative mt-[40px] font-sh text-[16px] md:text-[18px] lg:left-[10px] lg:mt-[40px] xl:text-[20px]">
                        avinash21110230@snuchennai.edu.in
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank" class="relative left-[15px] top-[30px] inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="text-[16px] relative text-black group-hover:text-white">Let's talk</span>
                </a>
                <a href="https://drive.google.com/file/d/1y3s3MItfGVRFW0dDqBChlMBPcder2EVO/view?usp=sharing"  target="_blank" class="relative left-[65px] top-[30px] inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="text-[16px] relative text-black group-hover:text-white">Resume</span>
                </a>
            </div>
        </div>
    )
}
export default Hero;