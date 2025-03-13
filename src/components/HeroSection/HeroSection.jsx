import './HeroSection.css';
import { Link } from "react-router-dom";

const heroSection = () => {
    return (
        <section className="heroSection">

            <div className="heroSectionCenter">
                <section className="heroSectionHeading">
                    <div className="headingBlock">
                        <h1 className="mainHeading">Simula, Aprende y Domina el Mercado Cripto</h1>
                        <div className="ctas">
                            <Link to="../Login" className="cta ctaLogin">Iniciar</Link>
                            <Link to="../register" className="cta ctaRegister">Registrarse</Link>
                        </div>
                    </div>
                    <div>
                        <img src="/img/ilustracionHeroSection.webp" alt="Ilustracion Hero Section" className="imageHeroSection"/>
                    </div>
                </section>

                <section className="heroSectionCards">
                    <div className="card">
                        <img src="/img/iconosHeroSection01.svg" alt="" className="image"/>
                        <p className="text">Consulta precios actualizados de criptomonedas y monedas LATAM al instante.</p>
                    </div>
                    <div className="card">
                        <img src="/img/iconosHeroSection02.svg" alt="" className="image"/>
                        <p className="text">Opera con $1000 USD ficticios y prueba estrategias sin riesgo.</p>
                    </div>
                    <div className="card">
                        <img src="/img/iconosHeroSection03.svg" alt="" className="image"/>
                        <p className="text">Compara tus inversiones con la inflación y monedas locales.</p>
                    </div>
                    <div className="card">
                        <img src="/img/iconosHeroSection04.svg" alt="" className="image"/>
                        <p className="text">Accede a noticias y recursos para mejorar tus decisiones en cripto.</p>
                    </div>
                </section>

                <section className="heroSectionSlider">
                    <img src="/img/cripto01.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto02.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto03.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto04.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto05.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto06.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto07.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto08.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto09.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto10.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto11.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto12.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto13.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto14.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto15.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto16.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto17.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto18.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto19.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto20.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto21.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto22.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto23.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto24.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto25.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto26.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto27.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto28.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto29.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto30.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto31.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto32.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto33.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto34.svg" alt="Icono Cripto" className="img"/>
                    <img src="/img/cripto35.svg" alt="Icono Cripto" className="img"/>
                </section>
            </div>

        </section>
    )
}

export default heroSection
