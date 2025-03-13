
// SignOut.jsx

import "./SignOut.css";
import HeaderSignOut from "../HeaderSignOut/HeaderSignOut";
import FooterProfile from "../FooterProfile/FooterProfile";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <main className="bodySignOut">
      <Loader />
      <HeaderSignOut />
      <div className="containerFarewell">
        <section className="farewellSection">
          <h2 className="titleSection">
            Gracias por usar y confiar en nosotros, ¡te esperamos nuevamente!
          </h2>
          <img
            src="/img/ilustracionDespedida.webp"
            alt="Ilustration Farewell"
            className="ilustracion"
          />
          <Link to="/" className="goToHome">
            Retornar al inicio
          </Link>
        </section>
      </div>
      <FooterProfile />
    </main>
  );
};

export default SignOut;
