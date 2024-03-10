import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBehance, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import Form from "./Form";

export default function Contact() {
    return (
        <div id="contact" className="mx-auto bg-black text-white flex flex-col-reverse lg:flex-row justify-center gap-16 py-32 px-12 md:px-32 text-center md:text-left border-y-2 border-neutral-900">
            <div className=" w-full lg:w-1/2">
                <Form />
            </div>
            <div className=" w-full lg:w-1/2 flex flex-col gap-6 justify-center">
                <div>
                    <p className="text-base text-gray-400">ARE YOU READY?</p>
                    <h1 className="text-6xl font-bold">Elevate your brand to the next level!</h1>
                    <p>Tell me about your brand, let me assess and let's make you something cool!</p>
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:justify-end lg:justify-start ">
                    <div className="flex flex-col justify-end text-left gap-3">
                        <div className=" flex flex-col text-center md:text-left text-gray-400">
                            <a href="#" className="hover:text-gray-500">E: someone@gmail.com</a>
                            <a href="#" className="hover:text-gray-500">T: +91 1234567890</a>
                        </div>
                        <div className="flex gap-6">
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a> | <a href="#"><FontAwesomeIcon icon={faBehance} /></a> | <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a> | <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 w-32">
                        <img className="rounded-full object-cover" src="./profile.webp" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}