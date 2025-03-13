import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="headerCenter">
                <div className="blockIsotipo">
                    <a href="#" className="blockImagotipo">
                        <img className="isotipo" src="/img/isotipo.svg" alt="Isotipo"/>
                        <img className="logotipo" src="/img/logotipo.svg" alt="Imagotipo"/>
                    </a>
                </div>
                <div className="itemOptions">
                    <nav className="navbar">
                        <ul>
                            <li><a href="#mercadosSection" className="item">Mercados</a></li>
                            <li><a href="#tradingSection" className="item">Trading</a></li>
                            <li><a href="#tarifasSection" className="item">Tarifas</a></li>
                            <li><a href="#seguridadSection" className="item">Seguridad</a></li>
                            <li><a href="#academySection" className="item">Academia</a></li>
                            <li><a href="#blogSection" className="item">Blog</a></li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <Link to="../login" className="button">Iniciar</Link>
                        <Link to="../register" className="button">Registrarse</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
