import Header from "./common/header.js";
import projects from "../assets/json/projects.json"

function renderProjectContent(data, printDetails){
    return (
        <div className="h-full p-5 bg-dark">
            <p className="font-bold text-xl">{data.title}</p>
            {printDetails && <p className="mt-2"><span className="mr-4">{data.type}</span><span className="text-grey">{data.dates}</span></p>}
            <p className="text-grey-2 py-4 break-words">{data.description}</p>
            <p className="text-grey break-words">{data.technologies.map((data) => <span key={data} className="mr-4">{data}</span>)}</p>
        </div>
    )
}

function renderProjectCards(projects, printDetails=false){
    return projects.map((data) => {
        if(data.link){
            return (
                <a href={data.link} target="_blank" rel="noreferrer" key={data.title} className="w-full md:w-1/2 lg:w-1/3 mb-4 md:pr-4 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                    {renderProjectContent(data, printDetails)}
                </a>
            )
        }
        else {
            return (
                <div key={data.title} className="w-full md:w-1/2 lg:w-1/3 mb-4 md:pr-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                    {renderProjectContent(data, printDetails)}
                </div>
            )
        }
    })
}

function Projects(){
    return (
        <div>
            <Header title="Projects"/>
            <div className="p-big font-raleway text-primary">
                <p className="font-bold text-3xl text-center mb-8">Key projects</p>
                <div className="flex md:flex-wrap flex-col md:flex-row py-4">
                    {renderProjectCards(projects.big, true)}
                </div>
                <p className="font-bold md:flex-wrap text-3xl text-center m-8">Small personal projects</p>
                <div className="flex md:flex-wrap flex-col md:flex-row py-4">
                    {renderProjectCards(projects.small)}
                </div>
                <p className="font-bold text-3xl text-center m-8">Events</p>
                <div className="flex flex-col md:flex-row justify-between py-4">
                    {projects.events.map((data) => {
                        return ( 
                            <div key={data.title} className="text-center w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                                <p className="font-bold text-xl">{data.title}</p>
                                <p className="text-grey-2 py-4">{data.description}</p>
                                <p className="text-grey">{data.rank}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;