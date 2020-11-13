import Header from "./common/header.js";

import { Component } from "react";

class MoreInfo extends Component {

    render(){
        return (
            <div>
                <Header title="More Info"/>
                <div className="p-big font-raleway text-primary flex justify-center">
                    <div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:mr-16 mb-8 lg:mb-0">
                                <h4 className="text-3xl font-bold mb-4">Personal interests</h4>
                                <ul className="md:leading-10 text-grey-2 text-lg md:pl-5">
                                    <li className="md:bullet md:bullet-teal">Led the communication department of the Sports Office of the School</li>
                                    <li className="md:bullet md:bullet-purple">Designed the visual identity of the Galaorganized by the School</li>
                                    <li className="md:bullet md:bullet-pink">Belonged to the Students Union office in 2017</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold mb-4">Languages</h4>
                                <ul className="text-justify md:leading-10 text-grey-2 text-lg">
                                    <li><span className="font-bold gradient">French</span> - Native</li>
                                    <li><span className="font-bold gradient">English</span> - C1 level, IELTS 7.0</li>
                                    <li><span className="font-bold gradient">Spanish</span> - A2+ level</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-3xl font-bold mb-4">Skills</h4>
                            <ul className="text-justify md:leading-10 text-grey-2 text-lg">
                                <li className="mb-8 md:mb-0"><span className="font-bold gradient">Programming (experienced)</span> : Java, Node.js, Typescript, Javascript, Vue.Js, Salesforce</li>
                                <li className="mb-8 md:mb-0"><span className="font-bold gradient">Programming (knowledge)</span> : Python, Docker, GCP, Flutter, PHP, MySQL, MongoDB, ElasticSearch, Hadoop</li>
                                <li><span className="font-bold gradient">Other</span> : Video Editing, Graphic Design, Photography, Breakdance, Entrepreneurship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoreInfo;