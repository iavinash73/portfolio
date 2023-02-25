import { useState } from "react";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full">
      <div className="justify-between px-20 mx-auto lg:max-w-7xl md:items-center md:flex md:px-20 pt-5">
          <div className="relative flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <img src={require("../images/coding.gif")} className="absolute left-0 top-6 h-10 w-10"></img>
              <h1 className="text-[25px] font-so font-black text-sec-white pl-12 pt-1">Avinash ;</h1>
            </a>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
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
                <a  href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank">Let's Talk!</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
