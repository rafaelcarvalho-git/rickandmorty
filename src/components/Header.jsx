import './Header.css'
import logo from './logo.svg';

function Header() {
    return (
        <header className="d-flex align-items-center mx-auto my-5">
            <img src={logo} className="App-logo ms-auto" alt="logo" />
            <h1 className="text-center me-auto">React Rick and Morty</h1>            
        </header>
    );
}
export default Header;