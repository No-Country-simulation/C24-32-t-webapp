
import cryptocurrencies from '../../data/cryptocurrencies';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
// import Dropdown from '../Dropdown/Dropdown';
import './DashboardProfile.css';
import { Link } from 'react-router-dom';

const DashboardProfile = () => {

    return (
        <main className="bodyDashboard">
            <HeaderProfile />
            <div className="containerDashboard">
                <LinkProfile />
                <section className="dashboardSection">
                    <section className="heading">
                        <h2 className="titleSection">Hola Carolina</h2>
                        <p className="sentence">Comenzaremos con la simulación</p>
                    </section>
                    <section className="initialBalance">
                        <h3 className="titleBalance">Saldo inicial</h3>
                        <h3 className="balance">$1000 USD</h3>
                    </section>
                    <section className="criptoCurrency">
                        <div className="headingCriptocurrency">
                            <h3 className="titleBalance">Cripto monedas top</h3>
                            <div className="dropdownContainer">
                                <select className="dropdown">
                                    <option value="" disabled selected>Valor en dolares</option>
                                    <option value="usd">Estados Unidos (USD)</option>
                                    <option value="eur"> Unión Europea (EURO)</option>
                                </select>

                                <select className="dropdown">
                                    <option value="" disabled selected>Conversión en dolares</option>
                                    <option value="ars"> Argentina (ARS)</option>
                                    <option value="bob"> Bolivia (BOB)</option>
                                    <option value="brl"> Brasil (BRL)</option>
                                    <option value="clp"> Chile (CLP)</option>
                                    <option value="cop"> Colombia (COP)</option>
                                    <option value="crc"> Costa Rica (CRC)</option>
                                    <option value="usd"> Ecuador (USD)</option>
                                    <option value="gtq"> Guatemala (GTQ)</option>
                                    <option value="hnl"> Honduras (HNL)</option>
                                    <option value="mxn"> México (MXN)</option>
                                    <option value="nio"> Nicaragua (NIO)</option>
                                    <option value="pab"> Panamá (PAB) / (USD)</option>
                                    <option value="pyg"> Paraguay (PYG)</option>
                                    <option value="pen"> Perú (PEN)</option>
                                    <option value="uyu"> Uruguay (UYU)</option>
                                    <option value="ves"> Venezuela (VES)</option>
                                </select>
                            </div>
                        </div>

                        <div className="cryptoTable">
                            <section className="lineTitles">
                                <h4 className="titleTable">Cripto</h4>
                                <h4 className="titleTable">USD</h4>
                                <h4 className="titleTable">%</h4>
                            </section>

                            <input type="checkbox" id="toggleCrypto" />
                            <section className="lineCriptos">
                                <Link to="../tradingProfile" className="linkToTrading">
                                    {cryptocurrencies.map((crypto, index) => (
                                        <div className="cripto" key={index}>
                                            <p className="item">
                                                <img src={crypto.icon} alt={crypto.name} width="22" height="22" style={{ marginRight: "8px" }} />
                                                {crypto.name}
                                            </p>
                                            <p className="item">{crypto.price}</p>
                                            <p className="item" style={{ color: crypto.change.includes('-') ? '#FF0000' : '#00DA4F', fontWeight: 'bold' }}>
                                                {crypto.change}
                                            </p>
                                        </div>
                                    ))}
                                </Link>
                            </section>

                            <label htmlFor="toggleCrypto" className="toggleLabel">
                                <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                            </label>
                        </div>
                    </section>
                </section>
            </div>
            <FooterProfile />
        </main>
    );
};

export default DashboardProfile;
