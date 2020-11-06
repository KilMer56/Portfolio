import Header from "./common/header.js";
import projects from "../assets/json/projects.json"

function Projects(){
    return (
        <div>
            <Header title="Projects"/>
            <div class="p-big font-raleway text-primary">
                <p class="font-bold text-3xl text-center mb-8">Key projects</p>
                <div class="flex justify-between py-4">
                    {projects.big.map((data) => {
                        return ( 
                            <div class="p-5 bg-dark" style={{width: "32%"}}>
                                <p class="font-bold text-xl">{data.title}</p>
                                <p class="mt-2"><span class="mr-4">{data.type}</span><span class="text-grey">{data.dates}</span></p>
                                <p class="text-grey-2 py-4">{data.description}</p>
                                <p class="text-grey">{data.technologies.map((data) => <span class="mr-4">{data}</span>)}</p>
                            </div>
                        )
                    })}
                </div>
                <p class="font-bold text-3xl text-center m-8">Small personal projects</p>
                <div class="flex justify-between py-4">
                    {projects.small.map((data) => {
                        return ( 
                            <div class="p-5 bg-dark" style={{width: "24%"}}>
                                <p class="font-bold text-xl">{data.title}</p>
                                <p class="text-grey-2 py-4">{data.description}</p>
                                <p class="text-grey">{data.technologies.map((data) => <span class="mr-4">{data}</span>)}</p>
                            </div>
                        )
                    })}
                </div>
                <p class="font-bold text-3xl text-center m-8">Events</p>
                <div class="flex justify-between py-4">
                    {projects.events.map((data) => {
                        return ( 
                            <div class="text-center" style={{width: "49%"}}>
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