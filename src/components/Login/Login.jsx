import './Login.css';
import Loader from '../Loader/Loader';
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <main className="containerLogin">
            <Loader/>
            <section className="leftSide">
                <img className="ilustracion" src="../img/criptoBitcoin.webp" alt="Ilustración" />
                <img className="ilustracion" src="../img/grupoCripto1.webp" alt="Ilustración" />
                <img className="ilustracion" src="../img/grupoCripto2.webp" alt="Ilustración" />
                <img className="ilustracion" src="../img/puntosCuadrado.webp" alt="Ilustración" />
                <img className="ilustracion" src="../img/puntosCuadrado.webp" alt="Ilustración" />
            </section>

            <section className="rightSide">
                <div className="linkReturn">
                    <Link to="/" className="returnHome">
                        <img className="returnArrow" alt="Icon Return" src="../img/flechaIconos01.svg" />
                        Retornar al inicio
                    </Link>
                </div>

                <div className="headingLogin">
                <p className="title">Inicia sesión y sigue aprendiendo</p>
                <img className="isotipo" src="../img/isotipo.svg" alt="Isotipo" />
                </div>

                <form onSubmit={handleSubmit} className="form">
                <div className="fieldSet">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Entra tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="fieldSet">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="Entra tu password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>

                {/* <button type="submit" className="btnLogin">Iniciar Sesión</button> */}
                <Link to="../Profile" className="btnLogin">iniciar Sesión</Link>
                <div className="btnArea">
                    <p className="text">Si aún no tienes una cuenta</p>
                    <Link to="../Register" className="goToRegister">¡Regístrate!</Link>
                </div>
                </form>
            </section>
        </main>
    );
};

export default Login;
