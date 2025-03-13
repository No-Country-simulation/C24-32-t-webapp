import './Profile.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import Welcome from '../Welcome/Welcome';
import FooterProfile from '../FooterProfile/FooterProfile';


const Profile = () => {
    return (
        <main className="bodyProfile">
            <HeaderProfile/>
            <Welcome/>
            <FooterProfile/>
        </main>
    )
}

export default Profile
