import Header from "./common/header.js";
import experiences from "../assets/json/experiences.json"

import { Component } from "react";
import classNames from "classnames";

function renderSideBar(currentIndex, onClickListener) {
    return experiences.map((data, index) => {
        return (
            <div className={classNames({
                'cursor-pointer py-4 px-3 lg:px-0 px-cursor-pointer w-full border-b-2 lg:border-b-0 lg:border-r-2': true,
                'border-white': index === currentIndex,
                'text-grey border-grey': index !== currentIndex
                })}
                onClick={() => onClickListener(index)}>
                {data.company}</div>
        )
    })
}

function renderExperience(data) {
    return (
        <div class="text-primary mt-12 lg:mt-0">
            <p><span class="font-bold text-2xl pr-4">{data.title}</span><span class="block lg:inline-block text-grey text-xl">{data.company}</span></p>
            <p class="mt-2 mb-12"><span class="pr-4">{data.dates}</span><span class="text-grey">{data.location}</span></p>
            <ul>
                {data.facts.map((fact) => {
                    return (
                        <li class="text-grey-2 mb-4 text-justify">{fact}</li>
                    )
                })}
            </ul>
        </div>
    )
}

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0};
    }

    onClick = (index) => {
        this.setState({
            selectedIndex: index
        })
    }

    render(){
        return (
            <div>
                <Header title="Experience"/>
                <div class="p-big font-raleway ">
                    <div class="flex flex-col lg:flex-row justify-between items-start">
                        <div class="w-full lg:w-1/4">
                            <div class="whitespace-no-wrap overflow-x-auto flex lg:flex-col text-center text-primary text-2xl">
                                {renderSideBar(this.state.selectedIndex, this.onClick)}
                            </div>
                        </div>
                        <div class="w-full lg:w-3/4 px-0 lg:px-16">
                            {renderExperience(experiences[this.state.selectedIndex])}                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;