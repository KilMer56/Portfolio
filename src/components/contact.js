import Header from "./common/header.js";

function Contact(){
    return (
        <div>
            <Header title="Contact"/>
            <div class="py-24 font-raleway text-primary">
                <p class="text-center text-3xl font-bold mb-8">Let's Get in Touch !</p>
                <div class="flex justify-center text-xl">
                    <span class="font-bold mr-6">Email address :</span>
                    <span class="text-grey-2 mr-16">mer.killian56@gmail.com</span>
                    <span class="font-bold mr-6">Links</span>
                    <a class="text-grey-2 mr-6" href="https://www.linkedin.com/in/killianmer/">Linkedin</a>
                    <a class="text-grey-2 mr-6" href="https://github.com/KilMer56">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;