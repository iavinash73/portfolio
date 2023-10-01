import { useState } from "react";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full">
      <div className="justify-between px-12 mx-auto pt-5 md:items-center md:flex md:px-20 lg:px-20 lg:max-w-7xl">
        <div className="relative flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#">
            <img src={require("../images/coding.gif")} className="absolute left-[16px] top-6 h-[25px] md:left-[10px] md:h-[35px] lg:left-0 lg:h-10 lg:w-10"></img>
            <h1 className="text-[18px] font-so font-black text-sec-white pl-12 pt-3 md:pt-1 md:text-[22px] lg:text-[25px] ">Avinash ;</h1>
          </a>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
              <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
                <a href="#edu">Experience</a>
              </li>
              <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
                <a href="#skillz">My Skills</a>
              </li>
              <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
                <a href="#projects">Projects</a>
              </li>
              <li className="font-so text-black duration-[300ms] hover:scale-[1.1] hover:text-slate-400">
                <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank">Let's Talk!</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
