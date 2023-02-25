function Projects() {
    let Data = [
        {
            k: 1,
            p_img: "movie.jpeg",
            p_title: "Movie Recommendation system",
            p_des: "A system which would recommend movie from global dataset with matching users rating on watched movies and predicting movies which they would possibly like based on related user ratings",
            p_link: "https://github.com/iavinash73/Movie-Recommendation-System",
            p_stack:"Python-Pandas-Numpy-Neo4j-React"
        },
        {
            key: 0,
            p_img: "eyestick.jpeg",
            p_title: "EyeStick",
            p_des: "A Smart Cane for visually impared which would assist them the way by detecting obstacles,potholes,Bus Number in bus stop,monitor health and location of the user to gaurdian's phone",
            p_link: "https://github.com/iavinash73/EyeStick",
            p_stack:"IoT sensors-Arduino-Blynk-OpenCV"
        },
        {
            k: 2,
            p_img: "maze.jpeg",
            p_title: "Maze",
            p_des: "A maze game with HTML,CSS and vanilla Js which can be a stress buster for workers in their free time.SQLalchemy is used to store the user data and Flask is used for middleware.",
            p_link: "https://github.com/iavinash73/maze",
            p_stack:"HTML-CSS-SQLAlchemy-Javascript-Flask"
        }
    ]
    return (
        <div id="projects">
            <div className="h-[80px]"></div>
            <h1 className="text-4xl font-DM font-black inline font-fr font-black link link-underline link-underline-black ml-[65px]">
                Latest Projects 
                <img src={require("../images/idea.gif")} className="inline h-[50px]" ></img>
            </h1>
            <div className="grid gap-2 lg:grid-cols-2 mt-[20px] mx-[50px]">
                {Data.map((Data, k) => (
                    <a className="mx-[50px] my-[20px] rounded-lg group shadow-lg">
                        <div className="drop-shadow-2xl relative">
                            <img src={require(`../images/${Data.p_img}`)} className="h-[400px] rounded-lg inset-0  brightness-[0.7] duration-[500ms] hover:ease-in transition-brightness group-hover:brightness-[0.4] " />
                            <p className="absolute top-[335px] ml-[15px] duration-[400ms] font-black text-[25px] text-neutral-300 group-hover:text-white group-hover:top-[230px] font-ra">{Data.p_title} <a href={Data.p_link} target="_blank" ><img src={require("../images/arrow.png")} className="inline h-[45px] ml-[10px] opacity-0 duration-[400ms] group-hover:opacity-100"></img></a></p>
                            <div className="absolute top-[280px] mx-[15px] translate-y-6 opacity-0 transform transition duration-[250ms]  group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-gray-300">
                                    {Data.p_des}
                                </p>
                            </div>
                            <div className="absolute top-[350px] mx-[15px] font-so translate-y-6 opacity-0 transform transition duration-[250ms] text-gray-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {Data.p_stack}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default Projects;