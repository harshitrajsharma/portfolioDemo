import DisplayCard from "./DisplayCard";
import Intro from "./Intro";
import { FaDotCircle } from "react-icons/fa";


export default function Hero() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col justify-center gap-16 lg:gap-40 pt-40 pb-24 px-12 md:px-32 text-center md:text-left">
            <div className="flex flex-col gap-8 py-8">
                <div className="text-left">

                    <p className="flex gap-4 justify-center items-center pb-4"><FaDotCircle style={{color: "#03bd00",}} />Available for work</p>
                    <div className="flex justify-center">
                        <div className="flex justify-end">
                            <h1 className="text-6xl font-bold text-center">Digital-first <br /> brand designer</h1>
                        </div>
                        <div className="hidden md:flex justify-start">
                            <img className=" rounded-full h-24 w-24 object-cover" src="./profile.webp" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className=" w-[80%] lg:w-[60%] xl:w-[40%] text-center">
                        I'm an experienced designer collaborating with companies with a primary focus on brand assets within the digital space, such as logo and web design, social media content & more.
                    </p>
                </div>
                <div className="flex gap-4 justify-center">
                    <a href="#projects" className="px-4 py-2 rounded-full bg-[#ff4800] shadow-sm  hover:shadow-white  text-black font-bold">
                        See my work
                    </a>
                    <a href="#" className="px-4 py-2 rounded-full shadow-sm hover:shadow-[#ff4800] border-neutral-500 bg-neutral-800  text-white font-bold">
                        About me
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <DisplayCard image="./1.webp" title="Identity design" details="The visuals of a brand play a huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." />
                <DisplayCard image="./2.webp" title="Marketing design" details="You have a great looking brand. Awesome! Time to show people through social media and promotions. Let's make some great-looking and effective designs!" />
                <DisplayCard image="./3.webp" title="Web design" details="Having a website for your brand is the baseline, but without proper structure and design principles it won't work well. I will help you stand out in the digital space." />
            </div>
            <div>
                <Intro />
            </div>
        </div>
    )
}