import './Security.css';

const Security = () => {
    return (
        <section className="seguridadSection" id="seguridadSection">
            <div className="seguridadCenter">
                <div className="heading">
                    <h1 className="titleSection">Tu seguridad, nuestra prioridad</h1>
                    <p className="text">En QUO, protegemos tu información y transacciones con tecnología de vanguardia</p>
                </div>
                <div className="deviceSet">
                    <img src="/img/seguridadIcono02.webp" alt="Icono" className="images"/>
                    <img src="/img/seguridadIlustracion.webp" alt="Set Devices" className="images"/>
                    <img src="/img/seguridadIcono01.webp" alt="Icono" className="images"/>
                    <div className="greenSpot"></div>
                </div>
            </div>
        </section>
    )
}

export default Security
