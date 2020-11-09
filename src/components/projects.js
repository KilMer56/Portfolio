import Header from "./common/header.js";
import projects from "../assets/json/projects.json"

function renderProjectCards(projects, printDetails=false){
    return projects.map((data) => {
        return ( 
            <div class="w-full md:w-1/2 lg:w-1/3 mb-4 md:mr-4 p-5 bg-dark cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                <p class="font-bold text-xl">{data.title}</p>
                {printDetails && <p class="mt-2"><span class="mr-4">{data.type}</span><span class="text-grey">{data.dates}</span></p>}
                <p class="text-grey-2 py-4">{data.description}</p>
                <p class="text-grey break-words">{data.technologies.map((data) => <span class="mr-4">{data}</span>)}</p>
            </div>
        )
    })
}

function Projects(){
    return (
        <div>
            <Header title="Projects"/>
            <div class="p-big font-raleway text-primary">
                <p class="font-bold text-3xl text-center mb-8">Key projects</p>
                <div class="flex flex-col md:flex-row justify-between py-4">
                    {renderProjectCards(projects.big, true)}
                </div>
                <p class="font-bold text-3xl text-center m-8">Small personal projects</p>
                <div class="flex flex-col md:flex-row justify-between py-4">
                    {renderProjectCards(projects.small)}
                </div>
                <p class="font-bold text-3xl text-center m-8">Events</p>
                <div class="flex flex-col md:flex-row justify-between py-4">
                    {projects.events.map((data) => {
                        return ( 
                            <div class="text-center" class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                                <p class="font-bold text-xl">{data.title}</p>
                                <p class="text-grey-2 py-4">{data.description}</p>
                                <p class="text-grey">{data.rank}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;