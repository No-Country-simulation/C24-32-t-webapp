import './Appmobile.css';

const AppMobile = () => {
    return (
        <section className="appMobileSection">
            <div className="appMobileCenter">
                <h1 className="titleSection">Tu Puerta de Entrada al Mundo Cripto, Pronto en tu Móvil</h1>
                <section className="appMobileBlock">
                    <div className="infoDownload">
                        <div className="heading">
                            <h2 className="subtitleSection">La Revolución Cripto en tu Bolsillo</h2>
                            <p className="text">Muy pronto, QUO estará disponible en Google Play y App Store, permitiéndote practicar estrategias, analizar mercados en tiempo real y aprender sin riesgos.</p>
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
                    </div>
                    <div className="cellphoneImage">
                        <img src="/img/laptopDownload.webp" alt="Icon Cellphone" className="laptopDownload"/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default AppMobile
