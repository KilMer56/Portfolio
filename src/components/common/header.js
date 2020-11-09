function Header(props) {
    return (
        <div className="w-full border-b-2 border-white">
            <span className="text-background bg-white font-bold text-3xl py-1 px-2">{props.title}</span>
        </div>
    );
}

export default Header;