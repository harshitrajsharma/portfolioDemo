import FeedbackCard from "./FeedbackCard"

export default function Feedback() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col justify-center gap-10 py-32 px-12 md:px-32 text-center md:text-left">
            <div className="flex flex-col gap-2 items-center">
                <p className="text-base text-gray-400">TESTIMONAL</p>
                <h1 className="text-3xl font-bold">Client feedback</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FeedbackCard review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?" image="./p1.webp" name="Lukas Rippitsch" details="Founder & CEO | HROS.io + imporoove" />
                <FeedbackCard review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?" image="./p2.webp" name="Adam Singer" details="Founder & CEO | Singer Design" />
                <FeedbackCard review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?" image="./p3.webp" name="Dr. Ivan Breiner" details="Founder & Rheumatologist | Reumamanufaktura" />
                <FeedbackCard review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?" image="./p4.webp" name="Andras Ghyczy" details="Founder & Entrepreneur | Andurka + Oszi Alommesek" />
            </div>
        </div>
    )
}