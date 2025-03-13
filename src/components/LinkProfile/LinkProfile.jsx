import './LinkProfile.css';
import { Link } from 'react-router-dom';

const LinkProfile = () => {
    return (
        <Link className="linkProfile" to="../profile">
            <img src="../img/iconoFlechaPlan.svg" alt="" className="iconReturn" />
            Retornar
        </Link>
    )
}

export default LinkProfile
