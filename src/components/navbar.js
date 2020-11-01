import logo from '../assets/images/logo_white.png';

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap px-6 py-2">
            <img class="h-16" alt="" src={logo}/>
            <div class="w-full lg:flex lg:w-auto">
                <div class="text-md font-raleway">
                    <a href="#about" class="text-primary mr-8">
                        About me
                    </a>
                    <a href="#experience" class="text-primary mr-8">
                        Experience
                    </a>
                    <a href="#education" class="text-primary mr-8">
                        Education
                    </a>
                    <a href="#projects" class="text-primary mr-8">
                        Projects
                    </a>
                    <a href="#more" class="text-primary mr-8">
                        More info
                    </a>
                    <a href="#contact" class="text-primary">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;