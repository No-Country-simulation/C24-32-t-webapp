import './Membership.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import Fees from '../Fees/Fees';


const Membership = () => {

    return (
        <main className="bodyMembership">
            <HeaderProfile/>
            <LinkProfile/>
            <div id="customFees">
                <Fees title="Tarifas y Planes" subtitle="Preparado para el siguiente nivel" />
            </div>
            <FooterProfile/>
        </main>
    )
}

export default Membership
