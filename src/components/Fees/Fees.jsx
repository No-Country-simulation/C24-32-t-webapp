import './Fees.css';

const Fees = ({ title = "Tarifas y planes", subtitle = "En QUO, ofrecemos opciones flexibles para que explores el mundo cripto a tu ritmo", }) => {
    return (
        <section className="tarifasSection" id="tarifasSection">
            <div className="tarifasCenter">

                <div className="heading">
                    <h2 className="titleSection">{title}</h2>
                    <p className="text">{subtitle}</p>
                </div>

                <div className="tarifasSet">

                    <article className="tarifaCard">
                        <section className="headingCard">
                            <div className="plan">
                                <p className="textPlan">Plan Free</p>
                                <p className="textOne">Mensual</p>
                            </div>
                            <div className="numbers">
                                <p className="price">$0</p>
                                <div className="bunchDolar">
                                    <img className="flag" alt="USA Flag" src="/img/usaBandera.svg"/>
                                    <p className="dolar">USD/mes</p>
                                </div>
                            </div>
                            <div className="motivationText">
                                <p className="textTwo">Aprende sin riesgos</p>
                            </div>
                        </section>

                        <input type="checkbox" id="openContextFree"/>
                        <label htmlFor="openContextFree" className="open">
                            <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                        </label>

                        <div className="wrapped">
                            <label htmlFor="openContextFree"></label>

                            <section className="bodyCard">
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">$1,000 USD en fondos virtuales para practicar trading</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Acceso a la simulación de trading con criptomonedas</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Datos de mercado en tiempo real</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Análisis de tendencias y gráficos básicos</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Acceso a la Academia QUO con contenido educativo esencial</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Sincronización con mercados reales</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Ideal para quienes quieren conocer el mundo cripto sin invertir dinero real.</p>
                                </div>
                            </section>

                            <section className="footerCard">
                                <a href="#" className="link">Suscribete a Plan Free</a>
                            </section>
                        </div>

                    </article>
                    <article className="tarifaCard premium">
                        <section className="headingCard">
                            <div className="plan">
                                <p className="textPlan">Plan Premium</p>
                                <p className="textPremium">Anual</p>
                            </div>
                            <div className="numbers">
                                <p className="price">$149.99</p>
                                <div className="bunchDolar">
                                    <img className="flag" alt="USA Flag" src="/img/usaBandera.svg"/>
                                    <p className="dolar">USD/año(Ahorra 2 meses)</p>
                                </div>
                            </div>
                            <div className="motivationText">
                                <p className="textTwo">Tu mejor inversión</p>
                            </div>
                        </section>

                        <input type="checkbox" id="openContextPremium"/>
                        <label htmlFor="openContextPremium" className="open">
                            <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                        </label>

                        <div className="wrapped">
                            <label htmlFor="openContextPremium"></label>
                            <section className="bodyCard">
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Acceso ilimitado a todas las funciones Premium</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Análisis avanzados y predicciones basadas en IA</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Estrategias automatizadas con backtesting</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Webinars y mentorías exclusivas con expertos del sector</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Descuento especial en futuras actualizaciones y nuevas funciones</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Soporte VIP con atención prioritaria</p>
                                </div>

                            </section>
                            <section className="footerCard">
                                <a href="#" className="link">Suscribete a Plan Premium</a>
                            </section>
                        </div>

                    </article>
                    <article className="tarifaCard">
                        <section className="headingCard">
                            <div className="plan">
                                <p className="textPlan">Plan Platinum</p>
                                <p className="textOne">Mensual</p>
                            </div>
                            <div className="numbers">
                                <p className="price">$14.99 </p>
                                <div className="bunchDolar">
                                    <img className="flag" alt="USA Flag" src="/img/usaBandera.svg"/>
                                    <p className="dolar">USD/mes</p>
                                </div>
                            </div>
                            <div className="motivationText">
                                <p className="textTwo">Potencia tu estrategia</p>
                            </div>
                        </section>

                        <input type="checkbox" id="openContextPlatinum"/>
                        <label htmlFor="openContextPlatinum" className="open">
                            <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                        </label>

                        <div className="wrapped">
                            <label htmlFor="openContextPlatinum"></label>
                            <section className="bodyCard">
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Todas las funciones del Plan Free</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Herramientas avanzadas de análisis y predicción</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Simulación con estrategias de inversión automatizadas</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Acceso exclusivo a contenido avanzado en la Academia QUO</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Comparación de estrategias con traders destacados</p>
                                </div>
                                <div className="features">
                                    <img src="/img/iconoCheckVerde.svg" alt="Check" className="check"/>
                                    <p className="option">Soporte prioritario</p>
                                </div>
                            </section>
                            <section className="footerCard">
                                <a href="#" className="link">Suscribete a Plan Platinum</a>

                            </section>
                        </div>

                    </article>
                </div>
            </div>

        </section>
    )
}

export default Fees
