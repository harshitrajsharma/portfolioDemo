import React from "react";
import FooterList from "./FooterList";
import Footer2 from "./Footer2"

export default function Footer(){
    return(
        <>
        <div className="mx-auto bg-black text-white flex flex-col justify-center md:justify-between gap-6 lg:flex-row py-12 px-12 md:px-32 text-center md:text-left" >
            <div className=" lg:w-1/5 flex flex-col justify-start  gap-6">
                <div className="text-3xl font-bold">David Toth</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <FooterList heading="Overview" opt1="Projects" link1="#" opt2="About" link2="#" opt3="Contact" link3="#" />
                <FooterList heading="Socials" opt1="Instagram" link1="#" opt2="Behance" link2="#"  opt3="LinkedIn" link3="#" opt4="Dribbble" link4="#" />
                <FooterList heading="Say Hello!" opt1="Email: someone@gamil.com" link1="#" opt2="T: +91 1234567890" link2="#" />
            </div>
        </div>
        <Footer2 />
        </>
    )
}