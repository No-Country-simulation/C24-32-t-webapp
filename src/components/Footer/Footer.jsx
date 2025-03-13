import './Footer.css';

const Footer = () => {
    return (
        <footer className="footerContainer">

            <section className="footerHeading">

                <div className="columnOne">

                    <div className="blockIsotipo">
                        <a href="#" className="blockImagotipo">
                            <img src="/img/isotipo.svg" alt="Isotipo" className="isotipo"/>
                            <img src="/img/logotipo.svg" alt="Imagotipo" className="logotipo"/>
                        </a>
                    </div>

                    <div className="socialNetwork">
                        <p className="contactus">Contactanos en</p>
                        <div className="socialNetworkIcons">
                            <a href="https://web.telegram.org/k/" target="_blank" className="item">
                                <img src="/img/iconosRedesSociales01.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://redditinc.com/" target="_blank" className="item">
                                <img src="/img/iconosRedesSociales02.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" className="item">
                                <img src="/img/iconosRedesSociales04.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://discord.com/" target="_blank" className="item">
                                <img src="/img/iconosRedesSociales03.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="item">
                                <img src="/img/iconosRedesSociales05.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://x.com/"target="_blank" className="item">
                                <img src="/img/iconosRedesSociales06.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://www.linkedin.com/"target="_blank"  className="item">
                                <img src="/img/iconosRedesSociales07.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" className="item">
                                <img src="/img/iconosRedesSociales08.svg" alt="Icon Social" className="iconSocial"/>
                            </a>
                        </div>
                    </div>

                    <div className="download">
                        <p className="textDownload">Encuentranos proximamente</p>
                        <div className="appsDownload">
                            <a href="https://www.apple.com/co/app-store/" target="_blank" className="itemDownload">
                                <img src="/img/imagenAppStore.webp" alt="Icon App Store" className="item"/>
                            </a>
                            <a href="https://play.google.com/store/games?hl=es&pli=1" target="_blank" className="itemDownload">
                                <img src="/img/imagenGooglePlay.webp" alt="Icon Google Play" className="item"/>
                            </a>
                        </div>
                    </div>

                    <div className="imageTriangle">
                        <img src="/img/imagenFooter2.webp" alt="Image Triangles" className="triangleGraphic"/>
                    </div>

                </div>

                <div className="columnTwo">

                    <section className="itemOptions">
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <a href="#mercadosSection" className="item"><img src="/img/footerMercados.svg" alt="Icon Option" className="itemIcon"/> Mercados</a>
                                </li>
                                <li>
                                    <a href="#tradingSection" className="item"><img src="/img/footerTrading.svg" alt="Icon Option" className="itemIcon"/> Trading</a>
                                </li>
                                <li>
                                    <a href="#tarifasSection" className="item"><img src="/img/footerTarifas.svg" alt="Icon Option" className="itemIcon"/> Tarifas</a>
                                </li>
                                <li>
                                    <a href="#seguridadSection" className="item"><img src="/img/footerSeguridad.svg" alt="Icon Option" className="itemIcon"/> Seguridad</a>
                                </li>
                                <li>
                                    <a href="#academySection" className="item"><img src="/img/footerAcademia.svg" alt="Icon Option" className="itemIcon"/> Academia</a>
                                </li>
                                <li>
                                    <a href="#blogSection" className="item"><img src="/img/footerBlog.svg" alt="Icon Option" className="itemIcon"/> Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>

                <div  className="columnThree">
                    <img src="/img/imagenFooter1.webp" alt="Imagen Circles" className="circleGraphic"/>
                </div>

            </section>

            <section className="footerBottom">
                <div className="footerFooterCenter">
                    <div className="developedBy">
                        <p className="developed">Desarrollado por equipo c24-32-webpapp | No Country</p>
                    </div>
                    <div className="conditions">
                        <p className="rights">Quo | All rights reserved © 2025  |</p>
                        <section className="options">
                            <a href="#" className="link">Privacy</a>
                            <a href="#" className="link">Terms</a>
                        </section>
                    </div>
                </div>
            </section>

            <div className="greenSpot"></div>
        </footer>

    )
}

export default Footer
