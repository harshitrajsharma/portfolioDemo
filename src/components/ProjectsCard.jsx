import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsCard(props){
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="bg-neutral-800 hover:bg-neutral-700 bg-opacity-75 backdrop-filter backdrop-blur-md text-white text-left p-6 border-2 border-neutral-600 rounded-2xl flex flex-col gap-16 ">
            <div>
                <Slider {...settings}>
                <img src={props.image1} alt="projects" className=" rounded-xl" />
                <img src={props.image2} alt="projects" className=" rounded-xl" />
                <img src={props.image3} alt="projects" className=" rounded-xl" />
                </Slider>
            </div>
            <div className="flex gap-4 justify-between">
                <div className="flex flex-col justify-center marker w-1/2 md:w-3/5">
                    <p className="text-lg font-bold">{props.title}</p>
                    <p className="text-base font-light text-gray-400">{props.details}</p>
                </div>
                <div className="flex justify-end items-center marker w-1/2 md:w-2/5">
                    <a className="rounded-full px-4 py-2 bg-[#ff4800] shadow-sm  hover:shadow-white text-white" href="#">See project</a>
                </div>
            </div>
        </div>
    )
}