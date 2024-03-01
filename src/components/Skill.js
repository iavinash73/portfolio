import { Helmet } from "react-helmet";
import postman from "../images/postman.png"
import strapi from "../images/strapi.png"
import AnimatedSection from "./AnimatedSection";
function Skill() {
    var w = window.innerWidth;
    let icons1 = [
        {
            k: 0,
            n: "Figma",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
            k: 1,
            n: "HTML",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"

        },
        {
            k: 2,
            n: "CSS",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"

        },
        {
            k: 3,
            n: "Bootstrap",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        {
            k: 4,
            n: "Tailwind",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          
        },
        {
            k: 5,
            n: "JQuery",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
        },
        {
            k: 6,
            n: "JavaScript",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            k: 7,
            n: "TypeScript",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
        },
        {
            k: 8,
            n: "React Js",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            k: 10,
            n: "Redux Toolkit",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        },
        {
            k: 9,
            n: "Next Js",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        },
    ]
    let icons2 = [
        {
            k: 10,
            n: "MySQL",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        },
        {
            k: 11,
            n: "MongoDB",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        {
            k: 12,
            n: "Neo 4j",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original-wordmark.svg"
        },
        {
            k: 13,
            n: "Express Js",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
            k: 13,
            n: "Redis",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
        },
        {
            k: 14,
            n: "Node Js",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            k: 14,
            n: "Postgres",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        },
        {
            k:14,
            n:"Solidity",
            lnk:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"
        }
    ]
    let icons3 = [
        {
            k: 15,
            n: "Postman",
            lnk: postman
        },
        {
            k: 15,
            n: "Strapi",
            lnk: strapi
        },
        {
            k:16,
            n:"Prisma",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
        },
        {
            k:16,
            n:"Docker",
            lnk:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        },
        {
            k: 15,
            n: "Arduino",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        {
            k: 16,
            n: "RaspberryPi",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
        },
        {
            k: 17,
            n: "Numpy",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
        },
        {
            k: 18,
            n: "Pandas",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
        },
        {
            k: 19,
            n: "Github",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        },
        {
            k: 20,
            n: "Git",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
        },
        {
            k: 21,
            n: "C",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        },
        {
            k: 22,
            n: "C++",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        {
            k: 23,
            n: "Java",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        },
        {
            k: 24,
            n: "Python",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        }
    ]
    return (
        <div id="skills" className="bg-neutral-200">
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js" />
            </Helmet>
            <div className="relative mt-[30px] lg:grid lg:gap-2 lg:grid-cols-2">
                <img src={require("../images/skillz.png")} className="mx-auto justify-center my-auto" />
                <div>
                    <AnimatedSection>
                        <h1 className="text-center font-DM font-bold mt-16 my-[40px] duration-[300ms] hover:scale-[1.025] text-[21px] md:text-[25px] lg:text-[32px] xl:text-4xl">
                            My Tech Stack 🤓
                        </h1>
                    </AnimatedSection>
                    <div className="group relative justify-center grid gap-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 mb-12">
                        {icons1.map((icons1, k) =>
                            <AnimatedSection>
                                <div className="front hover:scale-[1.1] duration-[200ms]">
                                    <p className="text-center font-ra font-black mt-[10px] text-[16px]">
                                        {icons1.n}
                                    </p>
                                    <img src={icons1.lnk} data-tilt data-tilt-max="35" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000" className="my-[4px] mb-[10px] mx-auto drop-shadow-2xl w-[70px] h-[40px] lg:h-[55px] xl:h-[60px]"></img>
                                </div>
                            </AnimatedSection>)}
                        <div></div>
                        <div className="text-neutral-200 text-[20px] opacity-0 duration-[400ms] absolute font-sh lg:top-[110px] lg:left-[-70px] lg:group-hover:text-black lg:group-hover:scale-[1.2] lg:rotate-[-90deg] lg:opacity-100" > Frontend</div>
                    </div>
                    <div className=" group relative justify-center grid gap-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 mb-12">
                        {icons2.map((icons3, k) =>
                            <AnimatedSection>
                                <div className="text-center hover:scale-[1.1] duration-[200ms] ">
                                    <p className="m-auto font-ra font-black mt-[10px] text-[16px]">
                                        {icons3.n}
                                    </p>
                                    <img src={icons3.lnk} data-tilt data-tilt-max="35" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000" className="mx-auto my-[4px] mb-[10px] w-[70px] h-[40px] lg:h-[55px] xl:h-[60px] object-contain"></img>
                                </div>
                            </AnimatedSection>)}
                        <div className="text-neutral-200 opacity-0 duration-[400ms] absolute lg:top-[80px] lg:left-[-70px] font-sh text-[20px] lg:rotate-[-90deg] lg:opacity-100 lg:group-hover:text-black lg:group-hover:scale-[1.2]"> Backend</div>
                    </div>
                    <div className=" group relative justify-center grid gap-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
                        {icons3.map((icons3, k) =>
                            <AnimatedSection>
                                <div className="text-center hover:scale-[1.1] duration-[200ms] ">
                                    <p className="m-auto font-ra font-black mt-[10px] text-[16px]">
                                        {icons3.n}
                                    </p>
                                    <img src={icons3.lnk} data-tilt data-tilt-max="35" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000" className="mx-auto my-[4px] mb-[10px] w-[70px] h-[40px] lg:h-[55px] xl:h-[60px] object-contain"></img>
                                </div>
                            </AnimatedSection>)}
                        <div className="text-neutral-200 opacity-0 duration-[400ms] absolute lg:top-[80px] lg:left-[-70px] font-sh text-[20px] lg:rotate-[-90deg] lg:opacity-100 lg:group-hover:text-black lg:group-hover:scale-[1.2]"> Others</div>
                    </div>
                    <div className="h-[50px]"></div>
                </div>
            </div>
        </div>
    )
}
export default Skill;