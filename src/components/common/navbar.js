import logo from '../../assets/images/logo_white.png';

import { Component } from "react";
import classNames from "classnames";

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }

    showOrHideMenu = () => {
        this.setState(state => ({
            showMenu: !state.showMenu
        }));
    }

    render(){
        return (
            <div class="fixed w-full b-color-faded">
                <nav class="flex items-center justify-between flex-wrap px-6 py-2">
                    <img class="h-16" alt="" src={logo}/>
                    <div class="block lg:hidden">
                        <button onClick={this.showOrHideMenu} class="flex items-center px-3 py-2 border rounded text-grey-2 border-grey-2 mr-2">
                            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className={classNames({
                            'hidden': !this.state.showMenu,
                            'w-full lg:w-auto lg:inline-block': true
                        })}>
                        <div class="w-full block flex-grow lg:flex lg:w-auto justify-center">
                            <div class="text-xl md:text-base font-raleway text-grey-2 lg:flex-grow">
                                <a href="#about" class="block mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8">
                                    About me
                                </a>
                                <a href="#experience" class="block mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8">
                                    Experience
                                </a>
                                <a href="#education" class="block mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8">
                                    Education
                                </a>
                                <a href="#projects" class="block mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8">
                                    Projects
                                </a>
                                <a href="#more" class="block mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8">
                                    More info
                                </a>
                                <a href="#contact" class="block mt-6 lg:inline-block lg:mt-0 hover:text-primary">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;