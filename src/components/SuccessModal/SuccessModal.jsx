

import { useNavigate } from "react-router-dom";
import "./SuccessModal.css"

const SuccessModal = () => {
    const navigate = useNavigate();

    return (
        <div className="modal">
            <div className="modalContent">
                
                <section className="headingModal">
                    <h2 className="titleModal">¡Compra realizada con éxito!</h2>
                </section>

                <section className="successContent">
                    <img src="/img/bookmark.svg" alt="success Icon" className="imgConfirmation" />
                    <p className="textSuccess">Has comprado 0,002 BTC por $3,899.40 MXN</p>
                    <p className="textSuccess">Tu nueva inversión ya está disponible en tu portfolio</p>
                </section>

                <section className="footerSuccess">
                    <p className="wish">¿Qué deseas hacer?</p>
                    <div className="ctas">
                        <button className="cta btnPortfolio" onClick={() => navigate("/portfolioMomentaneo")}>Ver mi portfolio</button>
                        <button className="cta btnProfile" onClick={() => navigate("/dashboardProfile")}>Ir al dashboard</button>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default SuccessModal
