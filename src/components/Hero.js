import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";
function Hero() {
    return (
        <div className="relative">
            <img src={require("../images/Background.jpeg")} className="rounded-[12px] mx-auto h-[42rem] w-11/12 mt-10" />
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js" />
            </Helmet>
            <img src={require("../images/port.jpeg")} className="rounded-2xl brightness-[0.95] drop-shadow-2xl h-[35rem] absolute right-[100px] top-[55px]" data-tilt data-tilt-max="10" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000"></img>
            <div className="absolute top-[165px] left-[140px]">
                <div className="relative left-[10px] font-ra font-black text-[28px]">
                    Hello, world!👇🏻
                </div>
                <div className="relative left-[10px] text-[60px] font-fr ">
                    I'm Avinash
                </div>
                <div className="App text-[50px] font-so">
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
                <div className="relative left-[10px] font-sh text-[20px] mt-[75px]">
                    avinash21110230@snuchennai.edu.in
                </div>
                <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank" class="relative left-[15px] top-[30px] inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="relative text-black group-hover:text-white">Let's talk</span>
                </a>
                <a href="https://drive.google.com/file/d/1vuS1gX9Oy5-7lxWzqwwZ1jBQ-zko8NNc/view?usp=sharing" target="_blank" class="relative left-[65px] top-[30px] inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="relative text-black group-hover:text-white">Resume</span>
                </a>
            </div>
        </div>
    )
}
export default Hero;