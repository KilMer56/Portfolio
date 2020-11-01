import logo from '../assets/images/logo.png';
import picture from '../assets/images/perso.png';

function Welcome() {
    return (
        <div class="lg:w-3/4 flex justify-between p-big">
            <div class="py-80 font-raleway">
                <p class="text-dark text-3xl">Hi, my name is</p>
                <div class="py-3">
                <span class="text-background bg-white font-extrabold text-6xl py-1 px-2">Killian Mer</span>
                </div>
                <p class="text-grey font-bold text-4xl">I'm a curious Software Engineer.</p>
            </div>
        </div>
    );
}

export default Welcome;