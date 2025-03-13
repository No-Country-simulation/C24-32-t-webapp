
import React, { useState } from "react";
import SuccessModal from "../SuccessModal/SuccessModal";
import  './ConfirmationModal.css'

const ConfirmationModal = ({ onClose }) => {
    const [showNext, setShowNext] = useState(false);

    return (
        <div>

            {!showNext ? (
                <div className="modal">
                    <div className="modalContent">
                    <section className="headingModal">
                            <h2 className="titleModal">Confirmación compra de Bitcoin (BTC)</h2>
                        </section>

                        <section className="bodyModal">
                            <div className="subtitles">
                                <h2 className="titleBody">Contenido</h2>
                                <p className="textChange">Sujeto a cambios</p>
                            </div>

                            <div className="contentConfirmation">

                                <div className="confirmation">
                                    <p className="textConf">Precio actual</p>
                                    <p className="textConf">$1,940,000 MXN</p>
                                </div>

                                <div className="confirmation">
                                    <p className="textConf">Cantidad a comprar</p>
                                    <p className="textConf">0.002 </p>
                                </div>

                                <div className="confirmation">
                                    <p className="textConf">Total a pagar</p>
                                    <p className="textConf">$3,880 MXN</p>
                                </div>

                                <div className="confirmation">
                                    <p className="textConf">Tarifa de transacción</p>
                                    <p className="textConf">$19.40 MXN</p>
                                </div>

                            </div>

                            <div className="totalContent">
                                <div className="totalBlock">
                                    <p className="totalText">Saldo</p>
                                    <p className="totalNumber"> $771.76 USD</p>
                                </div>
                                <p className="adjustment">El precio de mercado puede cambiar antes de confirmar la compra.</p>
                            </div>

                        </section>

                        <section className="footerConfirmation">
                            <button className="btn btnConfirmation" onClick={() => setShowNext(true)}>Confirmar compra</button>
                            <button className="btn btnReturn" onClick={onClose}>Volver</button>
                        </section>
                    </div>
                </div>
            ) : (
                <SuccessModal />
            )}

        </div>
    )
}

export default ConfirmationModal
