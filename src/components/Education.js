function Edu() {
  return (
      <div id="edu" className="flow-root text-white mx-16 mt-16">
        <div className="float-left">
          <h1 className="mb-10 text-black text-4xl inline font-DM font-black link link-underline link-underline-black">Education <img src={require("../images/edu.gif")} className="inline h-[50px]" ></img></h1>
          <div>
            <div className="float-right text-gray-800">2021 - 2025</div>
            <h1 className="text-black font-ra text-[22px] my-[20px] duration-[300ms] hover:scale-[1.05]"><img src={require("../images/point.gif")} className="w-[20px] h-[20px] inline mr-[5px]"></img>SHIV NADAR UNIVERSITY CHENNAI</h1>
            <h2 className="text-gray-400 my-[5px]">B.Tech. Computer Science & Engineering (Internet of Things)</h2>
            <div className="text-gray-400">CGPA 9.5</div>
          </div>
          <br />
          <div>
            <div className="float-right text-gray-800">2019 - 2021</div>
            <h1 className="text-black font-ra text-[22px] my-[20px] duration-[300ms] hover:scale-[1.05]"><img src={require("../images/point.gif")} className="w-[20px] h-[20px] inline mr-[5px]"></img>SRI VIJAY VIDYASHRAM <br></br>SENIOR SECONDARY SCHOOL</h1>
            <h2 className="text-gray-400 my-[5px]">CBSE</h2>
            <div className="text-gray-400">Grade: 95%</div>
          </div>
        </div>
        <div className="float-right">
          <h1 className="mb-10 text-black text-4xl font-DM inline font-black link link-underline link-underline-black">Experience <img src={require("../images/exp.gif")} className="inline h-[50px]" ></img></h1>
          <div >
            <div className="float-right text-gray-800">Jan 2023- August 2023</div>
            <h1 className="text-black font-ra text-[22px] my-[20px] duration-[300ms] hover:scale-[1.05]"><img src={require("../images/point.gif")} className="w-[20px] h-[20px] inline mr-[5px]"></img>UNIVERISTY WEB DEV INTERN</h1>
            <p className="text-gray-500 my-[10px]">Redesigned the whole University website with figma and used Next Js <br></br>with Tailwind to implement and Mongo DB for Backend alongside a team of 5 students.</p>
            <h2 className="text-gray-900 duration-[300ms] hover:scale-[1.02]">Shiv Nadar University Chennai</h2>
          </div>
          <br />
          <div>
            <div className="float-right text-gray-800">Nov 2022- Dec 2022</div>
            <h1 className="text-black font-ra text-[22px] my-[10px] duration-[300ms] hover:scale-[1.05]"><img src={require("../images/point.gif")} className="w-[20px] h-[20px] inline mr-[5px]"></img>TATA COMMUNICATOINS WEB DEV INTERN</h1>
            <p className="text-gray-400 my-[5px]">Worked on a web game with vanila Js and learnt how the communications are handled on large scale.</p>
            <h2 className="text-gray-900 duration-[300ms] hover:scale-[1.02]">Tata Communications Limited, Chennai</h2>
          </div>
        </div>
      </div>
  );
}
export default Edu;