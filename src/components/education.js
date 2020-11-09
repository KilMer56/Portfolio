import Header from "./common/header.js";
import educations from "../assets/json/educations.json"

function Education(){
    return (
        <div>
            <Header title="Education"/>
            <div className="p-big font-raleway">
                <div className="flex flex-col lg:flex-row justify-between text-primary">
                    {educations.map((data) => {
                        return ( 
                            <div key={data.school} className="w-full lg:w-1/2 lg:px-4 mb-12 lg:mb-0">
                                <p><span className="font-bold text-2xl pr-4">{data.title}</span><span className="block lg:inline-block text-grey text-xl">{data.domain}</span></p>
                                <p className="text-2xl">{data.school}</p>
                                <p className="mt-2"><span className="pr-4">{data.dates}</span><span className="text-grey">{data.location}</span></p>
                                <div className="text-justify">
                                    <p className="text-grey-2 py-8">{data.description}</p>
                                    <p className="font-bold text-lg mb-2">Coursework</p>
                                    <p className="text-grey-2">{data.coursework}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education;