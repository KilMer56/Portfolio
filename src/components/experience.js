import Header from "./common/header.js";
import experiences from "../assets/json/experiences.json"

import { Component } from "react";
import classNames from "classnames";

function renderSideBar(currentIndex, onClickListener) {
    return experiences.map((data, index) => {
        return (
            <div className={classNames({
                'cursor-pointer': true,
                'py-4': true,
                'px-cursor-pointer': true,
                'w-full': true,
                'border-r-2': true,
                'border-white': index === currentIndex,
                'border-grey': index !== currentIndex,
                'text-grey': index !== currentIndex
                })}
                onClick={() => onClickListener(index)}>
                {data.company}</div>
        )
    })
}

function renderExperience(data) {
    return (
        <div class="text-primary">
            <p><span class="font-bold text-2xl pr-4">{data.title}</span><span class="text-grey text-xl">{data.company}</span></p>
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
                    <div class="flex justify-between items-start">
                        <div class="w-1/4">
                            <div class="flex flex-col text-center text-primary text-2xl">
                                {renderSideBar(this.state.selectedIndex, this.onClick)}
                            </div>
                        </div>
                        <div class="w-3/4 px-16">
                            {renderExperience(experiences[this.state.selectedIndex])}                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;