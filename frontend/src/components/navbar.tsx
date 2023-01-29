export default function Navbar(){
    return(
        <nav className="bg-nav-blue flex py-5 shadow-lg px-2">
            <div className="flex-1">LOGO</div>
            <div className="flex-2 text-3xl font-bold">
                <h3>Video-chat</h3>
            </div>
            <div className="flex flex-1 justify-end text-white font-bold">
                <button className="bg-login-bt border-2 rounded-md border-solid px-5 py-2">Login</button>
            </div>
        </nav>
    )
}