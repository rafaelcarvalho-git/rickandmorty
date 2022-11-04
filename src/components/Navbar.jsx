import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand me-auto ms-md-5" to="/">
                    <img class="logo-image img-fluid text-center" src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" />
                </a>                 
            </div>
        </nav>
    )
}

export default Navbar