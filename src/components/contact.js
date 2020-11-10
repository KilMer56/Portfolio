import Header from "./common/header.js";
import pdf from '../assets/pdf/Killian_MER__CV.pdf';

function Contact(){
    return (
        <div>
            <Header title="Contact"/>
            <div className="py-24 font-raleway text-primary">
                <p className="text-center text-3xl font-bold mb-8">Let's Get in Touch !</p>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-xl">
                    <span className="font-bold md:mr-6">Email address :</span>
                    <span className="text-grey-2 mb-8 md:mb-0 md:mr-16">mer.killian56@gmail.com</span>
                    <span className="font-bold md:mr-6">Links</span>
                    <a className="text-grey-2 md:mr-6" href="https://www.linkedin.com/in/killianmer/">Linkedin</a>
                    <a className="text-grey-2 md:mr-6" href="https://github.com/KilMer56">Github</a>
                    <a rel="noreferrer" className="text-grey-2" href={pdf} target="_blank">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;