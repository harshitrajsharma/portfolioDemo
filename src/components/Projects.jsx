import ProjectsCard from "./ProjectsCard";


export default function Projects(){
    return(
        <div id="projects" className="mx-auto bg-black text-white flex flex-col justify-center gap-10 py-12 px-12 md:px-32 text-center md:text-left">
            <div className="flex flex-col gap-2 ">
                <p className="text-base text-gray-400">SEE MY WORK</p>
                <p className="text-5xl font-bold">Selected projects</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProjectsCard image1="./pr1.webp" image2="./pr11.webp" image3="./pr111.webp" title="Cliqlab Creative" details="Brand identity + Web design + Marketing design" />
                <ProjectsCard image1="./pr2.webp" image2="./pr22.webp" image3="./pr222.webp" title="DRB Invest" details="Brand identity + Web design" />
                <ProjectsCard image1="./pr3.webp" image2="./pr33.webp" image3="./pr333.webp" title="Marketing Amazing" details="Brand identity + Web design + Marketing design" />
                <ProjectsCard image1="./pr4.webp" image2="./pr44.webp" image3="./pr444.webp" title="Blackhole Media" details="Brand Identity + Web design" />
                <ProjectsCard image1="./pr5.webp" image2="./pr55.webp" image3="./pr555.webp" title="Xdot Architect" details="Brand identity + Web design + Marketng design" />
                <ProjectsCard image1="./pr6.webp" image2="./pr66.webp" image3="./pr666.webp" title="Inspiro Moodboards" details="Brand identity + Web design" />
            </div>
        </div>
    )
}