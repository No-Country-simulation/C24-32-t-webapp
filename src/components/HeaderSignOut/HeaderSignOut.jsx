import './HeaderSignOut.css';
import { Link } from "react-router-dom";


const HeaderSignOut = () => {
    return (
        <header className="headerSignOut">
            <div className="headerCenter">
                <div className="leftSide">
                    <Link to="/" className="imagotipo">
                        <img src="/img/isotipo.svg" alt="Isotipo" className="isotipo"/>
                        <img src="/img/logotipo.svg" alt="Icon Logotipo" className="logotipo"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderSignOut
