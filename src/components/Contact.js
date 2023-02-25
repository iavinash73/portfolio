function Contact() {
    return (
        <div id="contact" className="relative">
            <img src={require("../images/contact.png")} className="rounded-4xl mx-auto h-[22rem] w-9/12 mt-[50px]"></img>
            <h2 className="absolute top-[50px] left-[350px] font-fr font-black text-sky-800 text-[37px]">Wanna know more about me ? Let's get in touch</h2>
            <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" class="absolute top-[140px] left-[650px] inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-[600ms] origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Contact me :)</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            <div className="absolute group top-[230px] left-[280px] font-ca text-[20px]">
                <img className="inline h-[30px] mx-[15px] my-[20px]" src={require("../images/phone.png")}></img>
                Call me
                <div className="group-hover:text-black group-hover:scale-[1.2] inline text-gray-500 duration-[400ms] mx-[32px]">+91 9080681237</div>
            </div>
            <div className="group absolute top-[280px] left-[280px] font-ca text-[20px]">
                <img className="inline h-[30px] mx-[15px] my-[20px]" src={require("../images/mail.png")}></img>
                Mail me
                <div className="text-gray-500 mx-[20px] duration-[400ms] group-hover:text-black group-hover:scale-[1.2] inline">avinashcube@gmail.com</div>
            </div>
            <div className="h-[40px]"></div>
            <a href="https://www.linkedin.com/in/avinash-pr-0b98a8220/" target="_blank"><img src={require("../images/linkedin.png")} className="absolute top-[310px] right-[200px] h-[30px] inline"></img></a>
            <a href="https://github.com/iavinash73" target="_blank"><img src={require("../images/github.png")} className="absolute top-[310px] right-[250px] h-[30px] inline"></img></a>
        </div>
    )
}
export default Contact;