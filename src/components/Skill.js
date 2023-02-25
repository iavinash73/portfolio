import { Helmet } from "react-helmet";
function Skill() {
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
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        },
        {
            k: 5,
            n: "",
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
            n: "Node Js",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            k: 9,
            n: "React Js",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            k: 10,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        },
    ]
    let icons2 = [
        {
            k: 11,
            n: "MySQL",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        },
        {
            k: 12,
            n: "MongoDB",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        {
            k: 13,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original-wordmark.svg"
        }
    ]
    let icons3 = [
        {
            k: 14,
            n: "Arduino",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        {
            k: 15,
            n: "RaspberryPi",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
        },
        {
            k: 16,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
        },
        {
            k: 17,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
        },
        {
            k: 18,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        },
        {
            k: 19,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
        },
        {
            k: 20,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        },
        {
            k: 21,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        {
            k: 22,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        },
        {
            k: 23,
            n: "",
            lnk: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        }
    ]
    return (
        <div id="skillz" className="bg-neutral-200">
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js" />
            </Helmet>
            <div className="relative grid gap-2 lg:grid-cols-2 mt-[30px]">
                <img src={require("../images/skillz.png")} className="my-auto h-auto ml-[20px]" />
                <div>
                    <h1 className="text-center font-DM font-black text-4xl mt-16 my-[40px] duration-[300ms] hover:scale-[1.07]">
                        My Tech Stack 🤓
                    </h1>
                    <div className="group justify-center grid gap-2 lg:grid-cols-6">
                        {icons1.map((icons1, k) =>
                            <div className="front hover:scale-[1.1] duration-[200ms]">
                                <p className="text-center font-ra font-black mt-[10px]">
                                    {icons1.n}
                                </p>
                                <img src={icons1.lnk} data-tilt data-tilt-max="35" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000" className="drop-shadow-2xl w-[70px] h-[70px] my-[4px] mb-[10px] mx-auto"></img>
                            </div>)}
                        <div className="text-neutral-200 duration-[400ms] group-hover:text-black group-hover:scale-[1.2] absolute top-[260px] left-[660px] font-sh rotate-[-90deg] text-[20px]" > Frontend</div>
                        <div></div>
                    </div>
                    <div className="group justify-center grid gap-2 lg:grid-cols-6">
                        {icons2.map((icons2, k) =>
                            <div className="text-center hover:scale-[1.1] duration-[200ms] ">
                                <p className="m-auto font-ra font-black mt-[60px]">
                                    {icons2.n}
                                </p>
                                <img src={icons2.lnk} data-tilt data-tilt-max="35" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000" className="mx-auto w-[70px] h-[70px] my-[4px] mb-[60px]"></img>
                            </div>)}
                        <div className="text-neutral-200 duration-[400ms] group-hover:text-black group-hover:scale-[1.2]  absolute top-[480px] left-[660px] font-sh rotate-[-90deg] text-[20px]"> Backend</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className=" group justify-center grid gap-2 lg:grid-cols-6">
                        {icons3.map((icons3, k) =>
                            <div className="text-center hover:scale-[1.1] duration-[200ms] ">
                                <p className="m-auto font-ra font-black mt-[10px]">
                                    {icons3.n}
                                </p>
                                <img src={icons3.lnk} data-tilt data-tilt-max="35" data-tilt-speed="1000" data-tilt-reverse="true" data-tilt-perspective="3000" className="mx-auto w-[70px] h-[70px] my-[4px] mb-[10px]"></img>
                            </div>)}
                            <div className="text-neutral-200 duration-[400ms] group-hover:text-black group-hover:scale-[1.2] absolute top-[700px] left-[660px] font-sh rotate-[-90deg] text-[20px]"> Others</div>
                    </div>
                    <div className="h-[50px]"></div>
                </div>
            </div>
        </div>
    )
}
export default Skill;