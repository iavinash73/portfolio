import AnimatedSection from "./AnimatedSection";

function Projects() {
    let Data = [
        {
            k: 3,
            p_img: "expense.jpeg",
            p_title: "Spend-o-Meter",
            p_des: "A feature-rich expense tracker enabling effortless expense organization, goal-setting, and savings tracking. Seamlessly manage recurring payments, subscriptions, and even collaborate with friends for shared financial visibility and accountability.",
            p_link: "https://github.com/iavinash73/Spend-o-Meter",
            p_stack: "ReactJs | NodeJs | MongoDB | Redux Toolkit | TailwindCSS"
        },
        {
            k: 4,
            p_img: "chat.avif",
            p_title: "ChatoSphere",
            p_des: "A real-time chat application built using Next.js 13 with App Router, Redis as a database, and Pusher.js for real-time updates. Showcases the power of modern web technologies to create a seamless and responsive chat experience with user authentication provided by NextAuth.",
            p_link: "https://github.com/iavinash73/Chatosphere",
            p_stack: "NextJs | Redis | Pusher | NextAuth | TailwindCSS"
        },
        {
            key: 0,
            p_img: "weedinator.webp",
            p_title: "Weedinator",
            p_des: "Designed to detect weeds in real-time video streams. It includes a dashboard for viewing live video feeds with weed detection overlays, an analytics page with charts generated using Chart.js, and a visualization of weed concentrations on an OpenStreetMap.",
            p_link: "https://github.com/iavinash73/Weedinator",
            p_stack: "ReactJs | NodeJs | Roboflow | OpenStreetMap | TailwindCSS | Supabase"
        },
        {
            k: 1,
            p_img: "movie.jpeg",
            p_title: "Movie Recommendation system",
            p_des: "A system which would recommend movie from global dataset with matching users rating on watched movies and predicting movies which they would possibly like based on related user ratings.",
            p_link: "https://github.com/iavinash73/Movie-Recommendation-System",
            p_stack: "Python | Pandas | Numpy | Neo4j"
        },
        {
            key: 0,
            p_img: "eyestick.jpeg",
            p_title: "EyeStick",
            p_des: "A Smart Cane for visually impared which would assist them the way by detecting obstacles,potholes,Bus Number in bus stop,monitor health and location of the user to gaurdian's phone.",
            p_link: "https://github.com/iavinash73/EyeStick",
            p_stack: "Neo-6M GPS | SIM900 GSM | HC-SR04 | Arduino | OpenCV"
        },
        {
            k: 2,
            p_img: "maze.jpeg",
            p_title: "Maze",
            p_des: "A maze game with HTML,CSS and vanilla Js which can be a stress buster for workers in their free time.SQLalchemy is used to store the user data and Flask is used to connect DB with frontend and work as middleware.",
            p_link: "https://github.com/iavinash73/maze",
            p_stack: "HTML | CSS| SQLAlchemy | Javascript | Flask"
        }
    ]
    return (
        <div id="projects">
            <div className="h-[50px]"></div>
            <AnimatedSection>
                <h1 className="text-[21px] ml-[30px] font-DM inline font-fr font-black link link-underline link-underline-black md:text-[25px] lg:text-[32px] lg:ml-[65px] xl:text-4xl">
                    Latest Projects
                    <img src={require("../images/idea.gif")} className="inline h-[35px] lg:h-[50px] xl:h-[60px]" ></img>
                </h1>
            </AnimatedSection>

                <div className="grid gap-2 mt-[20px] ml-[40px] mr-[30px] sm:grid-cols-2">
                    {Data.map((Data, k) => (
                        <div>
                        <AnimatedSection>
                            <div className="drop-shadow-2xl relative mx-[10px] my-[20px] rounded-lg group shadow-lg lg:mx-[40px]">
                                <img src={require(`../images/${Data.p_img}`)} className="h-[400px] object-cover rounded-lg inset-0  brightness-[0.7] duration-[500ms] hover:ease-in transition-brightness group-hover:brightness-[0.4] md:w-[50rem]" />
                                <p className="absolute top-[15px] left-[10px] ml-[15px] duration-[400ms] font-black text-[21px] text-neutral-300 group-hover:text-white group-hover:scale-[1.1] font-ra lg:text-[25px]">{Data.p_title}</p>
                                <div className="absolute bottom-[15px] pl-[5px] pr-[10px]">
                                    <a href={Data.p_link} target="_blank" ><img src={require("../images/arrow.png")} className="h-[30px] ml-[15px] mb-[10px] opacity-0 duration-[400ms] group-hover:opacity-100 lg:h-[35px]" /></a>
                                    <div className="ml-[15px] translate-y-6 opacity-0 transform transition duration-[250ms]  group-hover:translate-y-0 group-hover:opacity-100 mb-[7px]">
                                        <p className="text-[16px] text-gray-300 lg:text-md">
                                            {Data.p_des}
                                        </p>
                                    </div>
                                    <div className="ml-[15px] text-[16px] font-so translate-y-6 opacity-0 transform transition duration-[250ms] text-gray-300 group-hover:translate-y-0 group-hover:opacity-100 lg:text-md">
                                        {Data.p_stack}
                                    </div>
                                </div>
                            </div>
                            </AnimatedSection>
                        </div>
                    ))}
                </div>

        </div>
    );
}
export default Projects;