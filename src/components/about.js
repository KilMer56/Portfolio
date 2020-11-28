import Header from "./common/header.js";
import picture from '../assets/images/perso.png';

import { Component } from "react";

class About extends Component {

    render(){
        return (
            <div>
                <Header title="About me"/>
                <div className="p-big">
                    <div className="flex justify-between flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 font-raleway flex justify-center flex-col">
                            <p className="text-primary text-justify">Based in France, I've always had a special interest in computer science and design. Recently graduated from a High-level engineering school (ranked 10 out of 210), I had the opportunity to work for the last 3 years on different technologies and for various customers.</p>
                            <p className="text-primary text-justify mt-4">Curious about what I'm going to learn next, I'm always looking for new experiences, even if it means getting out of my comfort zone. I'm actually looking for a FullStack/Front-end software engineer position for January 2021 in Amsterdam.</p>
                            <p className="text-primary text-justify mt-8">Here are a few technologies I've been working with recently :</p>
                            <div className="grid gap-4 grid-cols-3 font-raleway mt-8">
                                <div className="flex flex-row items-center 979797">
                                    <div className="arrow-right arrow-teal mr-4"></div>
                                    <span className="text-grey-2">Java</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="arrow-right arrow-purple mr-4"></div>
                                    <span className="text-grey-2">Javascript</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="arrow-right arrow-pink mr-4"></div>
                                    <span className="text-grey-2">Node.js</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="arrow-right arrow-teal mr-4"></div>
                                    <span className="text-grey-2">Typescript</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="arrow-right arrow-purple mr-4"></div>
                                    <span className="text-grey-2">Python</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="arrow-right arrow-pink mr-4"></div>
                                    <span className="text-grey-2">Vue.js</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 lg:pt-0 w-full lg:w-1/2 h-auto flex justify-center">
                            <img alt="" src={picture} style={{maxHeight: '25rem'}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;