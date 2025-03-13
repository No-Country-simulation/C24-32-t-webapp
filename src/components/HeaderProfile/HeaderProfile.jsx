import './HeaderProfile.css';
import { NavLink } from "react-router-dom";
import { useSignOutModal } from "../../context/SignOutModalContext";

const HeaderProfile = () => {
    const { openModal } = useSignOutModal();

    return (
        <header className="headerProfile">

            <input type="checkbox" id="menu"/>
            <div className="headerCenter">
                <div className="leftSide">
                    <label htmlFor="menu" className="activeMenu">
                        <img src="../img/iconoMenu.svg" alt="Icon Menu" className="menuIcon"/>
                    </label>

                    <img src="../img/isotipo.svg" alt="Isotipo" className="isotipo"/>
                </div>
                <div className="rightSide">
                    <p className="userName">Carolina Mendez</p>
                    <img src="../img/avatarAcademia06.svg" alt="Avatar" className="avatar"/>
                </div>
            </div>

            <div className="darkScreen">
                <label htmlFor="menu" className="activeMenu">

                </label>
            </div>

            <div className="menuSide">
                <label htmlFor="menu" className="activeMenu">
                    <img src="../img/iconoCerrar.svg" alt="Icon Menu" className="closeIcon"/>
                </label>
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink to="../dashboardProfile" className="item">
                                <img src="/img/iconoDashboard.svg" alt="Icon" className="img"/>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="../portfolio" className="item">
                                <img src="/img/iconoPortfolio.svg" alt="Icon" className="img"/>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="../academyProfile" className="item">
                                <img src="/img/iconoAcademia.svg" alt="Icon" className="img"/>
                                Academia Cripto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="../membership" className="item">
                                <img src="/img/iconoMembresia.svg" alt="Icon" className="img"/>
                                Membresía <span>Plan Free</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="../userProfile" className="item">
                                <img src="/img/iconoUsuario.svg" alt="Icon" className="img"/>
                                Usuario
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="../setting" className="item">
                                <img src="/img/iconoConfiguracion.svg" alt="Icon" className="img"/>
                                Configuración
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={openModal} className="item">
                                <img src="/img/iconoSalir.svg" alt="Icon" className="img" />
                                Salir
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderProfile
