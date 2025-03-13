import './Markets.css';
const Markets = () => {
    return (
        <section className="mercadosSection" id="mercadosSection">
            <div className="mercadosCenter">

                <section className="cellphone">
                    <img src="/img/cellphoneMercados.webp" alt="" className="imgCellphone"/>
                    <div className="greenSpot"></div>
                </section>

                <section className="cardMercados">

                    <div className="headingCard">
                        <h2 className="titleSection">Mercados en Tiempo Real: Analiza y Compara</h2>
                        <p className="text">Consulta cotizaciones en tiempo real, compara criptos con monedas LATAM y analiza tendencias para tomar decisiones informadas sin riesgos.</p>
                    </div>

                    <section className="cardBlock">
                        <div className="card">
                            <div className="bodyCard">
                                <h3 className="titleCard">Tendencias del Mercado</h3>
                                <p className="textCard">Sigue la evolución de las criptomonedas y su comparación con monedas LATAM en tiempo real.</p>
                            </div>
                            <div className="footerCard">
                                <img  className="criptoBunch" src="/img/criptoBunch02.svg" alt="Icon cripto"/>
                                <img src="/img/iconoMasVerde.svg" alt="" className="imgItem"/>
                                <img src="/img/cripto08.svg" alt="Icon cripto" className="imgItem"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="bodyCard">
                                <h3 className="titleCard">Análisis y Rentabilidad</h3>
                                <p className="textCard">Evalúa el rendimiento de tus inversiones simuladas y toma decisiones estratégicas sin riesgo</p>
                            </div>
                            <div className="footerCard">
                                <img  className="criptoBunch" src="/img/criptoBunch01.svg" alt="Icon cripto"/>
                                <img  className="imgItem" src="/img/iconoMasVerde.svg" alt="Icon cripto"/>
                                <img  className="imgItem" src="/img/cripto35.svg" alt="Icon cripto"/>
                            </div>
                        </div>
                    </section>

                    <section className="cta">
                        <p className="text">Inquietudes y sugerencias</p>
                        <a href="#faqSection" className="query">Vamos a comenzar</a>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Markets
