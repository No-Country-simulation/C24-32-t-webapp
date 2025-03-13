import './Register.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Aquí puedes agregar la lógica para registrar al usuario
    };

    return (
        <main className="containerRegister">
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

                <div className="headingRegister">
                <p className="title">Regístrate y comienza a invertir sin riesgo</p>
                <img className="isotipo" src="../img/isotipo.svg" alt="Isotipo" />
                </div>

                <form onSubmit={handleSubmit} className="form">
                <div className="fieldSet">
                    <label htmlFor="name">Nombre</label>
                    <input
                    type="text"
                    id="name"
                    placeholder="Entra tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
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
                <div className="fieldSet">
                    <label htmlFor="confirmPassword">Repite tu password</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Entra tu password de nuevo"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </div>

                {/* <button type="submit" className="btnRegister">Registrarse</button> */}
                <Link to="../Profile" className="btnRegister">Registrarse</Link>
                <div className="btnArea">
                    <p className="text">Si ya tienes una cuenta</p>
                    <Link to="../Login" className="goToLogin">¡Inicia Sesión!</Link>
                </div>
                </form>
            </section>
        </main>
    );
};

export default Register;
