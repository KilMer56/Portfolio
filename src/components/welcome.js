function Welcome() {
    return (
        <div className="flex justify-between p-big mt-20">
            <div className="py-16 font-raleway">
                <p className="text-dark text-3xl">Hi, my name is</p>
                <div className="py-3">
                <span className="text-background bg-white font-extrabold text-5xl md:text-6xl py-1 px-2">Killian Mer</span>
                </div>
                <p className="gradient font-bold text-3xl md:text-4xl">I'm a curious Software Engineer.</p>
            </div>
        </div>
    );
}

export default Welcome;