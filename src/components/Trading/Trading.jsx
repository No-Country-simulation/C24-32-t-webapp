import './Trading.css';

const Trading = () => {
    return (
        <section className="tradingSection" id="tradingSection">
            <div className="tradingCenter">
                <section className="card">
                    <div className="headingCard">
                        <h2 className="titleSection">Domina el Trading sin Riesgos</h2>
                        <p className="text">Prueba estrategias en tiempo real con nuestro simulador sin arriesgar dinero real</p>
                    </div>
                    <div className="imageScreenshot">
                        <img src="/img/pantallaTrading1.webp" alt="Screenshot" className="screenshot"/>
                    </div>
                </section>
                <section className="card">
                    <div className="headingCard">
                        <h2 className="titleSection">Simula, Analiza y Gana Experiencia</h2>
                        <p className="text">Compra y vende criptos fácilmente con cotizaciones actualizadas y seguimiento de tus movimientos.</p>
                    </div>
                    <div className="imageScreenshot">
                        <img src="/img/pantallaTrading2.webp" alt="Screenshot" className="screenshot"/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Trading
