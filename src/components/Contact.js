import AnimatedSection from "./AnimatedSection";

function Contact() {
  return (
    <div id="contact" >
      <div className="bg-neutral-200 p-[20px] mt-[30px] pt-[40px]">
        <AnimatedSection>
          <div className="font-fr text-center font-black text-sky-800 text-[21px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
            Wanna know more about me ? Let's get in touch <br></br>
            <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank" class="relative mt-[30px] inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Contact me</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>
        </AnimatedSection>
        <div className="text-left ml-[10px] sm:text-center">
          <AnimatedSection>
            <div className="group mt-[30px] font-ca text-[16px] md:text-[20px]">
              <img
                className="inline h-[30px] sm:mx-[15px] my-[20px]"
                src={require("../images/phone.png")}
              ></img>
              <span className="hidden sm:inline">Call me</span>
              <div className="group-hover:text-black ml-[10px] group-hover:scale-[1.2] inline text-gray-500 duration-[400ms] mx-[32px]">
                +91 9080681237
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="group mb-[10px] font-ca text-[16px] md:text-[20px] lg:top-[230px] lg:left-[280px]">
              <img
                className="inline h-[30px] sm:mx-[15px] my-[20px]"
                src={require("../images/mail.png")}
              ></img>
              <span className="hidden sm:inline">Mail</span>
              <a href="mailto:avinash21110230@snuchennai.edu.in" target="blank">
                <div className="text-gray-500 ml-[10px] duration-[400ms] group-hover:text-black group-hover:scale-[1.2] inline">
                  avinash21110230@snuchennai.edu.com
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="text-center ">
          <AnimatedSection>
            <a
              href="https://www.linkedin.com/in/avinash-pr-0b98a8220/"
              target="_blank"
            >
              <img
                src={require("../images/linkedin.png")}
                className="mb-[20px] mx-[20px] h-[30px] inline duration-[400ms] hover:scale-[1.2]"
              ></img>
            </a>
            <a href="https://github.com/iavinash73" target="_blank">
              <img
                src={require("../images/github.png")}
                className="mb-[20px] h-[30px] inline duration-[400ms] hover:scale-[1.2]"
              ></img>
            </a>
          </AnimatedSection>
        </div>
      </div>
      <div className="bg-black text-slate-200 font-so text-right py-[10px] pr-[15px] md:mt-[0]">
        Made with REACT Js and Tailwind CSS by Avinash.
      </div>
    </div>
  );
}
export default Contact;
