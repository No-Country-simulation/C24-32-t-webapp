import './UserProfile.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import LinkProfile from '../LinkProfile/LinkProfile';

const UserProfile = () => {
    return (
        <main className="bodyUserProfile">
            <HeaderProfile/>
            <div className="container containerUser">
                <LinkProfile/>
                <section className="userSection">

                    <div className="userCenter">

                        <section className="heading">
                            <h2 className="titleSetting">Información personal</h2>
                            <p className="content">Gestiona y actualiza tus datos personales
                            </p>
                        </section>

                        <section className="userBlock">
                            <div className="userColumn">
                                <section className="card" id="cardAvatar">
                                    <div className="headingCard">
                                        <h3 className="titleCard">Avatar</h3>
                                        <div className="userPic">
                                            <img src="/img/avatarAcademia06.svg" alt="Avatar" className="avatar"/>
                                            <img className="icon" src="/img/iconoCambiarFoto.svg" alt="Icon"/>
                                        </div>
                                    </div>
                                    <div className="footerCard">
                                        <button className="btn btnUpdate" type="button">Actualizar</button>
                                    </div>
                                </section>
                                <section className="card" id="resumeCard">
                                    <div className="headingCard">
                                        <h3 className="userName">Carolina Mendez</h3>
                                        <p className="cellphone">+53 854 1254 158</p>
                                    </div>
                                </section>

                                <section className="card">
                                    <div className="headingCard">
                                        <h3 className="titleCard">Nombre</h3>
                                        <div className="bodyCard">
                                            <p className="nameUser">Carolina Mendez</p>
                                            <img className="icon" src="/img/iconoOjoCerrado.svg" alt="Ilustración"/>
                                        </div>
                                    </div>
                                    <div className="footerCard">
                                        <button className="btn btndelete"type="button">Actualizar</button>
                                    </div>
                                </section>
                                <section className="card">
                                    <div className="headingCard">
                                        <h3 className="titleCard">Teléfono</h3>
                                        <div className="bodyCard">
                                            <p className="nameUser">+53 854 1254 158</p>
                                            <img className="icon" src="/img/iconoOjoCerrado.svg" alt="Ilustración"/>
                                        </div>
                                    </div>
                                    <div className="footerCard">
                                        <button className="btn btndelete"type="button">Actualizar</button>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <FooterProfile/>
        </main>
    )
}

export default UserProfile
