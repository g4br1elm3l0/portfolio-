import logo from './Nu Kenzie (1).svg'
import './style.css'
const Header = ({ setIsLoggedIn }) => {


    return (
        <header className="header">
            <img src={logo} alt="" ></img>
            <button onClick={() => setIsLoggedIn(false)}>Inicio</button>
        </header>
    )

}
export default Header