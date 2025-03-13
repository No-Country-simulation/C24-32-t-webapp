

import HeaderProfile from '../HeaderProfile/HeaderProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import { Link } from "react-router-dom";
import "./PortfolioMomentaneo.css"

const PortfolioMomentaneo = () => {


    return (
        <main className="bodyProfileMomentaneo">
            <HeaderProfile />
            <div className="containerProfileMomentaneo">
                <LinkProfile />
                <section className="profileMomentaneoSection">
                    <section className="heading">
                        <h2 className="titleSection">Portfolio</h2>
                        <p className="sentence">Continuamos con la simulación</p>
                    </section>
                    <section className="cardBlock">

                        <div className="directionArrows">
                            <img className="arrowLeft" id="previousCard" src="/img/flechaIconos01.svg" alt="Arrow left" onClick={() => moveSlide(-1)} />
                            <img className="arrowRight" id="nextCard" src="/img/flechaIconos02.svg" alt="Arrow Right" onClick={() => moveSlide(1)} />
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="headingCard">
                                    <div className="blockText">
                                        <p className="text">Saldo total USD $771.76l</p>
                                    </div>

                                    <div className="blockText">
                                        <h3 className="titleCard">Ganancia/Perdida </h3>
                                        <p className="number">+2.5%</p>
                                    </div>
                                </div>

                                <div className="imageIncrease">
                                    <img src="/img/iconoIncremento.svg" alt="Icon" className="iconProfitable" />
                                </div>

                                <div className="divLink">
                                    <Link to="#" className="btn btnWhite">Comprar</Link>
                                </div>
                            </div>

                            <div className="card" id="cardTwo">

                                <div className="headingCard">
                                    <div className="blockText">
                                        <p className="text">Cantidad  Poseida</p>
                                        <div className="textCard">
                                            <img src="/img/isotipoCriptoDashboard09.svg" alt="Icon" className="iconProfitable" />
                                            <p className="titleCard">0.0002 BTC</p>
                                        </div>
                                    </div>

                                    <div className="blockText">
                                        <h3 className="text">Valor actual</h3>
                                        <p className="number">$3.888 MXN</p>
                                    </div>
                                </div>

                                <div className="blockNumbers">
                                    <div className="textCard">
                                        <p className="text">Cambio en 24h</p>
                                        <p className="number">+2.5%</p>
                                    </div>

                                    <div className="textCard">
                                        <p className="text">Tarida de transación</p>
                                        <p className="number">$19.40 MXN</p>
                                    </div>
                                </div>

                                <div className="divLink">
                                    <Link to="#" className="btn btnGrey">Vender</Link>
                                </div>
                            </div>

                            <div className="card" id="cardThree">
                                <div className="heading">
                                    <p className="titleSection">Potencia tu inversión</p>
                                    <p className="sentence">Explora nuevas oportunidades y haz crecer tu portafolio.</p>
                                </div>

                                <div className="divLink">
                                    <Link to="/academyProfile" className="btn btnGrey">Aprender más</Link>
                                    <Link to="#" className="btn btnWhite">Comprar</Link>
                                </div>
                            </div>

                        </div>

                    </section>
                    <section className="transactionBlock">

                        <div className="headingTransaction">
                            <h3 className="titleTransaction">Historial de transacciones</h3>
                        </div>

                        <div className="transactionTable">
                            <section className="lineTitles">
                                <h4 className="titleTable">Fecha y hora</h4>
                                <h4 className="titleTable">Tipo de operación</h4>
                                <h4 className="titleTable">Cantida y precio</h4>
                                <h4 className="titleTable">Estado</h4>
                            </section>

                            <input type="checkbox" id="toggleTransaction" />
                            <section className="lineTransaction">

                                <div className="transactionPlace">
                                    <p className="item">18/05/2025 10:45pm</p>
                                    <p className="item">Compra</p>
                                    <p className="item">0.002 BTC @ $1,940,000 MXN</p>
                                    <p className="item">Completado</p>
                                </div>
                                <div className="transactionPlace">
                                    <p className="item">18/05/2025 10:46pm</p>
                                    <p className="item">Tarifa aplicada</p>
                                    <p className="item">$19.40 MXN</p>
                                    <p className="item">Descontado</p>
                                </div>
                                <div className="transactionPlace">
                                    <p className="item">18/05/2025 10:46pm</p>
                                    <p className="item">Saldo restante</p>
                                    <p className="item">$771.76 USD</p>
                                    <p className="item">Disponible</p>
                                </div>
                                <div className="transactionPlace">
                                    <p className="item">No más transacciones hasta el momento 😓🔍</p>
                                </div>
                                <div className="transactionPlace">
                                    <p className="item">Te invitamos a seguir con tu aprendizaje ⚡💪</p>
                                </div>

                            </section>

                            <label htmlFor="toggleTransaction" className="toggleLabel">
                                <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                            </label>
                        </div>
                    </section>

                </section>
                <div className="goToDashboard">
                    <Link className="linkToDashboard" to="../dashboardProfile">Retornar dashboard</Link>
                </div>
            </div>
            <FooterProfile />
    </main>
    )
}

export default PortfolioMomentaneo
