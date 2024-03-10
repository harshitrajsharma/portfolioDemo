import React from "react";

export default function FooterList(props){
    return(
        <div className="flex flex-col text-center md:text-left gap-4">
            <div className="text-white text-lg font-bold">{props.heading}</div>
            <div className="flex flex-col text-gray-400  gap-2">
            <a href={props.link1} className="hover:text-gray-500">{props.opt1}</a>
            <a href={props.link2} className="hover:text-gray-500">{props.opt2}</a>
            <a href={props.link3} className="hover:text-gray-500">{props.opt3}</a>
            <a href={props.link4} className="hover:text-gray-500">{props.opt4}</a>
            </div>
        </div>
    )
}