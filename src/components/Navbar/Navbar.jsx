import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand mx-auto" target="_blank" href="https://rickandmortyapi.com/">
                    <img className="logo-image img-fluid text-center" src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" />
                </a>      
            </div>
        </nav>
    )
}

export default Navbar