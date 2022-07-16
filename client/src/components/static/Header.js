export function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-area">
                    <div className="logo">
                        <a href="index.html"><img src="/img/logo.png" alt="logo" /></a>
                    </div>
                    <div className="header-right">
                        <form action="#">
                            <input type="text" placeholder="Home Alone 2" />
                            <button><i className="icofont icofont-search"></i></button>
                        </form>
                        <ul>
                            <li><a href="/">Welcome Guest!</a></li>
                            <li><a href="/">Home</a></li>
                            {/* <li><a href="/">Add Movie</a></li> */}
                            <li><a href="/">Movies</a></li>
                            <li><a href="/">Profile</a></li>
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Register</a></li>
                            <li><a href="/">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}