import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./BalanceModal.css";

const BalanceModal = () => {
    const [showModal, setShowModal] = useState(false); // Estado para controlar si el modal está abierto o cerrado
    const [showNext, setShowNext] = useState(false);   // Estado para cambiar entre los modales

    // Función para abrir el primer modal y resetear al estado inicial
    const openModal = () => {
        setShowModal(true);
        setShowNext(false); // Reinicia al primer modal
    };

    const handleCancel = () => setShowModal(false); // Cierra el modal

    return (
        <div>
        {/* Botón para abrir el modal */}
        <button id="btnWhite" onClick={openModal}>Comprar</button>

        {/* Modal */}
        {showModal && (
            <div className="BalanceModal">
            {!showNext ? (
                <div className="modal">
                    <div className="modalContent">

                        <section className="headingModal">
                            <h2 className="titleModal">Balance $1000 USD</h2>
                        </section>

                        <section className="bodyModal">
                            <div className="subtitles">
                                <h2 className="titleBody">Cambiar</h2>
                                <p className="textChange">Sujeto a cambios</p>
                            </div>

                            <div className="contentExchange">
                                <div className="exchange">

                                    <div className="subtitles">
                                        <img className="criptoIcon" src="/img/iconofFechaNegra.svg" alt="Icon arrow" />
                                        <img className="criptoIcon" src="/img/isotipoCriptoDashboard09.svg" alt="Cripto" />
                                        <p className="textCripto">BTC</p>
                                    </div>
                                    <div className="blockNumber">
                                        <p className="number">0.002</p>
                                    </div>

                                </div>

                                <div className="exchange">

                                    <div className="subtitles">
                                        <img className="criptoIcon" src="/img/iconofFechaNegra.svg" alt="Icon arrow" />
                                        <img className="criptoIcon" src="/img/mexicoFlag.svg" alt="Flag" />
                                        <p className="textCripto">MXN</p>
                                    </div>

                                    <div className="blockNumber">
                                        <p className="number">3.880</p>
                                    </div>
                                </div>

                            </div>

                            <div className="totalContent">
                                <div className="totalBlock">
                                    <p className="totalText">Saldo</p>
                                    <p className="totalNumber"> $771.76 USD</p>
                                </div>
                                <p className="adjustment">El intercambio se ejecutará automáticamente al precio actual del mercado</p>
                            </div>

                        </section>

                        <section className="footerModal">
                            <button className="btn btnBuy" onClick={() => setShowNext(true)}>Comprar ahora</button>
                            <button className="btn btnReturn" onClick={handleCancel}>Volver</button>
                        </section>

                    </div>
                </div>
            ) : (
                <ConfirmationModal onClose={handleCancel} />
            )}
            </div>
        )}
        </div>
    );
};

export default BalanceModal;
