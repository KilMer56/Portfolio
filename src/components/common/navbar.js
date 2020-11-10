import logo from '../../assets/images/logo_white.png';
import pdf from '../../assets/pdf/Killian_MER__CV.pdf';

import { Component } from "react";
import classNames from "classnames";

import { Link } from 'react-scroll'

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
            <div className="fixed z-10 w-full b-color-faded">
                <nav className="flex items-center justify-between flex-wrap px-6 py-2">
                    <img className="h-16" alt="" src={logo}/>
                    <div className="block lg:hidden">
                        <button onClick={this.showOrHideMenu} className="flex items-center px-3 py-2 border rounded text-grey-2 border-grey-2">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className={classNames({
                            'hidden': !this.state.showMenu,
                            'w-full lg:w-auto lg:inline-block': true
                        })}>
                        <div className="w-full block flex-grow lg:flex lg:w-auto justify-center">
                            <div className="text-xl md:text-base font-raleway text-grey-2 lg:flex-grow">
                                <Link
                                    activeClass="active"
                                    className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8"
                                    to="about_me"
                                    spy={true} smooth={true} offset={-100} duration={500}>
                                    About me
                                </Link>
                                <Link
                                    activeClass="active"
                                    className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8"
                                    to="experience"
                                    spy={true} smooth={true} offset={-100} duration={500}>
                                    Experience
                                </Link>
                                <Link
                                    activeClass="active"
                                    className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8"
                                    to="education"
                                    spy={true} smooth={true} offset={-100} duration={500}>
                                    Education
                                </Link>
                                <Link
                                    activeClass="active"
                                    className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8"
                                    to="projects"
                                    spy={true} smooth={true} offset={-100} duration={500}>
                                    Projects
                                </Link>
                                <Link
                                    activeClass="active"
                                    className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8"
                                    to="more_info"
                                    spy={true} smooth={true} offset={-100} duration={500}>
                                    More info
                                </Link>
                                <Link
                                    activeClass="active"
                                    className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary mr-8"
                                    to="contact"
                                    spy={true} smooth={true} offset={-100} duration={500}>
                                    Contact
                                </Link>
                                <a rel="noreferrer" className="transition duration-300 ease-in-out block cursor-pointer mt-6 lg:inline-block lg:mt-0 hover:text-primary border-1 border-grey hover:border-white px-2 py-1" href={pdf} target="_blank">Resume</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;