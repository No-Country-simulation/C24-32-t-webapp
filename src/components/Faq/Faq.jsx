import './Faq.css'

const Faq = () => {
    return (
        <section className="faqSection" id="faqSection">
            <div className="faqCenter">
                <div className="heading">
                    <h1 className="titleSection">Aprende, experimenta y domina el mundo cripto sin riesgos</h1>
                    <p className="text">Con QUO,¡Descubre, practica y conviértete en un experto en trading cripto!</p>
                </div>
                <div className="faqSet">
                    <div className="faqBlock">
                        <section className="accordionFaq">
                            <details className="detailsFaq" open>
                                <summary className="summaryFaq">
                                    <div className="optionFaq">
                                        <h3 className="subtitle">¿QUO utiliza dinero real para operar con criptomonedas?</h3>
                                        <img src="/img/iconoMasFaq.svg" alt="ArrowDown Icon" className="plus"/>
                                    </div>
                                </summary>
                                <p className="infoFaq">No, QUO es una plataforma de simulación. Los usuarios reciben $1000 USD
                                    ficticios para aprender y practicar estrategias de inversión sin riesgo.
                                </p>
                            </details>
                        </section>
                        <section className="accordionFaq">
                            <details className="detailsFaq">
                                <summary className="summaryFaq">
                                    <div className="optionFaq">
                                        <h3 className="subtitle">¿De dónde obtiene QUO las cotizaciones de criptomonedas?</h3>
                                        <img src="/img/iconoMasFaq.svg" alt="ArrowDown Icon" className="plus"/>
                                    </div>
                                </summary>
                                <p className="infoFaq">QUO se conecta a APIs de proveedores como CoinGecko y Binance para
                                    ofrecer precios en tiempo real y permitir una simulación realista del mercado.
                                </p>
                            </details>
                        </section>
                        <section className="accordionFaq">
                            <details className="detailsFaq">
                                <summary className="summaryFaq">
                                    <div className="optionFaq">
                                        <h3 className="subtitle">¿Puedo retirar mis ganancias en dinero real?</h3>
                                        <img src="/img/iconoMasFaq.svg" alt="ArrowDown Icon" className="plus"/>
                                    </div>
                                </summary>
                                <p className="infoFaq">No, ya que QUO es una plataforma educativa y de simulación.
                                    No se realizan transacciones con dinero real, solo simulaciones para aprender
                                    sobre inversión en criptos.
                                </p>
                            </details>
                        </section>
                        <section className="accordionFaq">
                            <details className="detailsFaq">
                                <summary className="summaryFaq">
                                    <div className="optionFaq">
                                        <h3 className="subtitle">¿QUO es adecuado para principiantes sin experiencia en criptomonedas?</h3>
                                        <img src="/img/iconoMasFaq.svg" alt="ArrowDown Icon" className="plus"/>
                                    </div>
                                </summary>
                                <p className="infoFaq">Sí, QUO está diseñado para usuarios de todos los niveles. Además de la
                                    simulación de inversión, cuenta con una sección educativa y noticias en tiempo real
                                    para mejorar el aprendizaje.
                                </p>
                            </details>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
