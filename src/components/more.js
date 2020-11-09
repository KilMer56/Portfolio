import Header from "./common/header.js";

function MoreInfo(){
    return (
        <div>
            <Header title="More Info"/>
            <div class="p-big font-raleway text-primary flex justify-center">
                <div>
                    <div class="flex flex-col lg:flex-row">
                        <div class="lg:mr-16 mb-8 lg:mb-0">
                            <h4 class="text-3xl font-bold mb-4">Personal interests</h4>
                            <ul class="text-justify list-disc md:leading-10 text-grey-2 text-lg pl-5">
                                <li>Led the communication department of the Sports Office of the School</li>
                                <li>Community manager of the Gala organized by the School</li>
                                <li>Belonged to the Students Union office in 2017</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-3xl font-bold mb-4">Languages</h4>
                            <ul class="text-justify md:leading-10 text-grey-2 text-lg">
                                <li><span class="font-bold">French</span> - Native</li>
                                <li><span class="font-bold">English</span> - C1 level, IELTS 7.0</li>
                                <li><span class="font-bold">Spanish</span> - A2+ level</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-3xl font-bold mb-4">Skills</h4>
                        <ul class="text-justify md:leading-10 text-grey-2 text-lg">
                            <li class="mb-8 md:mb-0"><span class="font-bold">Programming (experienced)</span> : Java, Node.js, Typescript, Javascript, Vue.Js, Salesforce languages (Apex, Lightning)</li>
                            <li><span class="font-bold">Programming (knowledge)</span>  : Python, Docker, GCP, Flutter, PHP, MySQL, MongoDB, Symfony, ElasticSearch, Hadoop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;