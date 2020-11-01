import Header from "./common/header.js";
import picture from '../assets/images/perso.png';

function About(){
    return (
        <div>
            <Header title="About me"/>
            <div class="p-big">
                <div class="flex justify-between">
                    <div class="w-1/2 font-raleway flex justify-center flex-col">
                        <p class="text-primary text-justify">Based in France, I've always had a special interest in computer science and design. Recently graduated from a High-level engineering school, I had the opportunity to work for the last 3 years on different technologies and for various customers.</p>
                        <p class="text-primary text-justify mt-4">Curious about what I'm going to learn next, I'm always looking for new experiences, particularly abroad.</p>
                        <p class="text-primary text-justify mt-8">Here are a few technologies I've been working with recently :</p>
                        <div class="grid gap-4 grid-cols-3 font-raleway mt-8">
                            <div class="flex flex-row items-center 979797">
                                <div class="arrow-right mr-4"></div>
                                <span class="text-grey-2">Java</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div class="arrow-right mr-4"></div>
                                <span class="text-grey-2">Javascript</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div class="arrow-right mr-4"></div>
                                <span class="text-grey-2">Node.js</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div class="arrow-right mr-4"></div>
                                <span class="text-grey-2">Typescript</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div class="arrow-right mr-4"></div>
                                <span class="text-grey-2">Python</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div class="arrow-right mr-4"></div>
                                <span class="text-grey-2">Vue.js</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 h-auto flex justify-center">
                        <img alt="" src={picture} style={{maxHeight: '25rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;